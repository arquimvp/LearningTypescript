let cualquierCosa : any = "cualquier valor";

let longitud : number = (<string>cualquierCosa).length;

console.log(longitud);
//En este caso yo se con toda seguridad que el valor a castear es un string, por lo cual
//puedo obtener su longitud.