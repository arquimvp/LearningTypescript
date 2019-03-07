//Tipo funcion
//Sirve para definir un constraint que evite que una funcion pueda mutar
//en algo que no esperamos.

function sumar(a : number, b : number) : number {
    return a + b;
}

function texto(texto : string) : string {
    return `cualquier ${texto}`
}

function vacio(): void {
    console.log('no hace nada');
}


//Aqui se permite que la variable funcionx pueda mutar:
//let funcionx;

//Aqui se evita que mute porque implementamos el constraint y no marca error en la 2da implementacion.
let funcionx: (n1 : number, n2 : number) => number;

funcionx = 7;                   //error

funcionx = sumar;               //funciona ok
console.log(funcionx(1,1));     

funcionx = texto;               //error
console.log(texto('algo'));     

funcionx = vacio;               //error
funcionx();





