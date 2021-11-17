// SECOND SCREEN, GET DRINK FLAVOR

var scoopOut = false;
function screen2() {
	//bg
	var background = new sjs.Image("Images/screen2.png");
	background.type = "Game";
	background.node.style.zIndex = 0;

	var moveToScreen3 = new sjs.Image("Images/moveDrinkParts/moveToScreen3.png");
	moveToScreen3.moveTo(1500,825);
	moveToScreen3.type = "moveBlock";
	moveToScreen3.node.style.zIndex = 0;
	
	var button1 = new sjs.Image("Images/drinkTypeButtons/battery_acid.png");
	button1.type = "Game";
	button1.setSize(95,95);
	button1.moveTo(307,166);
	button1.node.style.zIndex = 0;

	button1.onMouseDown(function(){
		// returns true or false to make sure that you cant take more than one
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopBattery.png", scoopOut);
	});

	var button2 = new sjs.Image("Images/drinkTypeButtons/light_roast.png");
	button2.type = "Game";
	button2.setSize(95,95);
	button2.moveTo(437.25,166);
	button2.node.style.zIndex = 0;

	button2.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopLightEST.png", scoopOut);
	});

	var button3 = new sjs.Image("Images/drinkTypeButtons/medium_roast.png");
	button3.type = "Game";
	button3.setSize(95,95);
	button3.moveTo(567.5,166);
	button3.node.style.zIndex = 0;

	button3.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopLighter.png", scoopOut);
	});

	var button4 = new sjs.Image("Images/drinkTypeButtons/mediumDark_roast.png");
	button4.type = "Game";
	button4.setSize(95,95);
	button4.moveTo(307,307.5);
	button4.node.style.zIndex = 0;

	button4.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopDarker.png", scoopOut);
	});

	var button5 = new sjs.Image("Images/drinkTypeButtons/dark_roast.png");
	button5.type = "Game";
	button5.setSize(95,95);
	button5.moveTo(437.25,307.5);
	button5.node.style.zIndex = 0;

	button5.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopDarkEST.png", scoopOut);
	});

// TEA BEGINS HERE
	var button6 = new sjs.Image("Images/drinkTypeButtons/chamomile.png");
	button6.type = "Game";
	button6.setSize(95,95);
	button6.moveTo(977,166);
	button6.node.style.zIndex = 0;

	button6.onMouseDown(function(){
		onClickButtons("Images/drinkTypeButtons/scoops/scoopChamo.png", scoopOut);
	});

	var button7 = new sjs.Image("Images/drinkTypeButtons/green.png");
	button7.type = "Game";
	button7.setSize(95,95);
	button7.moveTo(1107.25,166);
	button7.node.style.zIndex = 0;

	button7.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopGreen.png", scoopOut);
	});

	var button8 = new sjs.Image("Images/drinkTypeButtons/elderberry.png");
	button8.type = "Game";
	button8.setSize(95,95);
	button8.moveTo(1237.5,166);
	button8.node.style.zIndex = 0;

	button8.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopElder.png", scoopOut);
	});

	var button9 = new sjs.Image("Images/drinkTypeButtons/white.png");
	button9.type = "Game";
	button9.setSize(95,95);
	button9.moveTo(977,307.5);
	button9.node.style.zIndex = 0;

	button9.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopWhite.png", scoopOut);
	});

	var button10 = new sjs.Image("Images/drinkTypeButtons/chai.png"); // share with med roast
	button10.type = "Game";
	button10.setSize(95,95);
	button10.moveTo(1107.25,307.5);
	button10.node.style.zIndex = 0;

	button10.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopLighter.png", scoopOut);
	});

	var button11 = new sjs.Image("Images/drinkTypeButtons/mint.png"); // share with white
	button11.type = "Game";
	button11.setSize(95,95);
	button11.moveTo(1237.5,307.5);
	button11.node.style.zIndex = 0;

	button11.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopWhite.png", scoopOut);
	});

	sjs.onHit("Beans","moveBlock", function(x,y){ // on hit, go to 3rd screen
		screen3();
		window.currentScreen = 3;
		menuBar();
		x.node.style.zIndex= 2;
		x.moveTo(5,1000);

	});

}

function onClickButtons(scoopImage, scoopOut) {
		if (scoopOut == false){
			scoopOut = true;
			var scoopOfBeans = new sjs.Image(scoopImage);
			scoopOfBeans.moveTo(700,600);
			scoopOfBeans.type = "Beans";
			scoopOfBeans.draggable();
			scoopOfBeans.follow(sjs.mouse);
			scoopOfBeans.node.style.zIndex = 1;
			return scoopOut;
		}
		else{ // the "please dont take more than one" prompt
			var tooManyPrompt = new sjs.Image("Images/prompt2user.png");
			tooManyPrompt.moveTo(400,425);
			tooManyPrompt.node.style.zIndex = 2;
			var prmpt_Text = new sjs.Text("Only take one at a time!",75,"white");
			prmpt_Text.moveTo(585,515);
			prmpt_Text.node.style.zIndex = 2;
			prmpt_Text.node.style.fontFamily = "Apple Kid";
			setTimeout(function(){
				tooManyPrompt.destroy();
				prmpt_Text.destroy();
				}, 1500)
			}
}








