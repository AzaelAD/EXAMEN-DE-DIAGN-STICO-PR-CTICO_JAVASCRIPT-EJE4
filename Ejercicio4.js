// 4. Ordenamiento de un arreglo
function ordenarArreglo(arreglo) {
    return arreglo.sort((a, b) => a - b);
}

const numeros = [9, 4, 9, 5, 0];
console.log("Arreglo ordenado:", ordenarArreglo(numeros));