function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


// var playerMove;
// playerMove = 'papier';
// printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyczki, to wygrywasz!');


// var randomNumber = Math.floor(Math.random() * 9) + 11;
// // printMessage('Wylosowana liczba to: ' + randomNumber);
// 

// var argMoveId, computerMove, playerMove, randomNumber, playerMove

// function getMoveName(argMoveId) {
//     console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
//     if(argMoveId == 1) {
//         return 'kamien';
//     } else if (argMoveId == 2) {
//         return 'papier'
//     } else if (argMoveId == 3) {
//         return 'nozyczki'
//     } else {
//         printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
//         return 'kamień';
//     }
// }
// function displayResult(playerMove, computerMove) {
//     console.log('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove);
//     if (playerMove == 'kamien' && computerMove == 'nozyczki') {
//         printMessage('Wygrywasz');
//     } else if (playerMove == 'papier' && computerMove == 'kamien') {
//         printMessage('Wygrywasz');
//     } else if (playerMove == 'nozyczki' && computerMove == 'papier') {
//         printMessage('Wygrywasz');
//     } else if (playerMove == computerMove) {
//         printMessage('Remis');
//     } else {
//         printMessage('Przegrywasz');
//     }
// }



// playerInput = prompt('Wybierz swój ruch! 1: kamien, 2: papier, 3: nozyczki.');
// console.log('wybór ruchu gracza to: ' + playerInput);
// playerMove = getMoveName(playerInput);
// console.log('ruch gracza to: ' + playerMove);
// randomNumber = Math.floor(Math.random() * 3 + 1);
// console.log('wylosowana liczba to: ' + randomNumber);
// computerMove = getMoveName(randomNumber);
// console.log('ruch komputera to: ' + computerMove);
// displayResult(playerMove, computerMove);

// printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);


var argButtonName, buttonRock, buttonPaper, buttonScissors


buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    var computerMove, playerMove, randomNumber, playerMove

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if(argMoveId == 1) {
        return 'kamien';
    } else if (argMoveId == 2) {
        return 'papier'
    } else if (argMoveId == 3) {
        return 'nozyczki'
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}
function displayResult(playerMove, computerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove);
    if (playerMove == 'kamien' && computerMove == 'nozyczki') {
        printMessage('Wygrywasz');
    } else if (playerMove == 'papier' && computerMove == 'kamien') {
        printMessage('Wygrywasz');
    } else if (playerMove == 'nozyczki' && computerMove == 'papier') {
        printMessage('Wygrywasz');
    } else if (playerMove == computerMove) {
        printMessage('Remis');
    } else {
        printMessage('Przegrywasz');
    }
}



playerMove = argButtonName;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
    
  }

buttonRock.addEventListener('click', function() {buttonClicked('kamien');});
buttonPaper.addEventListener('click', function() { buttonClicked('papier');});
buttonScissors.addEventListener('click', function() {buttonClicked('nozyczki');});


