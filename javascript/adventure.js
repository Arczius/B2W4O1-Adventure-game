var title = document.getElementById('title');
var description = document.getElementById('description');
var buttonDiv = document.getElementById('game-buttons');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var inventoryItem = document.getElementById('inventoryItem');
var inventory = {};

title.innerText = "Final Flower";

var damageMath = 0;
var damageUser = [4,7,11,18,21,8,13,5];
var damageOpponent = [3,6,10,17,20,7,14,4];


function damageMathFunc(){
	damageMath = Math.floor(Math.random() * 8);
}

button1.innerText = "Knop 1";
button2.innerText = "Knop 2";
button3.innerText = "Knop 3";

inventoryItem.style.visibility = 'hidden';


button1.onclick = function(){
	damageMathFunc();
	console.log("damageMath is " + damageMath);
	button1.innerText = damageUser[damageMath];
};

button2.onclick = function(){
	damageMathFunc();
	console.log("damageMath is " + damageMath);
	button2.innerText = damageOpponent[damageMath];
}