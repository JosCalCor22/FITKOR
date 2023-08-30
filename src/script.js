const btnHeight = document.querySelector('.board__data--height-input');
const btnWeight = document.querySelector('.board__data--weight-input');
const btnSend = document.querySelector('.board__data--send-input');
const menuInfo = document.querySelector('.results__data--info');
const textSend = document.querySelector('.results__data--info-text');
const adviceSend = document.querySelector('.results__data--info-advice');
const typeSend = document.querySelector('.results__data--info-type');
const barInfo = document.querySelector('.results__data--info-barInfo');
const trinagule1 = document.querySelector('.imgActive1');
const trinagule2 = document.querySelector('.imgActive2');
const trinagule3 = document.querySelector('.imgActive3');
const trinagule4 = document.querySelector('.imgActive4');
const trinagule5 = document.querySelector('.imgActive5');
const trinagule6 = document.querySelector('.imgActive6');
const textInfo = document.querySelector('.main__information--space');

window.addEventListener('DOMContentLoaded', () => {
  adviceSend.classList.remove('results__data--info-advice');
  barInfo.classList.remove('results__data--info-barInfo');
  typeSend.classList.remove('results__data--info-type');
  textSend.classList.remove('results__data--info-text');
  menuInfo.classList.remove('results__data--info');
  trinagule1.classList.remove('imgActive1');
  trinagule2.classList.remove('imgActive2');
  trinagule3.classList.remove('imgActive3');
  trinagule4.classList.remove('imgActive4');
  trinagule5.classList.remove('imgActive5');
  trinagule6.classList.remove('imgActive6');
  textInfo.classList.add('main__information--space');
})

btnSend.addEventListener('click', () => {
  let resultHeight = btnHeight.value ** 2;
  let resultWeight = btnWeight.value;
  let resultBMI = resultWeight / resultHeight;

  function calculateBMI(BMI){
    //PESO BAJO
    if(BMI < 18.5){
      textSend.innerHTML = `Tu BMI es: ${resultBMI.toFixed(1)}`;
      typeSend.innerHTML = 'Peso Bajo';
      adviceSend.innerHTML = 'Recuerda que la salud es fundamental. Consulta con un profesional de la salud para abordar tu bajo peso de manera adecuada. Una dieta equilibrada y un plan de ejercicios pueden ayudarte a ganar peso de manera saludable.';
      barInfo.classList.add('results__data--info-barInfo');
      trinagule1.classList.add('imgActive1');
      //CONDICIONAL PARA QUE SOLO SE ACTIVE UNA FLECHA
      if(trinagule2.classList.contains('imgActive2') || trinagule3.classList.contains('imgActive3') || trinagule4.classList.contains('imgActive4') || trinagule5.classList.contains('imgActive5') || trinagule6.classList.contains('imgActive6')){
        trinagule2.classList.remove('imgActive2');
        trinagule3.classList.remove('imgActive3');
        trinagule4.classList.remove('imgActive4');
        trinagule5.classList.remove('imgActive5');
        trinagule6.classList.remove('imgActive6');
      }
    } 
    //PESO ESTANDAR
    else if(BMI == 18.5 || BMI < 24.9){
      textSend.innerHTML = `Tu BMI es: ${resultBMI.toFixed(1)}`;
      typeSend.innerHTML = 'Peso Normal o Saludable';
      adviceSend.innerHTML = '¡Felicidades por mantener un peso saludable! Continúa con tus hábitos alimenticios equilibrados y tu rutina de ejercicios para mantener tu bienestar físico y mental.';
      trinagule2.classList.add('imgActive2');
      //CONDICIONAL PARA QUE SOLO SE ACTIVE UNA FLECHA
      if(trinagule1.classList.contains('imgActive1') || trinagule3.classList.contains('imgActive3') || trinagule4.classList.contains('imgActive4') || trinagule5.classList.contains('imgActive5') || trinagule6.classList.contains('imgActive6')){
        trinagule1.classList.remove('imgActive1');
        trinagule3.classList.remove('imgActive3');
        trinagule4.classList.remove('imgActive4');
        trinagule5.classList.remove('imgActive5');
        trinagule6.classList.remove('imgActive6');
      }
    } 
    //PESO ALTO
    else if(BMI == 25.0 || BMI < 29.9){
      textSend.innerHTML = `Tu BMI es: ${resultBMI.toFixed(1)}`;
      typeSend.innerHTML = 'Sobrepeso';
      adviceSend.innerHTML = 'Considera ajustar tu estilo de vida. Incorpora una dieta nutritiva y actividad física regular en tu rutina. Consulta a un profesional para obtener orientación y apoyo en tu viaje hacia un peso más saludable.';
      trinagule3.classList.add('imgActive3');
      //CONDICIONAL PARA QUE SOLO SE ACTIVE UNA FLECHA
      if(trinagule1.classList.contains('imgActive1') || trinagule2.classList.contains('imgActive2') || trinagule4.classList.contains('imgActive4') || trinagule5.classList.contains('imgActive5') || trinagule6.classList.contains('imgActive6')){
        trinagule2.classList.remove('imgActive2');
        trinagule1.classList.remove('imgActive1');
        trinagule4.classList.remove('imgActive4');
        trinagule5.classList.remove('imgActive5');
        trinagule6.classList.remove('imgActive6');
      }
    } 
    //PESO MUY ALTO
    else if(BMI == 30.0 || BMI < 34.9){
      textSend.innerHTML = `Tu BMI es: ${resultBMI.toFixed(1)}`;
      typeSend.innerHTML = 'Obesidad de Grado 1'
      adviceSend.innerHTML = 'Reconoce la importancia de cuidar tu salud. Implementa cambios en tu alimentación y ejercicios. Un plan gradual y sostenible puede ayudarte a reducir el peso y mejorar tu bienestar general.'
      trinagule4.classList.add('imgActive4');
      //CONDICIONAL PARA QUE SOLO SE ACTIVE UNA FLECHA
      if(trinagule2.classList.contains('imgActive2') || trinagule3.classList.contains('imgActive3') || trinagule1.classList.contains('imgActive1') || trinagule5.classList.contains('imgActive5') || trinagule6.classList.contains('imgActive6')){
        trinagule2.classList.remove('imgActive2');
        trinagule3.classList.remove('imgActive3');
        trinagule1.classList.remove('imgActive1');
        trinagule5.classList.remove('imgActive5');
        trinagule6.classList.remove('imgActive6');
      }
    } 
    //PESO EXTREMO
    else if(BMI == 35.0 || BMI < 40.0){
      textSend.innerHTML = `Tu BMI es: ${resultBMI.toFixed(1)}`;
      typeSend.innerHTML = 'Obesidad de Grado 2'
      adviceSend.innerHTML = 'Tu salud es primordial. Busca asesoramiento médico para abordar la obesidad de manera segura. Adopta hábitos saludables y considera la posibilidad de trabajar con un profesional de la salud para lograr una pérdida de peso efectiva.';
      trinagule5.classList.add('imgActive5');
      //CONDICIONAL PARA QUE SOLO SE ACTIVE UNA FLECHA
      if(trinagule2.classList.contains('imgActive2') || trinagule3.classList.contains('imgActive3') || trinagule1.classList.contains('imgActive1') || trinagule4.classList.contains('imgActive4') || trinagule6.classList.contains('imgActive6')){
        trinagule2.classList.remove('imgActive2');
        trinagule3.classList.remove('imgActive3');
        trinagule1.classList.remove('imgActive1');
        trinagule4.classList.remove('imgActive4');
        trinagule6.classList.remove('imgActive6');
      }
    } 
    //PESO MORTAL
    else if(BMI >= 40.0){
      textSend.innerHTML = `Tu BMI es: ${resultBMI.toFixed(1)}`;
      typeSend.innerHTML = 'Obesidad de Grado 3'
      adviceSend.innerHTML = 'Tu bienestar es una prioridad. Busca un equipo de profesionales de la salud para desarrollar un plan integral. Cambios en la dieta, ejercicio y posiblemente intervenciones médicas pueden ser necesarios para mejorar tu calidad de vida.';
      trinagule6.classList.add('imgActive6');
      //CONDICIONAL PARA QUE SOLO SE ACTIVE UNA FLECHA
      if(trinagule2.classList.contains('imgActive2') || trinagule3.classList.contains('imgActive3') || trinagule1.classList.contains('imgActive1') || trinagule4.classList.contains('imgActive4') || trinagule5.classList.contains('imgActive5')){
        trinagule2.classList.remove('imgActive2');
        trinagule3.classList.remove('imgActive3');
        trinagule1.classList.remove('imgActive1');
        trinagule4.classList.remove('imgActive4');
        trinagule5.classList.remove('imgActive5');
      }
    }
  }

  calculateBMI(resultBMI);
  if(textSend.classList.contains('inactive')){
    textSend.classList.add('results__data--info-text');
  } 
  if(adviceSend.classList.contains('inactive')){
    adviceSend.classList.add('results__data--info-advice');
  }
  if(typeSend.classList.contains('inactive')){
    typeSend.classList.add('results__data--info-type');
  }
  if(barInfo.classList.contains('inactive')){
    barInfo.classList.add('results__data--info-barInfo');
  }
  if(menuInfo.classList.contains('inactive')){
    menuInfo.classList.add('results__data--info');
  }
  if(menuInfo.classList.contains('results__data--info')){
    textInfo.classList.remove('main__information--space');
  }
});