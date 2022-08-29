// per player
document.getElementById('player-btn').addEventListener('click', function(){
   
    const newPlayerInput = getInputValueById('player-input');
    if(newPlayerInput < 0){
        alert('not allowed less than 0')
        return;
    }

    const calculatePerPlayer = newPlayerInput * 5;
    setTextElementValueById('player-element', calculatePerPlayer)
});


// total
document.getElementById('total-btn').addEventListener('click', function(){

    const managerInput = getInputValueById('manager-input');
    if(managerInput < 0){
        alert('not allowed less than 0')
        return;
    }

    const coachInput = getInputValueById ('coach-input');
    if(coachInput < 0){
        alert('not allowed less than 0')
        return;
    }

    const newPlayerEelement = getEelementValueById('player-element');

    const calculateTotal = managerInput + coachInput + newPlayerEelement;
    setTextElementValueById('total-amount', calculateTotal);

})