// En el siguiente ejemplo si no especifico el tipo void, typescript permite retornar cualquier tipo.

function sinRetorno(): void {
    console.log('no debe retornar nada');
}

let valor = sinRetorno();

console.log(valor);