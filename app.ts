//Definicion de los parametros obligastorios.

function nombreCompleto (nombre: string, apellido: string): string {
  return `${nombre} ${apellido}`;
}

let nombre = nombreCompleto("mario","martinez");

console.log(nombre);