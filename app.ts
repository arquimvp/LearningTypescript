function error(mensaje:string): never {
    throw new Error(mensaje);
}

let inal = error('error critico tssss!');

console.log('no llega hasta aqui!');

//Podemos percatarnos que la ejecucion jamas llega a la linea del console.log
//Ademas el tipo never no nos permite retornar nada.