var antman = "Antman el hombre hormiga";
var hulk = 'Hulk el hombre verde';
var worderWoman = "Wonder woman la mujer maravilla";
//Puedes verificar que al escribir antman tendras acceso a todos los metodos y propiedades de un string.
antman.length;
antman.split('/', 0);
//Concatenar a la antigua:
var oldConcat = "Los super heroes son: " + antman + ", " + hulk + worderWoman;
//Concatenar con backtick:
var newConcat = "Los super hero\u00E9s son: " + antman + ", " + hulk + ", " + worderWoman + " ";
console.log(oldConcat);
console.log(newConcat);
