function calcularImc(peso, altura) {

    return (peso / (altura * altura));
}
leerNombre = prompt("informe su nombre")
leerPeso = prompt(leerNombre + " Informe su peso en kilos:");
leerAltura = prompt(leerNombre + " Informe su altura en metros:");

imcCalculado = calcularImc(leerPeso, leerAltura)

console.log(leerNombre + ", Su imc calculado es: " + imcCalculado)

if (imcCalculado < 18.5) {

console.log("estas muy flaco");
}
if (imcCalculado > 18.5 && imcCalculado < 24.9) {

console.log("estas normal");
}
if (imcCalculado > 24.9 && imcCalculado <30) {

console.log("estas medio gordito");
}
if (imcCalculado > 30) {

console.log("estas muy gordito");

}
