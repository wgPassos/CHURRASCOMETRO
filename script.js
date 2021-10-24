
// cARNE - 400 gr por pessoa + de 6horas - 650 
// Cerveja - 1200 ml por pessoa + de 6horas - 2000 ml
// Refrigerante / água 1000 ml por pessoa +6horas -1500 ml

// crianças valem por 0,5 

let adultos = document.getElementById("adultos");
let criancas = document.getElementById("criancas");
let horas = document.getElementById("horas");
let carne = document.getElementById("carne");
let cerveja = document.getElementById("cerveja");
let refri = document.getElementById("refri");
let btnCalc = document.getElementById("calcular");


btnCalc.addEventListener("click", verifica);

function verifica () {
    if (adultos.value === "" || criancas.value === "" || horas.value === "") {
        alert("Por favor, preencha todos os campos. ")
    } 
    else {
        calcularChurras();
    }
}

function calcularChurras( ) {
    // console.log(adultos.value);
    let totalCarne = parseInt(adultos.value) + (parseFloat(criancas.value) * 0.5)
    let adultosBebida = parseInt(adultos.value);
    let criancasBebida = parseInt(criancas.value);

    document.getElementById("resultadoGeral").innerHTML = "<h4>" + calcCarne(totalCarne) + " Kg de carne</h4>";
    document.getElementById("resultadoGeral").innerHTML += "<h4>" + Math.ceil(calcCerveja(adultosBebida) / .355) + " Latas de cerveja</h4>";
    document.getElementById("resultadoGeral").innerHTML += "<h4>" + Math.ceil(calcRefri(criancasBebida) / 2) + " Garrafas(s) de refrigerante / água<h4>";
}

function calcCarne(e) {
    let kgCarne = 0.400;
    let horasChurras = parseInt(horas.value);
    if (horasChurras > 6) {
        kgCarne = 0.650;
        // console.log(horasChurras)
    }
    // console.log("" + typeof(e))
    let totalCarne = e * kgCarne;
    // console.log(kgCarne);

    // console.log(totalCarne);
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