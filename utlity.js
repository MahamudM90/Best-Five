function getInputValueById(inputId){

   const perPlayerInput = document.getElementById(inputId);
   const playerInputString = perPlayerInput.value;
   const playerInput = parseFloat(playerInputString);
   perPlayerInput.value = '';
   return playerInput;
}


function getEelementValueById(elementId){
const perPlayerElement = document.getElementById(elementId);
const playerElementString = perPlayerElement.innerText;
const playerElement = parseFloat(playerElementString);
return playerElement;
}


function setTextElementValueById(elementId, newValue){
const perPlayerElement = document.getElementById(elementId);
perPlayerElement.innerText = newValue;
}