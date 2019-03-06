//Declaracion de funcionesen typescript



let nombre :  string = 'alberto';

//Declaracion normal:
function obtenerNombre() : string {
  return nombre;
}

//Declaracion asignando la funcion a una variable:
let obtenNombre = function() : string{
  return "camila";
}


console.log(obtenerNombre());
console.log(obtenNombre());

