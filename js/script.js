//JAVASCRIPT RESET FORM
function resetFormLuas() {
    document.getElementById("inputAlas").value = "";
    document.getElementById("inputTinggi").value = "";
    document.getElementById("resultLuas").textContent = "";
}

function resetFormKeliling() {
    document.getElementById("inputSisiA").value = "";
    document.getElementById("inputSisiB").value = "";
    document.getElementById("inputSisiC").value = "";
    document.getElementById("resultKeliling").textContent = "";
}
//JAVASCRIPT KALKULATOR KELILING SEGITIGA
function kalkulatorKeliling() {
    var inputSisiA = parseFloat(document.getElementById("inputSisiA").value);
    var inputSisiB = parseFloat(document.getElementById("inputSisiB").value);
    var inputSisiC = parseFloat(document.getElementById("inputSisiC").value);

    var keliling = inputSisiA + inputSisiB + inputSisiC;
    document.getElementById("resultKeliling").textContent = "Keliling Segitiga adalah : " + keliling;
}
//JAVASCRIPT LUAS SEGITIGA
function kalkulatorLuas() {
    var inputAlas = parseFloat(document.getElementById("inputAlas").value);
    var inputTinggi = parseFloat(document.getElementById("inputTinggi").value);

    var luas = 1 / 2 * (inputAlas * inputTinggi);
    document.getElementById("resultLuas").textContent = "Luas Segitiga adalah : " + luas;
}