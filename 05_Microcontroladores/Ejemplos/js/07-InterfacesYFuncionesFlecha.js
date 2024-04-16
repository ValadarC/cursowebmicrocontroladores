"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let facturas = [
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
let clientes = [
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
for (let cliente of clientes) {
    console.log(cliente);
}
clientes.forEach((x) => console.log(x));
clientes.forEach((x) => {
    console.log(x);
    console.log(`${x.nombre} vive en ${x.localidad}`);
});
let libros = [
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
let clientesDeValencia = clientes.filter((x) => x.localidad === 'Valencia');
console.log(clientesDeValencia);
let librosDescatalogados = libros.filter((x) => x.descatalogado === true);
console.log(librosDescatalogados);
let primeroValencia = clientes.find((x) => x.localidad === 'Valencia');
console.log(primeroValencia);
let clientesLocalidadNa = clientes.filter((x) => x.localidad.includes('na'));
console.log(clientesLocalidadNa);
console.log(clientes.every((x) => x.localidad === 'Madrid'));
console.log(libros.every((x) => x.paginas > 1000));
console.log(clientes.some((x) => x.localidad === 'Granada'));
console.log(libros.some((x) => x.descatalogado === true));
//# sourceMappingURL=07-InterfacesYFuncionesFlecha.js.map