//screen3
var station1Taken = false; // TURN OFF WHEN DRINK IS DONE
var station2Taken = false;
var station3Taken = false;

var scoop1Taken = false;
var scoop2Taken = false;
var scoop3Taken = false;

var moveable_Lcup1;
var moveable_Scup1;
var insertedScoop;
// globals that help game know where everything is

function screen3() {
	//bg
	var background = new sjs.Image("Images/screen3.png");
	background.type = "Game";
	background.node.style.zIndex = 0;

	var scoopInterract1 = new sjs.Image("Images/moveDrinkParts/screen3CoffeeBar.png");
	scoopInterract1.moveTo(180,355);
	scoopInterract1.type = "scoopInterract";

	var scoopInterract2 = new sjs.Image("Images/moveDrinkParts/screen3CoffeeBar.png");
	scoopInterract2.moveTo(530,355);
	scoopInterract2.type = "scoopInterract";

	var scoopInterract3 = new sjs.Image("Images/moveDrinkParts/screen3CoffeeBar.png");
	scoopInterract3.moveTo(860,355);
	scoopInterract3.type = "scoopInterract";

	var station1 = new sjs.Image("Images/circle.png");
	station1.type = "brewStation"
	station1.moveTo(175,800);
	station1.node.style.zIndex = 0;

	var station2 = new sjs.Image("Images/circle.png");
	station2.type = "brewStation"
	station2.moveTo(525,800);
	station2.node.style.zIndex = 0;

	var station3 = new sjs.Image("Images/circle.png");
	station3.type = "brewStation"
	station3.moveTo(855,800);
	station3.node.style.zIndex = 0;

	var constant_frother = new sjs.Image("Images/Frother.png");
	constant_frother.moveTo(1200,535);
	constant_frother.node.style.zIndex = 0;

	var constant_Lcup = new sjs.Image("Images/drinkTypeButtons/large_empty.png");
	constant_Lcup.type = "Game";
	constant_Lcup.setSize(200,300); // pls adjust sizing
	constant_Lcup.moveTo(1400,150);
	constant_Lcup.node.style.zIndex = 0;

	constant_Lcup.onMouseDown(function(){ // when clicked
		checkForDrinkSpot("LARGE");
	});

	var constant_Scup = new sjs.Image("Images/drinkTypeButtons/small_empty.png");
	constant_Scup.type = "Game";
	constant_Scup.setSize(200,300);
	constant_Scup.moveTo(1200,150);
	constant_Scup.node.style.zIndex = 0;

	constant_Scup.onMouseDown(function(){ // when clicked
		checkForDrinkSpot("SMALL");
	});

	sjs.onHit("Cup","brewStation", function(x,y){
		// CUP, NOOOOOTT BEANS!!!
		//STOP MIXING THEM UP PLEASE :)
		switch (y) {
			case station1 :
			if (station1Taken == false && currentScreen == 3){
				//var coffeedrip = determineLiquidColor(x); // previously display drip
				//coffeedrip.moveTo(221,481);
				//coffeedrip.node.style.zIndex = 0;
				station1Taken = true;
				x.moveTo(140,400);
				x.unfollow();
				x.undraggable();
				checkForDrinkMaking(scoop1Taken, station1Taken);
				}
			break;
			case station2 :
			if (station2Taken == false && currentScreen == 3){
				//var coffeedrip = new sjs.Image("Images/drinkTypeButtons/drip/coffeeDripDark.png");
				//coffeedrip.moveTo(221,481);
				//coffeedrip.node.style.zIndex = 0;
				station2Taken = true;
				x.moveTo(490,400);
				x.unfollow();
				x.undraggable();
				checkForDrinkMaking(scoop2Taken, station2Taken);
				}
			break;
			case station3 :
			if (station3Taken == false && currentScreen == 3){
				//var coffeedrip = new sjs.Image("Images/drinkTypeButtons/drip/coffeeDripDark.png");
				//coffeedrip.moveTo(221,481);
				//coffeedrip.node.style.zIndex = 0;
				station3Taken = true;
				x.moveTo(820,400);
				x.unfollow();
				x.undraggable();
				checkForDrinkMaking(scoop3Taken, station3Taken);
				}
			break;

		}
	});


	sjs.onHit("Beans","scoopInterract", function(x,y){
		// BEANS, NOOOOOOOOT CUPS!!!!!!
		// DONT MIX THEM UP
		switch (y) {
			case scoopInterract1 :
			if (scoop1Taken == false && currentScreen == 3){
				scoopOut = false;
				//find a way to assign only the NAME of the image
				scoop1Taken = x.src;
				x.destroy();
				var insertScoopGIF = new sjs.Image("Images/drinkTypeButtons/scoops/insertScoop.gif");
				insertScoopGIF.noBounds = true;
				insertScoopGIF.moveTo(-136,306);
				insertScoopGIF.node.style.zIndex = 2;
				setTimeout(function(){
					insertedScoop = new sjs.Image("Images/drinkTypeButtons/scoops/insertedScoop.png");
					insertedScoop.node.style.zIndex = 2;
					insertedScoop.noBounds = true;
					insertedScoop.moveTo(-136,306);
					insertScoopGIF.destroy();
					checkForDrinkMaking(scoop1Taken, station1Taken);
				}, 450);
				}
			break;
			case scoopInterract2 :
			if (scoop2Taken == false && currentScreen == 3){
				scoopOut = false;
				//find a way to assign only the NAME of the image
				scoop2Taken = x.src;
				x.destroy();
				var insertScoopGIF = new sjs.Image("Images/drinkTypeButtons/scoops/insertScoop.gif");
				insertScoopGIF.moveTo(212,306);
				insertScoopGIF.node.style.zIndex = 2;
				setTimeout(function(){
					insertedScoop = new sjs.Image("Images/drinkTypeButtons/scoops/insertedScoop.png");
					insertedScoop.node.style.zIndex = 2;
					insertedScoop.moveTo(212,306);
					insertScoopGIF.destroy();
					checkForDrinkMaking(scoop2Taken, station2Taken);
				}, 450);
				}
			break;
			case scoopInterract3 :
			if (scoop3Taken == false && currentScreen == 3){
				scoopOut = false;
				//find a way to assign only the NAME of the image
				scoop3Taken = x.src;
				x.destroy();
				var insertScoopGIF = new sjs.Image("Images/drinkTypeButtons/scoops/insertScoop.gif");
				insertScoopGIF.moveTo(545,306);
				insertScoopGIF.node.style.zIndex = 2;
				setTimeout(function(){
					insertedScoop = new sjs.Image("Images/drinkTypeButtons/scoops/insertedScoop.png");
					insertedScoop.node.style.zIndex = 2;
					insertedScoop.moveTo(545,306);
					insertScoopGIF.destroy();
					checkForDrinkMaking(scoop3Taken, station3Taken);
				}, 450);
				}
			break;
		}
	});

}

function checkForDrinkSpot(drinkType){ // change
	console.log(Object.entries(drinksBeingMade))
	for (var [key, value] of Object.entries(drinksBeingMade)) {
		if (window.cupsCurrentlyUsed >= 3){ // if 3 or more cups are out
			console.log("NO MORE CUPS! >:(");
			var tooManyPrompt = new sjs.Image("Images/prompt2user.png");
			tooManyPrompt.moveTo(400,425);
			tooManyPrompt.node.style.zIndex = 2;
			var prmpt_Text = new sjs.Text("You can't carry that many drinks!",75,"white");
			prmpt_Text.node.style.zIndex = 2;
			prmpt_Text.moveTo(490,515);
			prmpt_Text.node.style.fontFamily = "Apple Kid";
			setTimeout(function(){
				tooManyPrompt.destroy();
				prmpt_Text.destroy();
				}, 1500)
		// i need to add another break?
		} else if (value == null){ // if spot is open
			window.cupsCurrentlyUsed = window.cupsCurrentlyUsed+1;
			if (drinkType == "LARGE"){
				window.drinksBeingMade[key] = new Array("LCup");
				moveable_Lcup1 = new sjs.Image("Images/drinkTypeButtons/L_draggable.png");
				moveable_Lcup1.node.style.zIndex = 1;
				moveable_Lcup1.moveTo(1200,200); // eventually change name of cup? not sure if i'll need it-
				moveable_Lcup1.type = "Cup"; //so like moveable_Lcup2 moveable_Lcup3 etc
				moveable_Lcup1.draggable();
				moveable_Lcup1.follow(sjs.mouse);
			} else if (drinkType == "SMALL") {
				window.drinksBeingMade[key] = new Array("SCup");
				moveable_Scup1 = new sjs.Image("Images/drinkTypeButtons/S_draggable.png");
				moveable_Scup1.node.style.zIndex = 1;
				moveable_Scup1.moveTo(1200,200); // eventually change name of cup? not sure if i'll need it-
				moveable_Scup1.type = "Cup"; //so like moveable_Lcup2 moveable_Lcup3 etc
				moveable_Scup1.draggable();
				moveable_Scup1.follow(sjs.mouse);
			} // end if
			break;
		}
	}
}


function checkForDrinkMaking(scoopSlot, drinkSlot){
	if (scoopSlot != false && drinkSlot == true){
		//determineLiquidColor("HELP")
		console.log(scoopSlot);
	} // maybe add an else here but idk i dont think it's that necessary
}


















/*function determineLiquidColor(beansBrewed){
	console.log(beansBrewed);
	switch(beansBrewed){
		case "Images/drinkTypeButtons/scoops/scoopBattery.png":
			return new sjs.Image("Images/drinkTypeButtons/drip/coffeeDripBattery.png");
		break;
		case "Images/drinkTypeButtons/scoops/scoopLightEST.png":
		case "Images/drinkTypeButtons/scoops/scoopLighter.png":
			return new sjs.Image("Images/drinkTypeButtons/drip/coffeeDripLight.png");
		break;
		case "Images/drinkTypeButtons/scoops/scoopChamo.png":
			return new sjs.Image("Images/drinkTypeButtons/drip/coffeeDripChamo.png");
		break;
		case "Images/drinkTypeButtons/scoops/scoopDarker.png":
		case "Images/drinkTypeButtons/scoops/scoopDarkEST.png":
			return new sjs.Image("Images/drinkTypeButtons/drip/coffeeDripDark.png");
		break;
	}
}*/


/* ENDGAME GOALS

eventually add a garbage can/ something to throw out stuff that allows someone to trash a drink they made
this isnt necessary rn and an extra step so do it later in the process*/