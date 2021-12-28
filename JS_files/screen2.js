// SECOND SCREEN, GET DRINK FLAVOR

//globals so i can destroy them
var background2; var moveToScreen3; var button1_scn2; var button2_scn2; var button3_scn2; var button4_scn2; var button5_scn2; var button6_scn2; var button7_scn2; var button8_scn2; var button9_scn2; var button10_scn2; var button11_scn2;

var scoopOfBeans; // made it a global
var scoopOut = false;
function screen2() {
	//bg
	background2 = new sjs.Image("Images/screen2.png");
	background2.node.style.zIndex = 0.01;

	moveToScreen3 = new sjs.Image("Images/moveDrinkParts/moveToScreen3.png");
	moveToScreen3.moveTo(1500,825);
	moveToScreen3.type = "moveBlock";
	moveToScreen3.node.style.zIndex = 0.01;
	
	button1_scn2 = new sjs.Image("Images/drinkTypeButtons/battery_acid.png");
	button1_scn2.type = "Game";
	button1_scn2.setSize(95,95);
	button1_scn2.moveTo(307,166);

	button1_scn2.onMouseDown(function(){
		// returns true or false to make sure that you cant take more than one
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopBattery.png", scoopOut);
	});

	button2_scn2 = new sjs.Image("Images/drinkTypeButtons/light_roast.png");
	button2_scn2.type = "Game";
	button2_scn2.setSize(95,95);
	button2_scn2.moveTo(437.25,166);

	button2_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopLightEST.png", scoopOut);
	});

	button3_scn2 = new sjs.Image("Images/drinkTypeButtons/medium_roast.png");
	button3_scn2.type = "Game";
	button3_scn2.setSize(95,95);
	button3_scn2.moveTo(567.5,166);

	button3_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopLighter.png", scoopOut);
	});

	button4_scn2 = new sjs.Image("Images/drinkTypeButtons/mediumDark_roast.png");
	button4_scn2.type = "Game";
	button4_scn2.setSize(95,95);
	button4_scn2.moveTo(307,307.5);

	button4_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopDarker.png", scoopOut);
	});

	button5_scn2 = new sjs.Image("Images/drinkTypeButtons/dark_roast.png");
	button5_scn2.type = "Game";
	button5_scn2.setSize(95,95);
	button5_scn2.moveTo(437.25,307.5);

	button5_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopDarkEST.png", scoopOut);
	});

// TEA BEGINS HERE
	button6_scn2 = new sjs.Image("Images/drinkTypeButtons/chamomile.png");
	button6_scn2.type = "Game";
	button6_scn2.setSize(95,95);
	button6_scn2.moveTo(977,166);

	button6_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopChamo.png", scoopOut);
	});

	button7_scn2 = new sjs.Image("Images/drinkTypeButtons/green.png");
	button7_scn2.type = "Game";
	button7_scn2.setSize(95,95);
	button7_scn2.moveTo(1107.25,166);

	button7_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopGreen.png", scoopOut);
	});

	button8_scn2 = new sjs.Image("Images/drinkTypeButtons/elderberry.png");
	button8_scn2.type = "Game";
	button8_scn2.setSize(95,95);
	button8_scn2.moveTo(1237.5,166);

	button8_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopElder.png", scoopOut);
	});

	button9_scn2 = new sjs.Image("Images/drinkTypeButtons/white.png");
	button9_scn2.type = "Game";
	button9_scn2.setSize(95,95);
	button9_scn2.moveTo(977,307.5);

	button9_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopWhite.png", scoopOut);
	});

	button10_scn2 = new sjs.Image("Images/drinkTypeButtons/chai.png"); // share with med roast
	button10_scn2.type = "Game";
	button10_scn2.setSize(95,95);
	button10_scn2.moveTo(1107.25,307.5);

	button10_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopChai.png", scoopOut);
	});

	button11_scn2 = new sjs.Image("Images/drinkTypeButtons/mint.png"); // share with white
	button11_scn2.type = "Game";
	button11_scn2.setSize(95,95);
	button11_scn2.moveTo(1237.5,307.5);

	button11_scn2.onMouseDown(function(){
		scoopOut = onClickButtons("Images/drinkTypeButtons/scoops/scoopWhite.png", scoopOut);
	});

	sjs.onHit("Beans","moveBlock", function(x,y){ // on hit, go to 3rd screen
		x.moveTo(5,1000);
		transition(2);
		setTimeout(function (){
			screen3();
			checksForSwitchingScreens(currentScreen,3);
			window.currentScreen = 3;
			x.node.style.zIndex= 2;
		}, 250);
	});

}

function onClickButtons(scoopImage, scoopOut) {
	btn_clickSFX.play();
		if (scoopOut == false){
			scoopOut = true;
			scoopOfBeans = new sjs.Image(scoopImage);
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








