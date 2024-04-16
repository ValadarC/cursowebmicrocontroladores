// void y funciones con tipo
// El tipo void es propio de las funciones. Cuando una función en TypeScript retorna algo, ese algo debe ser de un tipo.
// Las funciones void son aquellas que no retornan valores.

// Función que muestra un saludo por consola. Es void porque hace algo y no devuelve nada (no tiene return)
function dimeHola(nombre: string): void {
    console.log('hola ' + nombre);
}
  
// Función flecha que muestra un saludo por consola. Es void porque hace algo y no devuelve nada (no tiene return)
const dimeHolaFlecha = (nombre: string): void => {
    console.log('hola ' + nombre);
};
  
// Función que retorna un saludo. Es string porque retorna (return) un string
function dimeHolaReturn(nombre: string): string {
    return 'hola ' + nombre;
}
  
// Función flecha que retorna un saludo. Es string porque retorna (return) un string
const dimeHolaFlechaReturn = (nombre: string): string => {
    return 'hola ' + nombre;
};
  
dimeHola('Juan Luis');
const saludo = dimeHolaReturn('Juan Luis');
console.log(saludo);
  