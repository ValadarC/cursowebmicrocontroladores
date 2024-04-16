// Parámetros obligatorios
const calcularIva = (importe: number, porcentaje: number): number => {
    return (importe * porcentaje) / 100;
};
  
const iva = calcularIva(1000, 21);
console.log(iva);
// const iva2 = calcularIva(2000); //error porque falta un argumento
  
// Parámetros opcionales. Aquellos parámetros opcionales deben acabar con un ?. Los parámetros opcionales deben ir después de los obligatorios
const calcularIva2 = (importe: number, porcentaje?: number): number => {
    // if (porcentaje){
    //     return importe *porcentaje/100;
    // } else {
    //     return importe * 21/100;
    // }
    return (importe * (porcentaje || 21)) / 100; // Si no enviamos a la función el porcentaje, este es undefined. (porcentaje || 21) quiere decir "porcentaje o 21", es decir si hay porcentaje, lo aplica, si no, aplica el 21
    // return (importe * porcentaje) / 100; error porque porcentaje puede ser undefined
};
  
const iva2 = calcularIva2(1000, 10);
const iva3 = calcularIva2(10000); // Aplicará el 21 porque es el valor que hemos puesto en la función cuando no enviamos el porcentaje
  
console.log(iva2);
console.log(iva3);
  
// Parámetros con valores por defecto
// sinIva es un parámetro que, si no se introduce en la llamada a la función, será false. Los parámetros con valores por defecto no tienen por qué tienen que ir al final, pero se suelen poner después de los obligatorios
const calcularIva3 = (importe: number, porcentaje = 21, sinIva = false): number => {
    if (sinIva) {
        // Cuando sinIva es true, no hay que calcular Iva, luego el Iva es 0
        return 0;
    } else {
        // Cuando sinIva es false, procedemos al cálculo según se haya introducido o no el parámetro opcional del porcentaje
        return (importe * porcentaje) / 100; // Si no enviamos a la función el porcentaje, este es 21
    }
};
  
  const iva4 = calcularIva3(1000, 21); // Pasamos el importe y el porcentaje. sinIva será false porque no incluimos el argumento
  const iva5 = calcularIva3(1000); // Pasamos el importe. El porcentaje será el 21 porque no incluimos el argumento. sinIva será false porque no incluimos el argumento
  const iva6 = calcularIva3(10000, 0, true); // Producto sin iva. Pasamos el importe
  const iva7= calcularIva3(1000, undefined,false); // Si se pasa undefined a un parámetro con valor por defecto lo deja con su valor por defecto
  console.log(iva4);
  console.log(iva5);
  console.log(iva6);
  console.log(iva7);
  
  // Parámetros REST
  // Pueden venir bien cuando desconocemos cuántos argumentos recibirá la función.
  // ...nombres es una relación de strings que el parámetro convierte en un array
  const concatenaNombres = (...nombres: string[]): string => {
    return nombres.join('-'); // join toma todos los elementos del array y los muestra juntos separados por un carácter, en este caso por un espacio en blanco.
  };
  
  const nombresVarios = concatenaNombres('Ana', 'Marta', 'Juan Luis');
  console.log(nombresVarios);
  
  // nombre sería el primer parámetro y el resto serían los apellidos
  const nombreApellidos = (nombre: string, ...apellidos: string[]): string => {
    return `${nombre} ${apellidos.join(' ')}`;
  };
  
  const nombreYApellidos = nombreApellidos('Ana', 'Pérez', 'Gil', 'García');
  console.log(nombreYApellidos);
  
  // Esto sería muy parecido, pero más tradicional mediante un array
  const concatenaNombresArray = (nombres: string[]): string => {
    return nombres.join(' ');
  };
  
  const otrosNombres = ['Ana', 'Marta', 'Juan Luis'];
  const nombresContatenados = concatenaNombresArray(otrosNombres);
  console.log(nombresContatenados);
 

