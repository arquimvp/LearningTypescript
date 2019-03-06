//Funcion con parametros opcionales
//Se agrega un ? despues del nombre del parametro

function nombreCompleto (nombre : string, apellido? : string): string {
    return `${nombre} ${apellido}`
}

let nombre = nombreCompleto("juan");

console.log(nombre)

