"use strict";
function dimeHola(nombre) {
    console.log('hola ' + nombre);
}
const dimeHolaFlecha = (nombre) => {
    console.log('hola ' + nombre);
};
function dimeHolaReturn(nombre) {
    return 'hola ' + nombre;
}
const dimeHolaFlechaReturn = (nombre) => {
    return 'hola ' + nombre;
};
dimeHola('Juan Luis');
const saludo = dimeHolaReturn('Juan Luis');
console.log(saludo);
//# sourceMappingURL=05-FuncionesBasicas.js.map