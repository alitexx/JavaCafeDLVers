//screen3

//globals so i can destroy them
var background3; var moveToScreen4; var scoopInterract1; var scoopInterract2; var scoopInterract3; var station1; var station2; var station3; var frother; var constant_Lcup; var constant_Scup;


var station1Taken = false;// TURN OFF WHEN DRINK IS DONE
var station2Taken = false;
var station3Taken = false;

var scoop1Taken = ""; // these become the name of da scoop
var scoop2Taken = "";
var scoop3Taken = "";

var drip1;
var drip2;
var drip3;

var moveable_Lcup1; // making them global just in case more spawn
var moveable_Lcup2;
var moveable_Lcup3;
var moveable_Scup1;
var moveable_Scup2;
var moveable_Scup3;

var timerComplete1 = false;
var timerComplete2 = false;
var timerComplete3 = false;

var timer1;
var timer2;
var timer3;

var insertedScoop1;
var insertedScoop2;
var insertedScoop3;

var moveable_frother;

var beingBrewedSFX = new Audio("Audio/beingBrewedSFX.wav");

// globals that help game know where everything is

function screen3() {

	//bg
	background3 = new sjs.Image("Images/screen3.png");
	background3.node.style.zIndex = 0;

	moveToScreen4 = new sjs.Image("Images/moveDrinkParts/moveToScreen4.png");
	moveToScreen4.moveTo(1500,900);
	moveToScreen4.type = "moveBlock";

	timer1 = new sjs.Image("Images/brewTimer/timer_null.png");
	timer1.moveTo(200,190);
	if (timerComplete1 == true){
		timer1.setImage("Images/brewTimer/timer8.png");
	}

	timer2 = new sjs.Image("Images/brewTimer/timer_null.png");
	timer2.moveTo(550,190);
	if (timerComplete2 == true){
		timer2.setImage("Images/brewTimer/timer8.png");
	}

	timer3 = new sjs.Image("Images/brewTimer/timer_null.png");
	timer3.moveTo(880,190);
	if (timerComplete3 == true){
		timer3.setImage("Images/brewTimer/timer8.png");
	}

	scoopInterract1 = new sjs.Image("Images/moveDrinkParts/screen3CoffeeBar.png");
	scoopInterract1.moveTo(180,355);
	scoopInterract1.type = "scoopInterract";

	scoopInterract2 = new sjs.Image("Images/moveDrinkParts/screen3CoffeeBar.png");
	scoopInterract2.moveTo(530,355);
	scoopInterract2.type = "scoopInterract";

	scoopInterract3 = new sjs.Image("Images/moveDrinkParts/screen3CoffeeBar.png");
	scoopInterract3.moveTo(860,355);
	scoopInterract3.type = "scoopInterract";

	station1 = new sjs.Image("Images/circle.png");
	station1.type = "brewStation"
	station1.moveTo(175,800);

	station2 = new sjs.Image("Images/circle.png");
	station2.type = "brewStation"
	station2.moveTo(525,800);

	station3 = new sjs.Image("Images/circle.png");
	station3.type = "brewStation"
	station3.moveTo(855,800);


	frother = new sjs.Image("Images/Frother.png");
	// make this smaller by a third
	frother.moveTo(1200,525);

	var frotherOut = false; // checks the state of the frother

	function checkFrotherStatus(){
		if (frotherOut == false){
			btn_clickSFX.play();
			moveable_frother = new sjs.Image("Images/Frother.png");
			moveable_frother.type = "Frother";
			moveable_frother.noBounds = true;
			moveable_frother.draggable();
			moveable_frother.moveTo(1200,500);
			moveable_frother.follow(sjs.mouse);
			frotherOut = true;
		}
	}


	frother.onMouseDown(function(){ // make something so it only fires ONCE
		checkFrotherStatus();
	});


	constant_Lcup = new sjs.Image("Images/drinkTypeButtons/large_empty.png");
	constant_Lcup.type = "Game";
	constant_Lcup.setSize(200,300); // pls adjust sizing
	constant_Lcup.moveTo(1400,150);

	constant_Lcup.onMouseDown(function(){ // when clicked
		checkForDrinkSpot("LARGE");
	});

	constant_Scup = new sjs.Image("Images/drinkTypeButtons/small_empty.png");
	constant_Scup.type = "Game";
	constant_Scup.setSize(200,300);
	constant_Scup.moveTo(1200,150);

	constant_Scup.onMouseDown(function(){ // when clicked
		checkForDrinkSpot("SMALL");
	});

	sjs.onHit("Frother", "doneBrewing", function(f,cup){
		cup.unfollow();
		cup.undraggable();
		var pouringSFX = new Audio("Audio/pouringMilk.wav");
		pouringSFX.play();
		var pouring = new sjs.Image("Images/frotherwithMilk.png");
		moveable_frother.destroy();
		pouring.moveTo(cup.x, (cup.y - 100));
		drinksBeingMade[cup.numInLine].addLatteMilk();
		setTimeout(function(){
			frotherOut = false;
			cup.follow(sjs.mouse);
			cup.draggable();
			pouring.destroy();
			pouringSFX = null;
		}, 3500);
	})




	sjs.onHit("doneBrewing", "moveBlock", function(x,y){
		if (typeof drinkOnScn4 == "undefined"){
		console.log("I am moving to screen 4!")
		x.moveTo(645,470); // set move to in the middle
		x.undraggable();
		x.unfollow();
		transition(currentScreen);
		checksForSwitchingScreens(currentScreen,4);
		setTimeout(function (){
			currentScreen = 4;
			screen4();
			drinkOnScn4 = x;
			x.node.style.zIndex= 2;
			x.type = "onScreen4";
		}, 250);
		} else {
			var slowDown = new sjs.Image("Images/prompt2user.png");
			slowDown.moveTo(700,120);
			slowDown.node.style.zIndex = 20;
			var prmpt_Text = new sjs.Text("You can only put toppings on drinks one a time!",75,"white");
			prmpt_Text.moveTo(730,185);
			prmpt_Text.node.style.zIndex = 20;
			prmpt_Text.node.style.fontFamily = "Apple Kid";
			setTimeout(function(){
				slowDown.destroy();
				prmpt_Text.destroy();
		}, 1500);
		}
	});






	sjs.onHit("Cup","brewStation", function(x,y){
		switch (y) {
			case station1 :
			if (station1Taken == false && currentScreen == 3 && x.canBrew == true){
				station1Taken = x;
				console.log(x);
				x.moveTo(140,400);
				x.unfollow();
				x.undraggable();
				x.station = "station1Taken"; // for deletion
				checkForDrinkMaking(scoop1Taken, station1Taken, "1");
				}
			break;
			case station2 :
			if (station2Taken == false && currentScreen == 3 && x.canBrew == true){
				station2Taken = x;
				x.moveTo(490,400);
				x.unfollow();
				x.undraggable();
				x.station = "station2Taken"; // for deletion
				checkForDrinkMaking(scoop2Taken, station2Taken, "2");
				}
			break;
			case station3 :
			if (station3Taken == false && currentScreen == 3 && x.canBrew == true){
				station3Taken = x;
				x.moveTo(820,400);
				x.unfollow();
				x.undraggable();
				x.station = "station3Taken"; // for deletion
				checkForDrinkMaking(scoop3Taken, station3Taken, "3");
				}
			break;

		}
	});


	sjs.onHit("Beans","scoopInterract", function(x,y){ // WHEN BEANS HIT THE SCOOP INTERRACT
		// BEANS, NOOOOOOOOT CUPS!!!!!!
		// DONT MIX THEM UP
		switch (y) {
			case scoopInterract1 :
			if (scoop1Taken == "" && currentScreen == 3){
				scoopOut = false;
				scoop1Taken = x.src;
				x.destroy();
				var insertScoopGIF = new sjs.Image("Images/drinkTypeButtons/scoops/insertScoop.gif");
				insertScoopGIF.noBounds = true;
				insertScoopGIF.moveTo(-136,306);
				insertScoopGIF.node.style.zIndex = 2;
				setTimeout(function(){
					insertedScoop1 = new sjs.Image("Images/drinkTypeButtons/scoops/insertedScoop.png");
					insertedScoop1.node.style.zIndex = 2;
					insertedScoop1.noBounds = true;
					insertedScoop1.moveTo(-136,306);
					insertScoopGIF.destroy();
					checkForDrinkMaking(scoop1Taken, station1Taken, "1");
				}, 450);
				}
			break;
			case scoopInterract2 :
			if (scoop2Taken == "" && currentScreen == 3){
				scoopOut = false;
				//find a way to assign only the NAME of the image
				scoop2Taken = x.src;
				x.destroy();
				var insertScoopGIF = new sjs.Image("Images/drinkTypeButtons/scoops/insertScoop.gif");
				insertScoopGIF.moveTo(212,306);
				insertScoopGIF.node.style.zIndex = 2;
				setTimeout(function(){
					insertedScoop2 = new sjs.Image("Images/drinkTypeButtons/scoops/insertedScoop.png");
					insertedScoop2.node.style.zIndex = 2;
					insertedScoop2.moveTo(212,306);
					insertScoopGIF.destroy();
					checkForDrinkMaking(scoop2Taken, station2Taken, "2");
				}, 450);
				}
			break;
			case scoopInterract3 :
			if (scoop3Taken == "" && currentScreen == 3){
				scoopOut = false;
				//find a way to assign only the NAME of the image
				scoop3Taken = x.src;
				x.destroy();
				var insertScoopGIF = new sjs.Image("Images/drinkTypeButtons/scoops/insertScoop.gif");
				insertScoopGIF.moveTo(545,306);
				insertScoopGIF.node.style.zIndex = 2;
				setTimeout(function(){
					insertedScoop3 = new sjs.Image("Images/drinkTypeButtons/scoops/insertedScoop.png");
					insertedScoop3.node.style.zIndex = 2;
					insertedScoop3.moveTo(545,306);
					insertScoopGIF.destroy();
					checkForDrinkMaking(scoop3Taken, station3Taken, "3");
				}, 450);
				}
			break;
		}
	});

}

function checkForDrinkSpot(drinkType){ // change
	for (var [key, value] of Object.entries(drinksBeingMade)) {
		console.log(value);
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
				return;
				}, 1500)
			break;
		} else if (typeof value == "undefined"){ // if spot is open SPAWNS CUP
			cupsCurrentlyUsed = cupsCurrentlyUsed+1;
			if (drinkType == "LARGE"){
				spawnInCupRequested("LARGE",cupsCurrentlyUsed, key);
			} else if (drinkType == "SMALL") {
				spawnInCupRequested("SMALL",cupsCurrentlyUsed, key);
			} // end if
			break;
		}
	}
}


function checkForDrinkMaking(scoopSlot, drinkSlot, area){ // first arg, name of IMAGE FOR scoop. second arg, cup used
	if (scoopSlot != "" && drinkSlot != false){
		beingBrewedSFX.play();
		window["drip"+area.toString()] = determineLiquidColor(scoopSlot); // change drip according to slot 
		window["drip"+area.toString()].node.style.zIndex = 0.01;
		if (area == "1"){ // changes location according to where it is sent from
			drip1.moveTo(220,475);
			brewingTimer(area, scoopSlot, drip1, drinkSlot); // go to brewing timer to see how long this baby's been cookin
			drinksBeingMade[drinkSlot.numInLine] = new Drink(1, station1Taken, scoopSlot); // CLASS CREATION
		} if (area == "2"){
			drip2.moveTo(570,475);
			brewingTimer(area, scoopSlot, drip2, drinkSlot);
			drinksBeingMade[drinkSlot.numInLine] = new Drink(1, station2Taken, scoopSlot); // CLASS CREATION
		} if (area == "3"){
			drip3.moveTo(900,475);
			brewingTimer(area, scoopSlot, drip3, drinkSlot);
			drinksBeingMade[drinkSlot.numInLine] = new Drink(1, station3Taken, scoopSlot); // CLASS CREATION
		}
		drinkSlot.isBeingBrewed = true;
	} // end if
}






function brewingTimer(area, typeOfDrink, drip, drinkSlot){
	switch(area){
		case "1":
			switchForTimer(200, 190, drip, 1);
			setTimeout(function(){
				if (timerComplete1 == true){ // TADA!!!!!!!!!!!!!!!!!!!!!!!!!!! DRINK IS DONE
					var index = drinkSlot.numInLine
					console.log(typeof drinksBeingMade[index])
					drinksBeingMade[index].onClickEventS3(drinkSlot, "1");
					}
				}, 8600);
			break;
	 	case "2":
			switchForTimer(550, 190, drip, 2);
			setTimeout(function(){
				if (timerComplete2 == true){
					var index = drinkSlot.numInLine
					console.log(typeof drinksBeingMade[index])
					drinksBeingMade[index].onClickEventS3(drinkSlot, "2");
					}
				}, 8600);
			break;
		case "3":
			switchForTimer(880, 190, drip, 3);
			setTimeout(function(){
				if (timerComplete3 == true){ // TADA!!!!!!!!!!!!!!!!!!!!!!!!!!! DRINK IS DONE
					var index = drinkSlot.numInLine
					console.log(typeof drinksBeingMade[index])
					drinksBeingMade[index].onClickEventS3(drinkSlot, "3");
					}
				}, 8600);
			break;
		


 	}
}





function switchForTimer(x, y, drip, numOfTimer){ // REDO THE ENTIRITY OF THIS CODE!!!!
	var runningTimer = 0;
	var timerBEGIN = setInterval(function(){ 
		switch(runningTimer){
			case 1 :
				window["timer"+numOfTimer.toString()].setImage("Images/brewTimer/timer1.png");
				if (currentScreen != 3){window["timer"+numOfTimer.toString()].node.style.zIndex = -1}
				break;
			case 2 :
				window["timer"+numOfTimer.toString()].setImage("Images/brewTimer/timer2.png");
				if (currentScreen != 3){window["timer"+numOfTimer.toString()].node.style.zIndex = -1}
				break;
			case 3 :
				window["timer"+numOfTimer.toString()].setImage("Images/brewTimer/timer3.png");
				if (currentScreen != 3){window["timer"+numOfTimer.toString()].node.style.zIndex = -1}
				break;
			case 4 :
				window["timer"+numOfTimer.toString()].setImage("Images/brewTimer/timer4.png");
				if (currentScreen != 3){window["timer"+numOfTimer.toString()].node.style.zIndex = -1}
				break;
			case 5 :
				window["timer"+numOfTimer.toString()].setImage("Images/brewTimer/timer5.png");
				if (currentScreen != 3){window["timer"+numOfTimer.toString()].node.style.zIndex = -1}
				break;
			case 6 :
				window["timer"+numOfTimer.toString()].setImage("Images/brewTimer/timer6.png");
				if (currentScreen != 3){window["timer"+numOfTimer.toString()].node.style.zIndex = -1}
				break;
			case 7 :
				window["timer"+numOfTimer.toString()].setImage("Images/brewTimer/timer7.png");
				if (currentScreen != 3){window["timer"+numOfTimer.toString()].node.style.zIndex = -1}
				break;
			case 8 : // ding ding ding!!! drink is done
				window["timer"+numOfTimer.toString()].setImage("Images/brewTimer/timer8.png");
				if (currentScreen != 3){window["timer"+numOfTimer.toString()].node.style.zIndex = -1}
				break;
			}
			runningTimer = runningTimer + 0.5;
			if (runningTimer >= 8.5){
				drip.destroy();
				switch(x){
				case 200:
					timerComplete1 = true;
				break;
				case 550:
					timerComplete2 = true;
				break;
				case 880:
					timerComplete3 = true;
				break;
				}

				clearInterval(timerBEGIN);
			}
	}, 500);
}
























function spawnInCupRequested(size, cupsBeingUsed, key4numInLine){
	btn_clickSFX.play(); // play sfx when item is actually added in
	switch(size){
		case "LARGE":
			window["moveable_Lcup"+cupsBeingUsed.toString()] = new sjs.Image("Images/drinkTypeButtons/L_draggable.png");
			window["moveable_Lcup"+cupsBeingUsed.toString()].canBrew = true; // CHECKs if can be cooked
			window["moveable_Lcup"+cupsBeingUsed.toString()].numInLine = key4numInLine.toString(); // where is it in the dict
			window["moveable_Lcup"+cupsBeingUsed.toString()].isBeingBrewed = false;
			window["moveable_Lcup"+cupsBeingUsed.toString()].station = null;
			window["moveable_Lcup"+cupsBeingUsed.toString()].node.style.zIndex = 1;
			window["moveable_Lcup"+cupsBeingUsed.toString()].moveTo(1200,200);
			window["moveable_Lcup"+cupsBeingUsed.toString()].type = "Cup";
			window["moveable_Lcup"+cupsBeingUsed.toString()].draggable();
			window["moveable_Lcup"+cupsBeingUsed.toString()].follow(sjs.mouse);

			switch(cupsBeingUsed){ // for setting name of cup at brewstation onhit
			case 1:
				moveable_Lcup1.variableName = "moveable_Lcup1";
				return moveable_Lcup1;
			break;
			case 2:
				moveable_Lcup2.variableName = "moveable_Lcup2";
				return moveable_Lcup2;
			break;
			case 3:
				moveable_Lcup3.variableName = "moveable_Lcup3";
				return moveable_Lcup3;
			break;
			}
		break; // break "LARGE"
		case "SMALL":
			window["moveable_Scup"+cupsBeingUsed.toString()] = new sjs.Image("Images/drinkTypeButtons/S_draggable.png");
			window["moveable_Scup"+cupsBeingUsed.toString()].canBrew = true; // checks if can be cooked
			window["moveable_Scup"+cupsBeingUsed.toString()].numInLine = key4numInLine.toString(); // where is it in the dict
			window["moveable_Scup"+cupsBeingUsed.toString()].isBeingBrewed = false;
			window["moveable_Scup"+cupsBeingUsed.toString()].node.style.zIndex = 1;
			window["moveable_Scup"+cupsBeingUsed.toString()].moveTo(1200,200);
			window["moveable_Scup"+cupsBeingUsed.toString()].type = "Cup";
			window["moveable_Scup"+cupsBeingUsed.toString()].draggable();
			window["moveable_Scup"+cupsBeingUsed.toString()].follow(sjs.mouse);

			switch(cupsBeingUsed){ // for setting name of cup at brewstation onhit
			case 1:
				moveable_Scup1.variableName = "moveable_Scup1";
				return moveable_Scup1;
			break;
			case 2:
				moveable_Scup2.variableName = "moveable_Scup2";
				return moveable_Scup2;
			break;
			case 3:
				moveable_Scup3.variableName = "moveable_Scup3";
				return moveable_Scup3;
			break;
			}
		break;

	}//end switch
}
























// STAYING


function determineLiquidColor(beansBrewed){ // determines what image should be displayed
	switch(beansBrewed){
		case "Images/drinkTypeButtons/scoops/scoopBattery.png":
			return new sjs.Image("Images/drinkTypeButtons/drip/coffeeDripBattery.png");
		break;
		case "Images/drinkTypeButtons/scoops/scoopLightEST.png":
		case "Images/drinkTypeButtons/scoops/scoopChai.png":
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
		case "Images/drinkTypeButtons/scoops/scoopWhite.png":
		case "Images/drinkTypeButtons/scoops/scoopGreen.png":
			return new sjs.Image("Images/drinkTypeButtons/drip/coffeeDripGreen.png");
		break;
		case "Images/drinkTypeButtons/scoops/scoopElder.png":
			return new sjs.Image("Images/drinkTypeButtons/drip/coffeeDripElder.png");
		break;
	}
}

















/* ENDGAME GOALS

eventually add a garbage can/ something to throw out stuff that allows someone to trash a drink they made
this isnt necessary rn and an extra step so do it later in the process*/