// https://www.typescriptlang.org/download
// Para instalar TypeScript, ejecutamos:
// npm install -g typescript
// Para crear tsconfig.json, ejecutamos: tsc --init
//
// https://www.typescriptlang.org/tsconfig
// "target": "es2016",   es para transpilar a una versión concreta de JS. Se suele dejar, pero si se quiere compatibilidad máxima podríamos poner es5 (js sobre 2010), aunque se supone que ya pocos usuarios operarán con IE 8, por ejemplo, (ni Microsoft le da soporte)
// "removeComments": true,  es para quitar comentarios de la compilación
// "outDir": "./js",  es para determinar en qué ubicación vamos a dejar la compilación
// "sourceMap": true,  es para añadir los map. Puede ser muy útil en la depuración. Probar a poner un error sintáctico, ejecutar tsc (aunque de error), ejecutar index y ver el error. Dirige al js, pero con el sorcemap dirige al ts
// Para transpilar TypeScript a JavaScript, si ya tenemos el archivo tsconfig.json, ejecutamos: tsc (mirar HolaMundo.js)
// Para que TypeScript transpile automáticamente cuando hay cambios, ejecutamos tsc -w

// Especificamos un tipo string a la constante constanteMensaje
const constanteMensaje: string = 'Hola desde TypeScript';
// Si no especificamos un tipo, se le adjudica uno según el contenido asignado. variableMensaje, en este caso, es de tipo string
let variableMensaje = 'Hola desde TypeScript';
console.log(variableMensaje);

// variableMensaje = 8; //error porque estamos utilizando un tipo diferente
// a = 5; // Error porque la variable no existe;
