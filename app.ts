//Funcion con parametros por defecto.
//al asignar un parametro por defecto tambien se vuelve opcional.

function nombreCompleto (nombre : string, apellido : string, capitalizado: boolean = true): string {
    
    if(capitalizado){
        return capitalize(nombre) + ' ' + capitalize(apellido);
    }else{
        return `${nombre} ${apellido}`
    }
}

function capitalize(palabra : string) : string{
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}

let nombre = nombreCompleto("juan",'mendez',false);
let nombre2 = nombreCompleto('maria', 'jimenez');

console.log(nombre);
console.log(nombre2);

