var title = document.getElementById('title');
var description = document.getElementById('description');
var buttonDiv = document.getElementById('game-buttons');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var inventoryItem = document.getElementById('inventoryItem');
var inventory = {};

function start(){
	button2.style.visibility = 'visible';
	button3.style.visibility = 'hidden';
	title.innerText = "Final Flower";
	description.innerText = "Welcome to Final Flower, this is a small game about a fantasy world called The Flower";
	button1.innerText = "Start";
	button2.innerText = "How To Play";
	inventoryItem.style.visibility = 'hidden';
	button2.onclick	= function(){
		howToPlay();
	};
	button1.onclick = function(){
		startGame();
	};
}

var damageMath = 0;
var damageUser = [4,7,11,18,21,8,13,5];
var damageOpponent = [3,6,10,17,20,7,14,4];


function damageMathFunc(){
	damageMath = Math.floor(Math.random() * 8);
}

function howToPlay(){
	button1.innerText = "back to menu";
	title.innerText = "How To Play";
	description.innerText = "this game is a text game with multiple endings";
	button1.onclick	= function(){
		start();
	};
	button2.style.visibility = 'hidden';
};
var conF = 1;

function continueFunct(){
	conFu = 1;
	if (confu == 1) {

	}
}

function exitTutorial(){
	description.innerText = "you wake up in your house";
	button1.onclick = function(){
		continueFunct();
	}
}

function continueFunc(){
	if (conF == 1) {
		description.innerText = "get ready for the adventure that's about to unfold";
	}
	else if (conF == 2) {
		description.innerText = "loading...";
	}
	else if (conF == 3) {
		exitTutorial();
	}
}
var Name = "none";
function startGame(){
	Name = prompt("what is your name?");
	button2.style.visibility = 'hidden';
	button1.innerText = "continue"
	description.innerText = "hello " + Name + " welcome to Final Flower";
	button1.onclick = function(){
		continueFunc();
		conF++;
	}
}

start();
