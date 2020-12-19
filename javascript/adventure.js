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

//button1.onclick = function(){
//	damageMathFunc();
//	console.log("damageMath is " + damageMath);
//	button1.innerText = damageUser[damageMath];
//};

//button2.onclick = function(){
//	damageMathFunc();
//	console.log("damageMath is " + damageMath);
//	button2.innerText = damageOpponent[damageMath];
//};
function howToPlay(){
	button1.innerText = "back to menu";
	title.innerText = "How To Play";
	description.innerText = "this game is a text game with multiple endings";
	button1.onclick	= function(){
		start();
	};
	button2.style.visibility = 'hidden';
};
function startGame(){
	var Name = prompt("what is your name?");
	button2.style.visibility = 'hidden';
	button1.innerText = "continue"
	description.innerText = "hello " + Name + " welcome to Final Flower";
}

start();
