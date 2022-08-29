console.log('selected v')

let count = 0;

function addToFive(element){

    count ++;

    
    element.disabled = true;
    element.style.backgroundColor = "#000";
    
    if(count > 5) {
         alert("don't add more than five players.");
         element.disabled = true;
         element.style.backgroundColor = "red";
        return;
    }

    const playerName = element.parentNode.parentNode.children[0].innerText;
    
    
    const playerList = document.getElementById('player-list');

    const liList = document.createElement('li');
    liList.innerHTML = `
        <p>${playerName}</p>
    `;
    playerList.appendChild(liList);
    
}