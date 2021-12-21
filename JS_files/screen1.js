// FIRST SCREEN - HAS CAFE PEOPLE. WHERE YOU HAND OUT ORDERS
// FIXED
var background1;
var player;

function screen1() {
	//bg
	background1 = new sjs.Image("Images/screen1.png");
	background1.node.style.zIndex = 0;


	player = new sjs.Image("Images/player.png");
	player.noBounds = true;
	player.moveTo(-100, 225);
	player.node.style.zIndex = 0;

}
