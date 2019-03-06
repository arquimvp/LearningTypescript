var nombre = 'alberto';
//Declaracion normal:
function obtenerNombre() {
    return nombre;
}
//Declaracion asignado la funcion a una variable:
var obtenNombre = function () {
    return "camila";
};
console.log(obtenerNombre());
console.log(obtenNombre());
