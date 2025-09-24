function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecreciemiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;
    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento;
        dias++;
        if (altura >= alturaDeseada) { return dias}
        altura -= velocidadDecreciemiento;
    }
    return dias;
}

console.log(calcularDiasCrecimiento(5,2,20));