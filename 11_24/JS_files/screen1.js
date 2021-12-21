// FIRST SCREEN - HAS CAFE PEOPLE. WHERE YOU HAND OUT ORDERS
// FIXED
function screen1() {
	//bg
	var background = new sjs.Image("Images/screen1.png");
	background.type = "Game";
	background.node.style.zIndex = 0;


	var player = new sjs.Image("Images/player.png");
	player.noBounds = true;
	player.moveTo(-100, 225);
	player.node.style.zIndex = 0;

}
