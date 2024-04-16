// Las interfaces se utilizan mucho en TypeScript. Son algo parecido a las clases pero solo con propiedades.
// No tienen ni constructor ni métodos. Nos vendrán muy bien para tipar objetos de bases de datos nuestras o de bases de datos que vengan desde un web service
// Basta con poner interface, darle un nombre, abrir llaves y enumerar las propiedades con sus tipos

import { IPais } from "./pais.interface";

interface IFactura {
    numero: string;
    cliente: string;
    importe: number;
    pagada?: boolean; // El ? determina que una propiedad van a ser opcional cuando un objeto sea tipado bajo la interface
}
  
let facturas: IFactura[] = [
    {
        numero: '2022/1',
        cliente: 'Seat',
        importe: 1000
    },
    {
        numero: '2022/2',
        cliente: 'Renault',
        importe: 1500,
        pagada: true
    },
    {
        numero: '2022/3',
        cliente: 'Seat',
        importe: 3000
    },
    {
        numero: '2022/4',
        cliente: 'Fiat',
        importe: 500
    }
];

for (let factura of facturas) {
    console.log(factura);
}

// Funciones flecha
facturas.forEach(factura => {
    console.log(factura);
    console.log(factura.cliente);
    console.log((factura.importe * 21) / 100);
});

let facturasSeat = facturas.filter((x) => x.cliente === 'Seat');
let facturasImporteMayor1000 = facturas.filter((x) => x.importe > 1000);
console.log(facturasImporteMayor1000);

let facturaFiat = facturas.find((x) => x.cliente === 'Fiat');
console.log(facturaFiat);

// Repaso
interface ICliente {
    nombre: string;
    localidad: string;
    facturacion: number;
    moroso: boolean;
    telefono?: string;
}

let clientes: ICliente[] = [
    {
        nombre: 'Juan Luis',
        localidad: 'Pamplona',
        facturacion: 1000,
        moroso: false,
        telefono: '676767687'
    },
    {
        nombre: 'José',
        localidad: 'Madrid',
        facturacion: 3000,
        moroso: true,
        telefono: '648569876'
    },
    {
        nombre: 'Ana',
        localidad: 'Granada',
        facturacion: 1000,
        moroso: false,
        telefono: '658778966'
    },
    {
        nombre: 'Pedro',
        localidad: 'Valencia',
        facturacion: 2500,
        moroso: true,
        telefono: '698541784'
    },
    {
        nombre: 'Marta',
        localidad: 'Valencia',
        facturacion: 9500,
        moroso: false,
        telefono: '698541666'
    }
];

clientes.push({
    nombre: 'Marta',
    localidad: 'Valencia',
    facturacion: 9500,
    moroso: false,
    telefono: '698541666'
});

// Funciones flecha

// Sacamos todos los clientes
for (let cliente of clientes) {
    console.log(cliente);
}

clientes.forEach((x) => console.log(x));

clientes.forEach((x) => {
    console.log(x);
    console.log(`${x.nombre} vive en ${x.localidad}`);
});

// Crear una interface ILibro:
// Propiedades: Título, ISBN, Páginas, autor y descatalogado (boolean)
// Introducir en array 3 libros
// Mostrarlos en consola

interface ILibro {
    titulo: string;
    isbn: string;
    paginas: number;
    autor: string;
    descatalogado: boolean;
}

let libros: ILibro[] = [
{
    titulo: 'El Quijote',
    isbn: '5784548786',
    paginas: 1200,
    autor: 'Cervantes',
    descatalogado: false
},
{
    titulo: 'La Celestina',
    isbn: '57845478787',
    paginas: 800,
    autor: 'Anónimo',
    descatalogado: false
},
{
    titulo: 'Guerra y Paz',
    isbn: '878787',
    paginas: 1500,
    autor: 'Tolstoi',
    descatalogado: true
}
];

for (let libro of libros) {
    console.log(libro);
}

libros.forEach((x) => console.log(x));

// Pasamos a clientes de Valencia los de Valencia
let clientesDeValencia = clientes.filter((x) => x.localidad === 'Valencia');

console.log(clientesDeValencia);

// Filtrar los libros descatalogados y pasarlos a otro Array "libros descatalogados"
let librosDescatalogados = libros.filter((x) => x.descatalogado === true);

console.log(librosDescatalogados);

// Localizar el primero de los de Valencia
let primeroValencia = clientes.find((x) => x.localidad === 'Valencia');
console.log(primeroValencia);

// Localizar los clientes cuya localidad contenga 'na'
let clientesLocalidadNa = clientes.filter((x) => x.localidad.includes('na'));
console.log(clientesLocalidadNa);

// ¿Todos son de Madrid?
console.log(clientes.every((x) => x.localidad === 'Madrid'));

// Aplicar every para ver si todos los libros tienen más de 1000 páginas
console.log(libros.every((x) => x.paginas > 1000));

// ¿Hay alguno de Granada?
console.log(clientes.some((x) => x.localidad === 'Granada'));

// Aplicar some para ver si hay algún libro descatalogado
console.log(libros.some((x) => x.descatalogado === true));

// const pais: IPais={
//     name : {
//         common:"miPais",
//         nativeName: {
//             lav:{
//                 common:"kkkk",
//                 official:"dddd"
//             }
//         },
//         official:'dsffsf'
//     }
// }
