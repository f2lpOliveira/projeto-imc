/*
* Calculadora IMC
* @author linkedin.com/in/f2lp-oliveira
*/


function start(){
  let buttonCalculeImc = document.querySelector('#calculate-imc');
  buttonCalculeImc.addEventListener('click', handleButtonClick);
}

function handleButtonClick(){
  let inputWeight = document.querySelector('#input-weight');
  let inputHeight = document.querySelector('#input-height');
  let imcResult = document.querySelector('#imc-result');
  
  let weight = Number(inputWeight.value);
  let height = Number(inputHeight.value);
  
  let imc = calculateImc(weight, height);
  let formattedImc = imc.toFixed(2).replace('.',',');

  imcResult.textContent = formattedImc;
  
  tabelaImc();

    function tabelaImc(){
      let imcStatus = document.querySelector('#imc-status');
      
      if(imc < 16){
        return imcStatus.textContent = "Valor inválido";
      }else if(imc == 16 || imc <= 16.9){
        return imcStatus.textContent = "Muito abaixo do peso";
      }else if(imc == 17 || imc <= 18.4){
        return imcStatus.textContent = "Abaixo do peso";
      }else if(imc == 18.5 || imc <= 24.9){
        return imcStatus.textContent = "Peso normal";
      }else if(imc == 25 || imc <= 29.9){
        return imcStatus.textContent = "Acima do peso";
      }else if(imc == 30 || imc <= 34.9){
        return imcStatus.textContent = "Obesidade grau I";
      }else if(imc == 35 || imc <= 40){
        return imcStatus.textContent = "Obesidade grau II";
      }else{
        return imcStatus.textContent = "Obesidade grau III";
      }
  }
}

function calculateImc(weight, height){
  return weight / height ** 2;
}

start();