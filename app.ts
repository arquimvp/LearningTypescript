let antman : string = "Antman el hombre hormiga";
let hulk : string = 'Hulk el hombre verde';
let worderWoman : string = `Wonder woman la mujer maravilla`;

//Puedes verificar que al escribir antman tendras acceso a todos los metodos y propiedades de un string.
antman.length;
antman.split('/',0);


//Concatenar a la antigua:
let oldConcat: string = "Los super heroes son: " + antman + ", " + hulk + worderWoman;

//Concatenar con backtick:
let newConcat: string = `Los super heroés son: ${antman}, ${hulk}, ${worderWoman} `;


console.log(oldConcat);
console.log(newConcat); 

