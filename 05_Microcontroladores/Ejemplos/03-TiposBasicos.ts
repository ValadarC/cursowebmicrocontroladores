// En el archivo tsconfig.json, en la propiedad outDir, está especificada la carpeta js como la ubicación de la transpilación a JavaScript del código TypeScript
// Los valores booleanos, como en JavaScript, tendrán los valores true o false
let jubilado: boolean = false;
const empleado = true;

// Los valores numéricos (decimales y enteros) se agrupan todos en el tipo number
let precio: number = 50.3;
const existencias = 20;

// Los valores string son para almacenar cadenas de texto
const profe: string = 'Juan Luis';
let profesion = 'Desarrollador web';

console.log(`El profe se llama ${profe} y es ${profesion}`);
console.log('El profe se llama ' + profe.toUpperCase() + ' y es ' + profesion.toLowerCase());

console.log('El nombre del profe comienza por ' + profe[0]); // Devuelve el primer carácter del string profe
//console.log('La letra 50 en mayúsculas del profe es ' + profe[49].toUpperCase()); // Da error porque no existe el carácter 49. Da undefined y no se puede ejecutar toUpperCase()
console.log('La letra 50 en mayúsculas del profe es ' + profe[49]?.toUpperCase()); // No da error porque el ? chequea si profe[49] tiene algo (no es undefined ni null). Si lo tiene, ejecuta toUpperCase(). Si no, no hace nada

// El tipo any permite cualquier tipo de valor. Lo usaremos lo mínimo posible para no perder control en el código.
let alumno: any = 'Marcos';
alumno = alumno.toUpperCase(); // No sale la ayuda
alumno = (alumno as string).toLowerCase(); // Sí sale la ayuda. as string no asigna el string al tipo, sigue siendo any. Pero de forma ocasional podemos utilizar as string para tratarlo como un string. Podríamos utilizar también as number, as boolean...
alumno = false;
alumno = 30;
console.log(alumno - 10);

// Arrays
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array de números
const nombresAmigos: string[] = ['Ana', 'Marta', 'Juan Luis']; // Array de strings

// numeros.push(true); // Error porque no respetamos el tipo
numeros.push(11);
// nombresAmigos.push(11); // Error porque no respetamos el tipo
nombresAmigos.push('Pedro');
nombresAmigos.forEach((x) => console.log(x));

// Aquí tenemos un array que acepta varios tipos (string | number). Esto es muy raro pero es posible. Se puede aplicar a variables
let varios: (string | number)[] = [];
varios.push(1);
varios.push('Ana');

let curso: string | number;
curso = 1;
curso = 'Primero';
