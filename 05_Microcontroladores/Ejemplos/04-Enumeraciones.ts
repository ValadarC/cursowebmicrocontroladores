// Enumeraciones
// Ayudan a trabajar con datos que tienen un fuerte sentido semántico y cuya información esté circunscrita a unos determinados valores.
// Las enumeraciones permiten asociar unos valores semánticos a otros numéricos.
// Por ejemplo, imaginémonos que tenemos una aplicación que calcula unas comisiones sobre unas ventas. La comisión alta es del 15%, media del 10% y la baja del 5%
// Podemos crear una enumeración como esta:

enum Comisiones {
    alta = 0.15,
    media = 0.1,
    baja = 0.05
}
  
  // Y ahora usarla para este ejemplo
  // La comisión va a depender de unas ventas. Es más semántico referirse a Comisiones.alta que al 15%
  // También esto nos permite centralizar las comisiones en un único sitio del programa.
  // En una aplicación grande, podemos tener las comisiones en una enumeración que podrá utilizar todo el proyecto
  // Esto nos permite no extralimitarnos con las comisiones porque tendremos que utilizar uno de sus valores.
  // Si queremos añadir, quitar o modificar comisiones, simplemente deberemos cambiar el código de la enumeración.
  
  const ventas = 1000;
  let dineroComision: number;
  if (ventas > 10000) {
    dineroComision = ventas * Comisiones.alta;
  } else if (ventas > 5000) {
    dineroComision = ventas * Comisiones.media;
  } else {
    dineroComision = ventas * Comisiones.baja;
  }
  
  console.log(dineroComision);
  
  // Si no establecemos valores a las enumeraciones comienzan por 0, siguien por 1 y así sucesivamente
  enum VolumenAudio {
    bajo, //0
    medio, //1
    alto //2
  }
  
  console.log(VolumenAudio.alto); // devuelve 2
  