
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (!isNaN(peso) && !isNaN(altura)) {
        const imc = peso / (altura * altura);
        const resultadoIMC = document.getElementById("resultadoIMC");
        resultadoIMC.textContent = `Seu IMC é ${imc.toFixed(2)}.`;

        if (imc < 18.5) {
            resultadoIMC.textContent += " Você está abaixo do peso.";
        } else if (imc < 24.9) {
            resultadoIMC.textContent += " Seu peso está saudável.";
        } else if (imc < 29.9) {
            resultadoIMC.textContent += " Você está com sobrepeso.";
        } else {
            resultadoIMC.textContent += " Você está com obesidade.";
        }
    } else {
        alert("Por favor, insira valores válidos para peso e altura.");
    }
}
