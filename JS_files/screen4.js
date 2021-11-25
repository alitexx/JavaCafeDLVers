// bababooey
// click the menu to confirm sending of drink, can be done at any time. maybe put a button on it

function screen4() {
	//bg
	var background = new sjs.Image("Images/screen4.png");
	background.type = "Game";
	background.node.style.zIndex = 0;

	var item_whipped = new sjs.Image("Images/screen4Items/bottle_whipped.png");
	item_whipped.moveTo(0,195);

	var item_cara = new sjs.Image("Images/screen4Items/bottle_Cara.png");
	item_cara.moveTo(150,195);

	var item_choco = new sjs.Image("Images/screen4Items/bottle_Choco.png");
	item_choco.moveTo(1300,195);

	var item_sugarcube = new sjs.Image("Images/screen4Items/sugarcubes.png");
	item_sugarcube.moveTo(0,600);

	var item_peppermint = new sjs.Image("Images/screen4Items/phys_peppermint.png");
	item_peppermint.moveTo(0,800);

	var item_cinnamon = new sjs.Image("Images/screen4Items/cinnamon.png");
	item_cinnamon.moveTo(1200,600);

	var button1 = new sjs.Image("Images/screen4Items/vanilla.png");
	button1.moveTo(390,230);

	var button2 = new sjs.Image("Images/screen4Items/pumpkin.png");
	button2.moveTo(530,230);

	var button3 = new sjs.Image("Images/screen4Items/chocolate.png");
	button3.moveTo(670,230);

	var button4 = new sjs.Image("Images/screen4Items/caramel.png");
	button4.moveTo(810,230);

	var button5 = new sjs.Image("Images/screen4Items/peppermint.png");
	button5.moveTo(950,230);

	var button6 = new sjs.Image("Images/screen4Items/expresso.png");
	button6.moveTo(1090,230);
}