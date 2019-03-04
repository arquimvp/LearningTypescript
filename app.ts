//ejemplo de un control de volume en una app de audio.
//Me sirve para hacer referencia a algun valor a traves de una descripcion mayormente logica.

enum Volume{
    min = 1,
    medio = 5,
    max = 10
}

let currentVolume: number = Volume.medio;

console.log(currentVolume);
console.log(Volume);
