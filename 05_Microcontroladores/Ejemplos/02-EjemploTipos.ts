// TypeScript "infiere" el tipo y le adjudica a la variable a el tipo number
let a = 10;

// Aquí estamos siendo explícitos con el tipo. Cuando declaramos una constante o variable, es buena costumbre declarar el tipo
// para declarar el tipo, después de let o const y el nombre del valor, se ponen dos puntos (:) y el tipo. Opcionalmente se le da un valor de inicio, algo también aconsejado.
let b: number = 10;

// A continuación, creamos una variable sin declarar el tipo ni asignarle un valor. TypeScript no sabe qué queremos hacer con la variable, por lo que le da un tipo llamado any.
// El tipo any permite cualquier tipo de valor. Sería parecido a declarar una variable en JavaScript, donde no hay tipos ni se es estricto en las asignaciones de valores.
// No es una buena práctica hacer esto en TypeScript porque perdemos el control de las variables que creamos.
let c;
c = 5;
c = true;
c = 'Juan';

// Si al parámetro saludo no le damos un tipo, da error porque los parámetros de las funciones deben tener un tipo. Esto es porque el archivo tsconfig.json registra una propiedad  "strict": true
// Si la ponemos a false, deja de dar error. Es mejor dejarlo en true y así trabajar en "modo estricto"
// function saludar(saludo) {

// }

function saludar(saludo:string) {
  console.log(saludo);
}

saludar('hola mundo');
