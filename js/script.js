/*
* Calculadora IMC
* @author linkedin.com/in/f2lp-oliveira
*/

let peso = document.querySelector('#input-peso');
let altura = document.querySelector('#input-altura');
let resultadoImc = document.querySelector('#resultado-imc');

function inicio(){
  let buttonCalculeImc = document.querySelector('#calcule-imc');
  buttonCalculeImc.addEventListener('click', handleButtonClick);
}
function calculaImc(){
  return peso / altura ** 2;
}
function handleButtonClick(){
  peso = parseFloat(peso.value.replace(",","."));
  altura = parseFloat(altura.value.replace(",","."));
  imc = calculaImc();
  resultadoImc.textContent = imc.toFixed(2).replace(".",",");
  statusImc();
}

function statusImc(){
  let statusImc = document.querySelector('#status-imc');

  if(imc == 16 || imc <= 16.9){
    return statusImc.textContent = "Muito abaixo do peso"
  }else if(imc == 17 || imc <= 18.4){
    return statusImc.textContent = "Abaixo do peso"
  }else if(imc == 18.5 || imc <= 24.9){
    return statusImc.textContent = "Peso normal"
  }else if(imc == 25 || imc <= 29.9){
    return statusImc.textContent = "Acima do peso"
  }else if(imc == 30 || imc <= 34.9){
    return statusImc.textContent = "Obesidade grau I"
  }else if(imc == 35 || imc <= 40){
    return statusImc.textContent = "Obesidade grau II"
  }else{
    return statusImc.textContent = "Obesidade grau III"
  }
}

inicio();