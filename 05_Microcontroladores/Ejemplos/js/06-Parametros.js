"use strict";
const calcularIva = (importe, porcentaje) => {
    return (importe * porcentaje) / 100;
};
const iva = calcularIva(1000, 21);
console.log(iva);
const calcularIva2 = (importe, porcentaje) => {
    return (importe * (porcentaje || 21)) / 100;
};
const iva2 = calcularIva2(1000, 10);
const iva3 = calcularIva2(10000);
console.log(iva2);
console.log(iva3);
const calcularIva3 = (importe, porcentaje = 21, sinIva = false) => {
    if (sinIva) {
        return 0;
    }
    else {
        return (importe * porcentaje) / 100;
    }
};
const iva4 = calcularIva3(1000, 21);
const iva5 = calcularIva3(1000);
const iva6 = calcularIva3(10000, 0, true);
const iva7 = calcularIva3(1000, undefined, false);
console.log(iva4);
console.log(iva5);
console.log(iva6);
console.log(iva7);
const concatenaNombres = (...nombres) => {
    return nombres.join('-');
};
const nombresVarios = concatenaNombres('Ana', 'Marta', 'Juan Luis');
console.log(nombresVarios);
const nombreApellidos = (nombre, ...apellidos) => {
    return `${nombre} ${apellidos.join(' ')}`;
};
const nombreYApellidos = nombreApellidos('Ana', 'Pérez', 'Gil', 'García');
console.log(nombreYApellidos);
const concatenaNombresArray = (nombres) => {
    return nombres.join(' ');
};
const otrosNombres = ['Ana', 'Marta', 'Juan Luis'];
const nombresContatenados = concatenaNombresArray(otrosNombres);
console.log(nombresContatenados);
//# sourceMappingURL=06-Parametros.js.map