// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCST-26kLZcTsORDuy_RcWZ6sHzWnfLWek',
  authDomain: 'chatjs-c7f6e.firebaseapp.com',
  projectId: 'chatjs-c7f6e',
  storageBucket: 'chatjs-c7f6e.appspot.com',
  messagingSenderId: '346483363480',
  appId: '1:346483363480:web:1715b3908063fdb8c38aed'
};

let map;
let latitud;
let longitud;
let markers = [];
let id;
// Clave de mapbox. NECESARIA

mapboxgl.accessToken = 'pk.eyJ1Ijoiamxwcm9mZXNvciIsImEiOiJjbHNhdHB3ZDEwNzNsMmpvNWxhMTRpNDNzIn0.b5FJ5Uz1mF4oCXB2YbTCJQ';
const btnAceptar = document.querySelector('#aceptar');
const btnMiPosicion = document.querySelector('#mostrarMiPosicion');
const btnNoMiPosicion = document.querySelector('#noMostrarMiPosicion');
const inputNombre = document.querySelector('#nombre');

// Suscripción a los datos de la colección comunidad
const suscripcionTiempoReal = () => {
  onSnapshot(collection(db, 'comunidad'), (data) => {
    // Este array es para poder, una vez recorridos los usuarios, ajustar las dimensiones del mapa
    const coordenadasUsuarios = [];
    // Para agegar marcadores, debemos eliminar los antiguos
    markers.forEach((x) => x.remove());
    // Por cada usuario conectado (doc), necesitamos su nombre y sus coordenadas
    data.docs.forEach((doc) => {
      const longitud = doc.data().longitud;
      const latitud = doc.data().latitud;
      const nombre = doc.data().nombre;
      // agregarMarcador dibujará un pin por cada usuario en el mapa
      agregarMarcador(longitud, latitud, nombre);
      coordenadasUsuarios.push([longitud, latitud]);
    });

    // función para ajustar las dimensiones del mapa
    ajustarMapa(coordenadasUsuarios);
  });
};

const geolocalizar = () => {
  if (navigator.geolocation) {
    btnMiPosicion.disabled = false;
    // Cuando obtenemos la geolocalización dibujamos el mapa y...
    navigator.geolocation.getCurrentPosition(dibujarMapa);
    // ... vigilamos los movimientos par aactualizar la posición
    navigator.geolocation.watchPosition(actualizaMiPosicion);
  } else {
    alert('Tu navegador no permite geolocalizar');
  }
};

const dibujarMapa = (dataGeo) => {
  latitud = dataGeo.coords.latitude;
  longitud = dataGeo.coords.longitude;
  // Dibujamos el mapa en el html dentro del div con id 'map'. Como centro de mapa, ponemos nuestras coordenadas
  map = new mapboxgl.Map({
    container: 'map',
    center: [longitud, latitud],
    zoom: 9
  });

  // Llamamos a la función que nos va a servir para escuchar en tiempo real los cambios de los datos alojados en Firebase
  suscripcionTiempoReal();
};

const ajustarMapa = (coordenadasUsuarios) => {
  // Si no hay más que un usuario no hace falta reajustar el mapa, el propio usuario conectado determinará el centro del mapa mediante sus coordenadas
  if (coordenadasUsuarios.length > 1) {
    // Creamos una colección de LngLatBounds necesaria para luego saber los puntos en los que se ajustará el mapa
    const llb = new mapboxgl.LngLatBounds(coordenadasUsuarios);
    const sw = llb.getSouthWest(); // obtenemos la esquina suroeste
    const ne = llb.getNorthEast(); // obtenemos la esquina noreste
    map.fitBounds([sw, ne], { padding: 50 }); // y ajustamos el mapa con un margen de 50
  } else {
    map.flyTo({
      center: coordenadasUsuarios[0]
    });
  }
};

// Si no se escribe nombre de usuario, no dejaremos aceptar
const checkNombre = () => {
  btnAceptar.disabled = inputNombre.value.trim() === '';
};

// Función para agregar mi posición a la colección de usuarios de Firebase.
// Al ejecutarse, la suscripción se hará eco del cambio y redibujará todo (función suscripcionTiempoReal)
const mostrarMiPosicion = async () => {
  try {
    const persona = await addDoc(collection(db, 'comunidad'), {
      nombre: inputNombre.value,
      latitud: latitud,
      longitud: longitud
    });
    id = persona.id;
    btnMiPosicion.disabled = true;
    btnNoMiPosicion.disabled = false;
  } catch (error) {
    console.log(error);
  }
};

// agregarMarcador dibuja un pin por cada usuario
const agregarMarcador = (longitud, latitud, nombreUsuario) => {
  const marker = new mapboxgl.Marker({ color: 'black' })
    .setLngLat([longitud, latitud])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${nombreUsuario}</h3><p>${nombreUsuario}</p>`))
    .addTo(map);
  // Agregamos los pines al array de pines para poder luego eliminarlos
  markers.push(marker);
};

// Borramos de Firestore nuestro registro.
// Al ejecutarse, la suscripción se hará eco del cambio y redibujará todo (función suscripcionTiempoReal)
const noMostrarMiPosicion = async () => {
  try {
    await deleteDoc(doc(db, 'comunidad', id));
    btnMiPosicion.disabled = false;
    btnNoMiPosicion.disabled = true;
    id = null;
    inputNombre.value = '';
  } catch (error) {
    console.log(error);
  }
};

// En la función geolocalizar, hemos establecido una escucha de movimiento. Cuando se detecta movimiento se ejecuta esta función
// los datos (dataGeo) viene de forma automática
const actualizaMiPosicion = async (dataGeo) => {
  latitud = dataGeo.coords.latitude;
  longitud = dataGeo.coords.longitude;
  // Si hay geolocalización previa (id tendrá información) modificamos el nombre
  if (id) {
    try {
      const usuarioRef = doc(db, 'comunidad', id);
      await setDoc(usuarioRef, { nombre: inputNombre.value, latitud: latitud, longitud: longitud }, { merge: true });
    } catch (error) {
      console.log(error);
    }
  }
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

inputNombre.addEventListener('input', checkNombre);
document.addEventListener('DOMContentLoaded', geolocalizar);
btnAceptar.addEventListener('click', mostrarMiPosicion);
btnNoMiPosicion.addEventListener('click', noMostrarMiPosicion);
// Mejoras:
// No dejar identificarse con un nombre que exista
// Gestionar la actualización de la web (localStorage)
