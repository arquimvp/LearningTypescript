//Tipo funcion
//Sirve para definir un constraint que evite que una funcion pueda mutar
//en algo que no esperamos.
function sumar(a, b) {
    return a + b;
}
function texto(texto) {
    return "cualquier " + texto;
}
function vacio() {
    console.log('no hace nada');
}
//Aqui se permite que la variable funcionx pueda mutar:
//let funcionx;
//Aqui se evita que mute porque implementamos el constraint y no marca error en la 2da implementacion.
var funcionx;
funcionx = 7; //error
funcionx = sumar; //funciona ok
console.log(funcionx(1, 1));
funcionx = texto; //error
console.log(texto('algo'));
funcionx = vacio; //error
funcionx();
