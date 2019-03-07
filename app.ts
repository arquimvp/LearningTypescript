//Funcion con parametros rest. (es6)
//Es basicamente como decir todo lo que viene por parametro juntalo en un arreglo.

function nombreCompleto( nombre : string, ...parametros: string []): string{
    return nombre + ' ' + parametros.join(' ');
}

let nombre1 = nombreCompleto('mariano','alberto','martinez','apolinar');
let nombre2 = nombreCompleto('roberto','lopez','jimenez');

console.log(nombre1);
console.log(nombre2);
