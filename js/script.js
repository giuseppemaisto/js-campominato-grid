//definisco funzione per la griglia
function createSquare(number){
    const squareElement = document.createElement('div');
    squareElement.classList.add('square');
    squareElement.innerText = number;
    return squareElement;
}


let button_genera = document.getElementById('genera')
button_genera.addEventListener('click', function(){

    let grid = document.getElementById('grid')
    for(let i = 1; i<=100;i++){
        const currentSquare = createSquare(i);
        grid.appendChild(currentSquare);

        currentSquare.addEventListener('click', function(){
            this.classList.add('clicked')
            console.log(this.innerText)
        })
    }
})
