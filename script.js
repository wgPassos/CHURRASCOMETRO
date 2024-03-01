
// Carne - 400 gr por pessoa + de 6horas - 650 
// Cerveja - 1200 ml por pessoa + de 6horas - 2000 ml
// Refrigerante / água 1000 ml por pessoa +6horas -1500 ml
// btnCalc.disabled = true;

// crianças valem por 0,5 

let adultos = document.getElementById("adultos");
let criancas = document.getElementById("criancas");
let horas = document.getElementById("horas");
let carne = document.getElementById("carne");
let cerveja = document.getElementById("cerveja");
let refri = document.getElementById("refri");
let btnCalc = document.getElementById("calcular");
let btnReset = document.getElementById("reset");


document.addEventListener('DOMContentLoaded', function() {
    adultos.addEventListener('input', verificaCampos);
    criancas.addEventListener('input', verificaCampos);
    horas.addEventListener('input', verificaCampos);
  });

function verificaCampos() {
    if (adultos.value !== "" && criancas.value !== "" && horas.value !== "") { 
        btnCalc.disabled = false;
        } 
    else {
        btnCalc.disabled = true;
        }
    }
    
    function disabledButton (){
        console.log(`teste`)
    }

    btnCalc.addEventListener("click", calcularChurras)
    
    function calcularChurras( ) {
        reseteD();

        let totalCarne = parseInt(adultos.value) + (parseFloat(criancas.value) * 0.5)
        let adultosBebida = parseInt(adultos.value);
        let criancasBebida = parseInt(criancas.value);

        document.getElementById("resultadoCarne").innerHTML += "<em>" + calcCarne(totalCarne) + " Kg</em>";
        document.getElementById("resultadoCerveja").innerHTML += "<em>" + Math.ceil(calcCerveja(adultosBebida) / .355) + " Latas de cerveja</em>";
        document.getElementById("resultadoRefri").innerHTML += "<em>" + Math.ceil(calcRefri(criancasBebida) / 2) + " Garrafas(s) de refrigerante / água<em>";

        reseteInputs();
    }

function calcCarne(e) {
    let kgCarne = 0.400;
    let horasChurras = parseInt(horas.value);
    if (horasChurras > 6) {
        kgCarne = 0.650;
    }
    let totalCarneE = e * kgCarne;
    let totalCarne = totalCarneE.toFixed(2);
    return totalCarne;
}

function calcCerveja(e) {
    let mlCerveja = 1.2;
    let horasChurras = parseInt(horas.value);
    if (horasChurras > 6) {
        mlCerveja = 2;
    }
    let totalCerveja = e * mlCerveja;
    return totalCerveja;
}

function calcRefri(e) {
    let mlRefri = 1.0;
    let horasChurras = parseInt(horas.value);
    if (horasChurras > 6) {
        mlRefri = 1.5;
    }
    let totalRefri = e * mlRefri;
    return totalRefri;
}

function reseteD() {
    console.log(`oii`)
    document.getElementById("resultadoCarne").innerHTML = "Carne: ";
    document.getElementById("resultadoCerveja").innerHTML = "Ceveja: "
    document.getElementById("resultadoRefri").innerHTML = "Refrigerante: "
    btnCalc.disabled = true;
}

function reseteInputs() {
    adultos.value = "";
    criancas.value = "";
    horas.value = "";

}

