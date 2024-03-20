const listOfNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100
  ];  
let startGame;
let numberOfIterations;


const searchNumber = (arr, userNumber) => {
    let iteraciones = 0
    for (let index = 0; index < arr.length; index++) {
        iteraciones++;
        if (arr[index] == userNumber) {
            return iteraciones
        }
        
    }
}



const game = (searchNumber) => {
    let min = 1;
    let max = 100;
    let randomNumber = Math.floor((max + min) / 2)
    let counter = 0;
    let keepPlaying = true;
    let hintNumber;
    let answer;

    alert("Bienvenido al juego de adivinemos el número. Piensa en un número del 1 al 100 y yo intentaré adivinarlo.");


    while (keepPlaying && counter <= 10) {
        randomNumber = Math.floor((max + min) / 2)
        answer = parseInt(prompt(`¿El número que pensaste es ${randomNumber}? \nTeclea 1 para "sí" \nTeclea 2 para "no":`));
        if (answer == 1) {
            numberOfIterations = searchNumber(listOfNumbers, randomNumber);
            alert(`¡Lo adiviné! Tu número es ${randomNumber} y sólo me tomó ${counter} intentos.\n DATO CURIOSO: \nLa forma que utilicé para llegar a tu número fue por medio de una búsqueda binaria, si en LUgar de hacerlo así hubiera recorrido una lista de 100 números preguntándote uno por uno si ese era tu número, ¡Me hubiera tomado ${numberOfIterations} intentos!`)

            keepPlaying = parseInt(prompt(`¡El juego ha terminado! ¿Quieres jugar de nuevo? \nTeclea 1 para "sí" \nTeclea 2 para "no"`));
            if (keepPlaying == 1){
                counter = 0
                min = 1
                max = 100
                keepPlaying = true
                alert("Bienvenido otra vez al juego de adivinemos el número. Piensa en un número del 1 al 100 y yo intentaré adivinarlo.");
            } else {
                alert(`Es una pena que ya no quieras jugar. ¡Nos vemos pronto! Si quieres jugar de nuevo, ¡refresca la página!`);
                keepPlaying = false
            }
        } else {
            hintNumber = parseInt(prompt(`¿El número que pensaste es mayor o menor que ${randomNumber}? \nTeclea 1 para "mayor" \nTeclea 2 para "menor":`));
            if (hintNumber == 1) {
                min = randomNumber + 1
                max = max
            } else {
                min = min
                max = randomNumber - 1
            }
        }
        counter = counter + 1


    }

}

document.addEventListener('DOMContentLoaded', (event) => {
    startGame = game(searchNumber);
});
