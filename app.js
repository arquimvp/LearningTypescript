// En el siguiente ejemplo si no especifico el tipo void, typescript permite retornar cualquier tipo.
function sinRetorno() {
    console.log('no debe retornar nada');
}
var valor = sinRetorno();
console.log(valor);
