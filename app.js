//Funcion con parametros rest. (es6)
//Es basicamente como decir todo lo que viene por parametro juntalo en un arreglo.
function nombreCompleto(nombre) {
    var parametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        parametros[_i - 1] = arguments[_i];
    }
    return nombre + ' ' + parametros.join(' ');
}
var nombre1 = nombreCompleto('mariano', 'alberto', 'martinez', 'apolinar');
var nombre2 = nombreCompleto('roberto', 'lopez', 'jimenez');
console.log(nombre1);
console.log(nombre2);
