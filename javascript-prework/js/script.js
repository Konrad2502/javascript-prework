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
} else {
    computerMove ='papier';
}