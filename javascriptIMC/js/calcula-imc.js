var titulo = document.querySelector(".titulo");
titulo.textContent = "Kochenborger Nutricionistas";

var pacientes = document.querySelectorAll(".paciente");

for (var i =0; i < pacientes.length ; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");

    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
    }

    if (!alturaEhValida){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }

    function validaPeso(peso) {

        if (peso >=0 && peso < 580){
            return true;
        }else{
            return false
        }
        
    }
    
    function validaAltura(altura) {

        if (altura >= 0 && altura < 2.5){
            return true;
        }else{
            return false
        }
        
    }
    
    function validaGordura(gordura) {

        if (gordura >= 0 && gordura < 100){
            return true;
        }else{
            return false
        }
        
    }

    }
   
    function calculaImc(peso,altura){
        var imc = 0;
       
        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }
