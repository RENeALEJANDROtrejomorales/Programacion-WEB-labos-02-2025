function ordenar(arr) {
    const nuevoArray = [...arr]
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length - i - 1; j++) {
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}

console.log(ordenar([14, 23, 99, 874, 93, 12]));

function esPar(numero) {

    return numero % 2 === 0;
}

console.log(esPar(7));

