let min = 1;
let max = 100;
let randomNumber = Math.floor((max + min) / 2);
let gameActive = false;

function updateGameStatus() {
    const guessedNumberText = document.getElementById('guessed-number');
    guessedNumberText.textContent = `¿Tu número es ${randomNumber}?`;
}

document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.getElementById('left');
    const centerButton = document.getElementById('center');
    const rightButton = document.getElementById('right');

    centerButton.addEventListener('click', function() {
        if (gameActive) {

            gameActive = false;
            min = 1;
            max = 100;
            randomNumber = Math.floor((max + min) / 2);
            centerButton.textContent = 'Comenzar';
            leftButton.disabled = true;
            rightButton.disabled = true;
            document.getElementById('guessed-number').textContent = 'Piensa en un número del 1 al 100 y presiona "Comenzar" para jugar.';
        } else {

            gameActive = true;
            centerButton.textContent = '¡Correcto!';
            leftButton.disabled = false;
            rightButton.disabled = false;
            updateGameStatus();
        }
    });

    leftButton.addEventListener('click', function() {
        if (gameActive) {
            max = randomNumber - 1;
            randomNumber = Math.floor((min + max) / 2);
            updateGameStatus();
        }
    });

    rightButton.addEventListener('click', function() {
        if (gameActive) {
            min = randomNumber + 1;
            randomNumber = Math.floor((min + max) / 2);
            updateGameStatus();
        }
    });
});
