//Funcion con parametros por defecto
function nombreCompleto(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (capitalizado) {
        return capitalize(nombre) + ' ' + capitalize(apellido);
    }
    else {
        return nombre + " " + apellido;
    }
}
function capitalize(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
var nombre = nombreCompleto("juan", 'mendez', false);
var nombre2 = nombreCompleto('maria', 'jimenez');
console.log(nombre);
console.log(nombre2);
