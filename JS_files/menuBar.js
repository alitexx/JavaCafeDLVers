
// add garbage can here too

// add a global called "usable" that checks if the player can use the button right now
// usable will only change in specific situations, like when they want to submit their menu
var garbage_btn;
var canChangeScreens = true; // makes sure nothing else is happening so no glitches


var bgBar; var screen1btn; var screen2btn; var screen3btn; var screen4btn;

function menuBar() {
	bgBar = new sjs.Image("Images/MenuBar.png");
	bgBar.moveTo(175,0);
	bgBar.type = "screenSelector";
	bgBar.node.style.zIndex = 5;
	screen1btn = new sjs.Button("Order", function goToScreen1(){
		btn_clickSFX.play();
		if (currentScreen != 1 && canChangeScreens == true){
		transition(currentScreen); // deletion goes on in here now
		setTimeout(function (){
			screen1();
			checksForSwitchingScreens(currentScreen,1);
		}, 250);
		}
		});
	screen1btn.node.style.zIndex = 6;
	screen1btn.node.style.fontFamily = "Apple Kid"
	screen1btn.node.style.width = '200px';
	screen1btn.node.style.height = '75px';
	screen1btn.node.style.background = 'LightGreen';
	screen1btn.node.style.color = 'LightYellow';
	screen1btn.node.style.fontSize = '50px';
	screen1btn.type = "screenSelector"
	screen1btn.moveTo(250, 25);


	screen2btn = new sjs.Button("Prep", function goToScreen2(){
		btn_clickSFX.play();
		if (currentScreen != 2 && canChangeScreens == true){
		transition(currentScreen);
		setTimeout(function (){
			screen2();
			checksForSwitchingScreens(currentScreen,2);
		}, 250);
		}
		});
	screen2btn.node.style.zIndex = 6;
	screen2btn.node.style.fontFamily = "Apple Kid"
	screen2btn.node.style.width = '200px';
	screen2btn.node.style.height = '75px';
	screen2btn.node.style.background = 'LightSkyBlue';
	screen2btn.node.style.color = 'LightCyan';
	screen2btn.node.style.fontSize = '50px';
	screen2btn.type = "screenSelector"
	screen2btn.moveTo(550, 25);

	screen3btn = new sjs.Button("Brew", function goToScreen3(){
		btn_clickSFX.play();
		if (currentScreen != 3 && canChangeScreens == true){
		transition(currentScreen);
		setTimeout(function (){
			screen3();
			checksForSwitchingScreens(currentScreen,3);
		}, 250);
		}
		});
	screen3btn.node.style.zIndex = 6;
	screen3btn.node.style.fontFamily = "Apple Kid"
	screen3btn.node.style.width = '200px';
	screen3btn.node.style.height = '75px';
	screen3btn.node.style.background = 'LightCoral';
	screen3btn.node.style.color = 'LightPink';
	screen3btn.node.style.fontSize = '50px';
	screen3btn.type = "screenSelector"
	screen3btn.moveTo(850, 25);


	screen4btn = new sjs.Button("Extras", function goToScreen4(){
		btn_clickSFX.play();
		if (currentScreen != 4 && canChangeScreens == true){
		transition(currentScreen);
		setTimeout(function (){
			screen4();
			checksForSwitchingScreens(currentScreen,4);
		}, 250);
		}
		});
	screen4btn.node.style.zIndex = 6;
	screen4btn.node.style.fontFamily = "Apple Kid"
	screen4btn.node.style.width = '200px';
	screen4btn.node.style.height = '75px';
	screen4btn.node.style.background = 'MediumOrchid';
	screen4btn.node.style.color = 'LavenderBlush';
	screen4btn.node.style.fontSize = '50px';
	screen4btn.type = "screenSelector"
	screen4btn.moveTo(1150, 25);
	

// order holder

	/* notes

	have the menus at the BOTTOM, and you can click them to pull them into view
	THEN, there's a note at the bottom that says "click here to submit" but
	ONLY on the toppings screen. then you submit it and everyone is happy :)
	*/
	garbage_btn = new sjs.Image("Images/garbage.png");
	garbage_btn.moveTo(1475,18);
	garbage_btn.node.style.zIndex = 6;
	garbage_btn.onMouseDown(function(){
		btn_clickSFX.play();
		// a function that lets you click on the item to delete
		if (deleteItem_Running == true){
			deleteItem_Running = false;
			deletebbl.destroy();
			prompt_Text.destroy();
		} else {
			deleteItem();
		} // GO TO GARBAGE_CAN.JS
	});
}


function spawnOrderForm(name){
	switch(name){
	case "Images/customerData/customer1.png":
		spawningInMenu("Images/customerData/spamton_Menu.png");
	break;
	case "Images/customerData/Customer2.png":
		spawningInMenu("Images/customerData/UG_Menu.png");
	break;
	case "Images/customerData/customer3.png":
		spawningInMenu("Images/customerData/leo_Menu.png");
	break;
	case "Images/customerData/Customer4.png":
		spawningInMenu("Images/customerData/robin_Menu.png");
	break;
	case "Images/customerData/Customer5.png":
		spawningInMenu("Images/customerData/luigi_Menu.png");
	break;
	case "Images/customerData/Customer6.png":
		spawningInMenu("Images/customerData/SG_Menu.png");
	break;
	case "Images/customerData/Customer7.png":
		spawningInMenu("Images/customerData/glamrock_Menu.png");
	break;
	case "Images/customerData/Customer8.png":
		spawningInMenu("Images/customerData/gingerbrave_Menu.png");
	break;
	case "Images/customerData/Customer9.png":
		spawningInMenu("Images/customerData/greg_Menu.png");
	break;
	case "Images/customerData/Customer10.png":
		spawningInMenu("Images/customerData/autumn_Menu.png");
	break;
	}
}

function spawningInMenu(customerOrderForm){
	var counter = 0
	var menu_num = 0;
	while (counter < 5){
		counter = counter + 1
		var checkingForOpenMenu = window["menu"+counter.toString()];
		if (typeof checkingForOpenMenu == "undefined"){ // if the menu is undefined
			window["menu"+counter.toString()] = new sjs.Image(customerOrderForm);
			window["menu"+counter.toString()].draggable();
			window["menu"+counter.toString()].type = "menu";
			window["menu"+counter.toString()].node.style.zIndex = 50;
			window["menu"+counter.toString()].noBounds = true;
			window["menu"+counter.toString()].setSize(276.5,450.5);
			switch(counter){
				case 1:
					menu1.moveTo(25,950);
					menu1.menuPos = [25,950];
					menu1.numInLine = "numOne";
				break;
				case 2:
					menu2.moveTo(326.5,950);
					menu2.menuPos = [326.5,950];
					menu2.numInLine = "numTwo";
				break;
				case 3:
					menu3.moveTo(628,950);
					menu3.menuPos = [628,950];
					menu3.numInLine = "numThree";
				break;
				case 4:
					menu4.moveTo(929.5,950);
					menu4.menuPos = [929.5,950];
					menu4.numInLine = "numFour";
				break;
				case 5:
					menu5.moveTo(1231,950);
					menu5.menuPos = [1231,950];
					menu5.numInLine = "numFive";
				break;
			}// end switch
			menu_num = counter;
			counter = 10;
		}// end if
	}// end while

	window["menu"+menu_num.toString()].node.addEventListener('mouseup', function(){
		if (able2BTopped == true){ // this is only false when the menu is moved so im using it here too
		switch(menu_num){
			case 1:
				menu1.moveTo(25,950);
			break;
			case 2:
				menu2.moveTo(326.5,950);
			break;
			case 3:
				menu3.moveTo(628,950);
			break;
			case 4:
				menu4.moveTo(929.5,950);
			break;
			case 5:
				menu5.moveTo(1231,950);
			break;
		}
		}
	});
}// end funct





// WHY IS THIS NOT WORKING????????????????????!!!!!!!!!!!!!!!?????????????????????!!!!!!!!!!!!!!!!!!!!!???????????????????
// IT MAKES NO SENSE!!!!!!!!!!




function checksForSwitchingScreens(leaving, entering){ // EVERYTHING that must be seen when switching from screen a to b
	if (typeof moveable_frother != "undefined"){moveable_frother.destroy();}

	switch(leaving) { // remove things SPAWNED in a location.
		case 1:
			if (typeof clickToTakeOrder != "undefined"){clickToTakeOrder.node.style.zIndex = -1;}
			if (typeof awaitingOrderCustomer != "undefined"){awaitingOrderCustomer.node.style.zIndex = -1;}
		break;
		case 2:
			if (typeof scoopOfBeans != "undefined"){scoopOfBeans.node.style.zIndex = -1;}
		break;

		case 3:
			if (typeof insertedScoop1 != "undefined"){insertedScoop1.node.style.zIndex = -1;}
			if (typeof insertedScoop2 != "undefined"){insertedScoop2.node.style.zIndex = -1;}
			if (typeof insertedScoop3 != "undefined"){insertedScoop3.node.style.zIndex = -1;}
			if (typeof moveable_Lcup1 != "undefined"){moveable_Lcup1.node.style.zIndex = -1;}
			if (typeof moveable_Lcup2 != "undefined"){moveable_Lcup2.node.style.zIndex = -1;}
			if (typeof moveable_Lcup3 != "undefined"){moveable_Lcup3.node.style.zIndex = -1;}
			if (typeof moveable_Scup1 != "undefined"){moveable_Scup1.node.style.zIndex = -1;}
			if (typeof moveable_Scup2 != "undefined"){moveable_Scup2.node.style.zIndex = -1;}
			if (typeof moveable_Scup3 != "undefined"){moveable_Scup3.node.style.zIndex = -1;}
			if (typeof drip1 != "undefined"){drip1.node.style.zIndex = -1;}
			if (typeof drip2 != "undefined"){drip2.node.style.zIndex = -1;}
			if (typeof drip3 != "undefined"){drip3.node.style.zIndex = -1;}

		break;

		case 4:
			if (typeof insertedScoop != "undefined"){insertedScoop.node.style.zIndex = -1;}
			if (typeof moveable_Lcup1 != "undefined"){moveable_Lcup1.node.style.zIndex = -1;}
			if (typeof moveable_Lcup2 != "undefined"){moveable_Lcup2.node.style.zIndex = -1;}
			if (typeof moveable_Lcup3 != "undefined"){moveable_Lcup3.node.style.zIndex = -1;}
			if (typeof moveable_Scup1 != "undefined"){moveable_Scup1.node.style.zIndex = -1;}
			if (typeof moveable_Scup2 != "undefined"){moveable_Scup2.node.style.zIndex = -1;}
			if (typeof moveable_Scup3 != "undefined"){moveable_Scup3.node.style.zIndex = -1;}
		break;

	}

	switch(entering) { // spawn in items needed
		case 1: // incorporate screen 1 better
			window.currentScreen = 1;
			if (window.customerWaiting == true){
				try{
					clickToTakeOrder.node.style.zIndex = 10;
					console.log(awaitingOrderCustomer);
					awaitingOrderCustomer.node.style.zIndex = 10;
				}
				catch{
					console.log("the catch has happened");
					spawningInACustomer(true);
				}
			}
		break;
		case 2:
		currentScreen = 2;
			if (typeof scoopOfBeans != "undefined"){scoopOfBeans.node.style.zIndex = 1;}
		break;
		case 3:
		currentScreen = 3;
			if (typeof drip1 != "undefined"){drip1.node.style.zIndex = 1;}
			if (typeof drip2 != "undefined"){drip2.node.style.zIndex = 1;}
			if (typeof drip3 != "undefined"){drip3.node.style.zIndex = 1;}
			if (typeof insertedScoop1 != "undefined"){insertedScoop1.node.style.zIndex = 2;}
			if (typeof insertedScoop2 != "undefined"){insertedScoop2.node.style.zIndex = 2;}
			if (typeof insertedScoop3 != "undefined"){insertedScoop3.node.style.zIndex = 2;}
			if (typeof moveable_Lcup1 != "undefined" && moveable_Lcup1.type != "onScreen4"){moveable_Lcup1.node.style.zIndex = 2;}
			if (typeof moveable_Lcup2 != "undefined" && moveable_Lcup2.type != "onScreen4"){moveable_Lcup2.node.style.zIndex = 2;}
			if (typeof moveable_Lcup3 != "undefined" && moveable_Lcup3.type != "onScreen4"){moveable_Lcup3.node.style.zIndex = 2;}
			if (typeof moveable_Scup1 != "undefined" && moveable_Scup1.type != "onScreen4"){moveable_Scup1.node.style.zIndex = 2;}
			if (typeof moveable_Scup2 != "undefined" && moveable_Scup2.type != "onScreen4"){moveable_Scup2.node.style.zIndex = 2;}
			if (typeof moveable_Scup3 != "undefined" && moveable_Scup3.type != "onScreen4"){moveable_Scup3.node.style.zIndex = 2;}
		break;
		case 4:
		currentScreen = 4;
			if (typeof moveable_Lcup1 != "undefined" && moveable_Lcup1.type == "onScreen4"){moveable_Lcup1.node.style.zIndex = 1;}
			if (typeof moveable_Lcup2 != "undefined" && moveable_Lcup2.type == "onScreen4"){moveable_Lcup2.node.style.zIndex = 1;}
			if (typeof moveable_Lcup3 != "undefined" && moveable_Lcup3.type == "onScreen4"){moveable_Lcup3.node.style.zIndex = 1;}
			if (typeof moveable_Scup1 != "undefined" && moveable_Scup1.type == "onScreen4"){moveable_Scup1.node.style.zIndex = 1;}
			if (typeof moveable_Scup2 != "undefined" && moveable_Scup2.type == "onScreen4"){moveable_Scup2.node.style.zIndex = 1;}
			if (typeof moveable_Scup3 != "undefined" && moveable_Scup3.type == "onScreen4"){moveable_Scup3.node.style.zIndex = 1;}
		break;
	}	
}
