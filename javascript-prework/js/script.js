function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


var playerMove;
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyczki, to wygrywasz!');


var randomNumber = Math.floor(Math.random() * 9) + 11;
// printMessage('Wylosowana liczba to: ' + randomNumber);

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('wylosowana liczba to: ' + randomNumber);
if(randomNumber == 1) {
    computerMove = 'kamien';
} else if(randomNumber == 2) {
    computerMove = 'nozyczki';
} else if(randomNumber == 3) {
    computerMove ='papier';
}
printMessage('Moj ruch: ' + computerMove);

// var playerMove, playerInput;
// playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
// console.log('Wpisana odpowiedź to: ' + playerInput);
// if (playerInput == '1') {
//   playerMove = 'kamień';
// } else if(playerInput == '2') {
//     playerMove = 'nozyczki';
// } else if(playerInput == '3') {
//     playerMove = 'papier'
// } else {
//   playerMove = 'nieznany ruch';
// }
// printMessage('Twój ruch: ' + playerMove);



var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerMove

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if(argMoveId == 1) {
        return 'kamien';
    } else if (argMoveId == 2) {
        return 'nozyczki'
    } else if (argMoveId == 3) {
        return 'papier'
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}
function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'kamien' && argComputerMove == 'nozyczki') {
        printMessage('Wygrywasz');
    } else if (argPlayerMove == 'papier' && argComputerMove == 'kamien') {
        printMessage('Wygrywasz');
    } else if (argPlayerMove == 'nozyczki' && argComputerMove == 'papier') {
        printMessage('Wygrywasz');
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis');
    } else {
        printMessage('Przegrywasz');
    }

}
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
