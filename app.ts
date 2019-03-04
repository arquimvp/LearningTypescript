//undefined:
//Cuando una variable declarada no es definida en tiempo de ejecucion se considera "undefined".
//Tamben aplica a los parametros de una funcion.

let myUndefined;
console.log(myUndefined);
console.log(typeof(myUndefined));

function foo(myvar:any) {
    console.log(myvar);
}

foo(1);

//null:
//representa la ausencia de valor intencional, nosotros como devs debemos usar null cuando no sabremos
//que valor contendra dicah variable.

let myNull = null;
console.log(myNull);
console.log(typeof(myNull));

//en esta ultima se muestra object, es un bug pero asi es javascript.

//Dentro de funciones una buena practica es validar si el parametro es null o undefined:
function validador(param:any) {
    if(param){
        console.log('param no es null ni undefined');
    }else{
        console.log(param);
    }
}
let algo;
validador(algo);
