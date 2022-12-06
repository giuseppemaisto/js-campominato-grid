//definisco funzione per la griglia
function createSquare(number){
    const squareElement = document.createElement('div');
    squareElement.classList.add('square');
    squareElement.innerText = number;
    return squareElement;
}


