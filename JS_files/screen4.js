// click the menu to confirm sending of drink, can be done at any time. maybe put a button on it

var background4;var moveToEndScreen;var turnInMenu;var item_whipped;var item_cara;var item_choco;var item_sugarcube;var item_peppermint;var item_cinnamon;var button1_scn4;var button2_scn4;var button3_scn4; var button4_scn4; var button5_scn4; var button6_scn4; var infoBlock;

var isSugarOut = false;
var isCinOut = false;
var isPepperOut = false;

var drinkOnScn4;
var able2BTopped = true; // the true/false that checks if you can actively put toppings on a drink


function screen4() {

	background4 = new sjs.Image("Images/screen4.png");
	background4.node.style.zIndex = 0;

	moveToEndScreen = new sjs.Image("Images/moveDrinkParts/moveToFinish.png");
	moveToEndScreen.moveTo(1500,900);
	moveToEndScreen.node.style.zIndex = 0;

	turnInMenu = new sjs.Image("Images/customerData/menu_Holder.png");
	turnInMenu.moveTo(1500,775);
	turnInMenu.type = "turnInMenu";
	turnInMenu.node.style.zIndex = 0;

	infoBlock = new sjs.Image("Images/screen4Items/INFO.gif");
	infoBlock.moveTo(1100,420);

	infoBlock.onMouseDown(function(){
		var infoScrn = new sjs.Image("Images/screen4Items/INFO.png");
		infoScrn.node.style.zIndex = 10;
		infoScrn.moveTo(400,350);
		var warningTxt = new sjs.Text("Be sure to put toppings on <br>in the correct order!",90,"DeepPink");
		warningTxt.node.style.zIndex = 10;
		warningTxt.moveTo(435,450);
		warningTxt.node.style.fontFamily = "Apple Kid";
		setTimeout(function (){
			infoScrn.destroy();
			warningTxt.destroy();
		}, 2500);

	})
	


	sjs.onHit("menu", "turnInMenu", function(x,y){
		try{drinkOnScn4.moveTo(1000,500);} // check to see if a drink is present
		catch{				
			x.moveTo(x.menuPos[0],x.menuPos[1]);
			var makeSomething = new sjs.Image("Images/prompt2user.png");
			makeSomething.moveTo(400,425);
			makeSomething.node.style.zIndex = 2;
			var prmpt_Text2 = new sjs.Text("You need to make a drink first!",75,"white");
			prmpt_Text2.node.style.zIndex = 2;
			prmpt_Text2.moveTo(490,515);
			prmpt_Text2.node.style.fontFamily = "Apple Kid";
			setTimeout(function(){
				makeSomething.destroy();
				prmpt_Text2.destroy();
				return;
				}, 1500)
			return;
		}
		canChangeScreens = false;
		able2BTopped = false;

		x.setSize(466,758); // move image
		x.moveTo(220,200);
		x.undraggable();
		x.unfollow();

		item_whipped.undraggable();
		item_cara.undraggable();
		item_choco.undraggable();

		// are you sure?

		var areYouSure = new sjs.Image("Images/prompt2user.png");
		areYouSure.moveTo(700,120);
		areYouSure.node.style.zIndex = 20;
		var prmpt_Text = new sjs.Text("Are you sure you want to submit?",80,"white");
		prmpt_Text.moveTo(755,200);
		prmpt_Text.node.style.zIndex = 20;
		prmpt_Text.node.style.fontFamily = "Apple Kid";
		var menuImage = x

		var NO = new sjs.Image("Images/NO.png");
		NO.moveTo(1300,395);
		NO.node.style.zIndex = 10;

		NO.onMouseDown(function(){
			able2BTopped = true;
			canChangeScreens = true;

			item_whipped.draggable();
			item_cara.draggable();
			item_choco.draggable();

			menuImage.setSize(276.5,450.5);
			menuImage.moveTo(menuImage.menuPos[0],menuImage.menuPos[1]); // add something to move it back to original placing
			NO.destroy();
			YES.destroy();
			areYouSure.destroy();
			prmpt_Text.destroy();
			x.draggable();
			drinkOnScn4.moveTo(645,470);
		})

		var YES = new sjs.Image("Images/YES.png");
		YES.moveTo(750,390);
		YES.node.style.zIndex = 10;

		YES.onMouseDown(function(){
			//																getSoundAndFadeAudio(overworldBGM); // TESTING THIS
			overworldBGM.pause();
			audioS5.load();
			audioS5.play();

			customersBeingServed[x.numInLine] = undefined; // delete their spot in line
			delete(customersBeingServed[x.numInLine])

			x.destroy();
			x = undefined;
			delete(x);

			YES.destroy();
			NO.destroy();
			areYouSure.destroy();
			prmpt_Text.destroy();

			currentScreen = 5;

			customerGRADING = drinksBeingMade[drinkOnScn4.numInLine].customerRating(menuImage.src);
			if (GcustomerRating1 == undefined){GcustomerRating1 = customerGRADING
			} else if (GcustomerRating2 == undefined) {GcustomerRating2 = customerGRADING
			} else if (GcustomerRating3 == undefined){GcustomerRating3 = customerGRADING}
			transition(4);

			drinksBeingMade[drinkOnScn4.numInLine] = undefined;
			delete(drinksBeingMade[drinkOnScn4.numInLine]); // fully delete the class

			drinkOnScn4.destroy();
			drinkOnScn4 = undefined;
			delete(drinkOnScn4);

			cupsCurrentlyUsed = cupsCurrentlyUsed - 1;
			setTimeout(function (){
				checksForSwitchingScreens(currentScreen,5);
				currentScreen = 5;
				screen5(menuImage.src, menuImage.numInLine);
				canChangeScreens = true;
				menuImage.destroy();
			}, 250);
		})
		
	})

	item_whipped = new sjs.Image("Images/screen4Items/bottle_whipped.png");
	item_whipped.type = "bottle";
	item_whipped.moveTo(0,195);
	item_whipped.draggable();

	item_whipped.node.addEventListener('mouseup', function(){
		item_whipped.moveTo(0,195);
	});


	item_cara = new sjs.Image("Images/screen4Items/bottle_Cara.png");
	item_cara.type = "bottle";
	item_cara.moveTo(150,195);
	item_cara.draggable();

	item_cara.node.addEventListener('mouseup', function(){
		item_cara.moveTo(150,195);
	});

	item_choco = new sjs.Image("Images/screen4Items/bottle_Choco.png");
	item_choco.type = "bottle";
	item_choco.moveTo(1500,195);
	item_choco.draggable();

	item_choco.node.addEventListener('mouseup', function(){
		item_choco.moveTo(1500,195);
	});

	item_sugarcube = new sjs.Image("Images/screen4Items/sugarcubes.png");
	item_sugarcube.moveTo(0,600);
	item_sugarcube.onMouseDown(function(){
		createT_ITEM("Sugar Cube", "Images/screen4Items/sugarcube_Single.png", drinkOnScn4, isSugarOut); // passes in state of globals
	});

	item_peppermint = new sjs.Image("Images/screen4Items/phys_peppermint.png");
	item_peppermint.moveTo(0,800);
	item_peppermint.onMouseDown(function(){
		createT_ITEM("Peppermint Candy", "Images/screen4Items/peppermint_Single.png", drinkOnScn4, isPepperOut); // passes in state of globals
	});

	item_cinnamon = new sjs.Image("Images/screen4Items/cinnamon.png");
	item_cinnamon.moveTo(1200,600);
	item_cinnamon.onMouseDown(function(){
		createT_ITEM("Cinnamon", "Images/screen4Items/cinnamon_Single.png", drinkOnScn4, isCinOut); // passes in state of globals
	});

	button1_scn4 = new sjs.Image("Images/screen4Items/vanilla.png");
	button1_scn4.moveTo(390,230);

	button1_scn4.onMouseDown(function(){
		createDRIP("Shot of Vanilla", "Images/screen4Items/vanilla_drip.png", drinkOnScn4);
	});

	button2_scn4 = new sjs.Image("Images/screen4Items/pumpkin.png");
	button2_scn4.moveTo(530,230);

	button2_scn4.onMouseDown(function(){
		createDRIP("Shot of Pumpkin", "Images/screen4Items/pumpkin_drip.png", drinkOnScn4);
	});

	button3_scn4 = new sjs.Image("Images/screen4Items/chocolate.png");
	button3_scn4.moveTo(670,230);

	button3_scn4.onMouseDown(function(){
		createDRIP("Shot of Chocolate", "Images/screen4Items/chocolate_drip.png", drinkOnScn4);
	});

	button4_scn4 = new sjs.Image("Images/screen4Items/caramel.png");
	button4_scn4.moveTo(810,230);

	button4_scn4.onMouseDown(function(){
		createDRIP("Shot of Caramel", "Images/screen4Items/caramel_drip.png", drinkOnScn4);
	});

	button5_scn4 = new sjs.Image("Images/screen4Items/peppermint.png");
	button5_scn4.moveTo(950,230);

	button5_scn4.onMouseDown(function(){
		createDRIP("Shot of Peppermint", "Images/screen4Items/peppermint_drip.gif", drinkOnScn4);
	});

	button6_scn4 = new sjs.Image("Images/screen4Items/expresso.png");
	button6_scn4.moveTo(1090,230);

	button6_scn4.onMouseDown(function(){
		createDRIP("Shot of Expresso", "Images/screen4Items/expresso_drip.png", drinkOnScn4);
	});

	sjs.onHit("bottle", "onScreen4", function(item, cup){
		item.undraggable();
		item.moveTo(0,0);
		var spraying_SFX = new Audio("Audio/whipped_creamSFX.wav");
		spraying_SFX.play();
		var inUseImage;
		switch(item.src){
			case "Images/screen4Items/bottle_whipped.png": // whipped cream
				drinksBeingMade[cup.numInLine].addTopping("Whipped Cream");
				inUseImage = new sjs.Image("Images/screen4Items/whippedCream_pouring.png");
				item.moveTo(0,195);
			break;
			case "Images/screen4Items/bottle_Cara.png": // caramel
				drinksBeingMade[cup.numInLine].addTopping("Caramel Syrup");
				inUseImage = new sjs.Image("Images/screen4Items/cara_pouring.png");
				item.moveTo(150,195);
			break;
			case "Images/screen4Items/bottle_Choco.png": // chocolate
				drinksBeingMade[cup.numInLine].addTopping("Chocolate Syrup");
				inUseImage = new sjs.Image("Images/screen4Items/chocolate_pouring.png");
				item.moveTo(1500,195);
			break;
		}
		inUseImage.moveTo(425,225);
		setTimeout(function(){
			inUseImage.destroy();
			spraying_SFX = null;
			item.draggable;
			}, 1500)
	})
}

function createDRIP(shotAdded, imageforDRIP, drinkOnScn4){
		if (typeof drinkOnScn4 != "undefined" && able2BTopped == true){ // checks if there actually a cup here
			canChangeScreens = false;
			drinksBeingMade[drinkOnScn4.numInLine].addTopping(shotAdded);
			var drip = new sjs.Image(imageforDRIP);
			drip.moveTo(749,429.5);
			drip.node.style.zIndex = 0.5;
			var pouring = new Audio("Audio/screen4Pouring.wav");
			pouring.play();
			setTimeout(function (){
				canChangeScreens = true;
				drip.destroy();
				pouring = null;
			}, 2000);
		}
}

function createT_ITEM(itemClicked, imageforITEM, drinkOnScn4, checkIf1IsOut){
		if (typeof drinkOnScn4 != "undefined" && checkIf1IsOut == false && able2BTopped == true){ // checks if there actually a cup here
			checkIf1IsOut = true;
			var single = new sjs.Image(imageforITEM);
			single.moveTo(sjs.mouse.x,sjs.mouse.y);
			single.node.style.zIndex = 0.5;
			single.draggable();
			single.follow(sjs.mouse);
			single.type = "single";
			sjs.onHit("single", "onScreen4", function(x,y){ // when item hits drink
				single.destroy();
				var ploop = new Audio("Audio/ploop.wav");
				ploop.play();
				drinksBeingMade[drinkOnScn4.numInLine].addTopping(itemClicked);
				// add a wait and destroy ploop
				setTimeout(function(){ploop = null; checkIf1IsOut = false;}, 200);
			})
			single.node.addEventListener('mouseup', function(){
				single.destroy();
				checkIf1IsOut = false;
			});
		}
}