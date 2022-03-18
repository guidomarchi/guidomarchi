var operandoA;
var operandoB;
var operacion;

function init(){
    let resultado = document.getElementById('resultado');
    let resta = document.getElementById('resta');
    let suma = document.getElementById('suma');
    let division = document.getElementById('division');
    let multiplicacion = document.getElementById('multiplicacion');
    let igual = document.getElementById('igual');
    let reset = document.getElementById('reset');

    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');

    //envento
    uno.onclick = function(e){
        resultado.textContent += "1"
    }

    dos.onclick = function(e){
        resultado.textContent += "2"
    }    
    tres.onclick = function(e){
        resultado.textContent += "3"
    }
    cuatro.onclick = function(e){
        resultado.textContent += "4"
    }
    cinco.onclick = function(e){
        resultado.textContent += "5"
    }
    seis.onclick = function(e){
        resultado.textContent += "6"
    }
    siete.onclick = function(e){
        resultado.textContent += "7"
    }
    ocho.onclick = function(e){
        resultado.textContent += "8"
    }
    nueve.onclick = function(e){
        resultado.textContent += "9"
    }
    cero.onclick = function(e){
        resultado.textContent += "0"
    }

    reset.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = '+';
        limpiar();
    }

    resta.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = '-';
        limpiar();
    }

    multiplicacion.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = '*';
        limpiar();
    }

    division.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = '/';
        limpiar();
    }

    igual.onclick = function(e){
        operandoB = resultado.textContent;
        resolver();
    }
}

function limpiar(){
    resultado.textContent = '';
}

function resetear(){
    resultado.textContent = '';
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB)
            break;
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB)
            break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB)
            break;
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB)
            break;
        default:
            resultado,textContent = "error";
            limpiar();
            break;
    }
    resetear();
    resultado.textContent = res;
}