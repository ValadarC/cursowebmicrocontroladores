const localidad = document.querySelector('#localidad');
const hora = document.querySelector('#hora');
const temperatura = document.querySelector('#temperatura');
const actualmente = document.querySelector('#actualmente');
const icono = document.querySelector('#icono');
const humedad = document.querySelector('#humedad');
const wind = document.querySelector('#wind');
const max = document.querySelector('#max');
const min = document.querySelector('#min');

const getTiempoFromAPI = async (data) => {
    const appId = '533f2254b85189c50ad7dca7c14ce25c';
    const latitud = data.coords.latitude;
    const longitud = data.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&lang=es&appid=${appId}`;
    //const urlVariosDias = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitud}&lon=${longitud}&units=metric&lang=es&cnt=10&appid=${appId}`;
    //console.log(urlVariosDias)
    try {
        const respuesta = await fetch(url);
        const datosTiempo = await respuesta.json();
        mostrarHTMLAPI(datosTiempo);
    } catch (error) {
        console.log(error);
        localidad.textContent = 'Error de acceso al servicio del tiempo';
    }
};

const mostrarHTMLAPI = (datosTiempo) => {
    console.log(datosTiempo);
    const {
        name,
        weather,
        dt,
        wind: { speed },
        main: { temp, temp_max, temp_min, humidity }
    } = datosTiempo;

    localidad.textContent = name;
    hora.textContent = new Date(dt * 1000).toLocaleString();
    temperatura.textContent = Math.round(temp) + ' ºC';
    humedad.textContent = humidity + '%';
    wind.textContent = speed + ' m/s';
    const imagen = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
    actualmente.textContent = weather[0].description.toUpperCase();
    icono.src = imagen;
    icono.alt = `imagen de ${weather[0].description}`;
    max.textContent = Math.round(temp_max) + ' ºC';
    min.textContent = Math.round(temp_min) + ' ºC';
};

document.addEventListener('DOMContentLoaded', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getTiempoFromAPI);
    } else {
        localidad.textContent = 'Tu navegador no permite geolocalizar';
    }
});

// Información sobre el webmanifest
// https://developer.mozilla.org/es/docs/Web/Manifest

// Generador de imágenes para PWA
// https://www.pwabuilder.com/imageGenerator