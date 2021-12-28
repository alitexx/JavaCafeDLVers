
// add garbage can here too

// add a global called "usable" that checks if the player can use the button right now
// usable will only change in specific situations, like when they want to submit their menu

function menuBar() {
	var bgBar = new sjs.Image("Images/MenuBar.png");
	bgBar.moveTo(175,0);
	bgBar.type = "screenSelector";
	bgBar.node.style.zIndex = 5;
	var screen1btn = new sjs.Button("Order", function goToScreen1(){
		btn_clickSFX.play();
		if (currentScreen != 1){
		transition(currentScreen); // deletion goes on in here now
		setTimeout(function (){
			checksForSwitchingScreens(currentScreen,1);
			screen1();
		}, 200);
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


	var screen2btn = new sjs.Button("Prep", function goToScreen2(){
		btn_clickSFX.play();
		if (currentScreen != 2){
		transition(currentScreen);
		setTimeout(function (){
			checksForSwitchingScreens(currentScreen,2);
			screen2();
		}, 200);
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

	var screen3btn = new sjs.Button("Brew", function goToScreen3(){
		btn_clickSFX.play();
		if (currentScreen != 3){
		transition(currentScreen);
		setTimeout(function (){
			checksForSwitchingScreens(currentScreen,3);
			screen3();
		}, 200);
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


	var screen4btn = new sjs.Button("Extras", function goToScreen4(){
		btn_clickSFX.play();
		if (currentScreen != 4){
		transition(currentScreen);
		currentScreen = 4;
		setTimeout(function (){
			checksForSwitchingScreens(currentScreen,4);
			screen4();
		}, 200);
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
}


function spawnOrderForm(name){
	switch(name){
	case "Images/customerData/customer1.png":
		spawningInMenu("Images/customerData/spamton_Menu.png");
	break;
	}
}

function spawningInMenu(customerOrderForm){
	var counter = 0
	var menu_num = 0;
	while (counter < 5){
		counter = counter + 1
		var checkingForOpenMenu = window["menu"+counter.toString()]
		if (typeof checkingForOpenMenu == "undefined"){ // if the menu is undefined
			window["menu"+counter.toString()] = new sjs.Image(customerOrderForm);
			window["menu"+counter.toString()].draggable();
			window["menu"+counter.toString()].type = "menu";
			window["menu"+counter.toString()].node.style.zIndex = 100;
			window["menu"+counter.toString()].noBounds = true;
			window["menu"+counter.toString()].setSize(276.5,450.5);
			switch(counter){
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
			}// end switch
			menu_num = counter;
			counter = 10;
		}// end if
	}// end while

	window["menu"+menu_num.toString()].node.addEventListener('mouseup', function(){
		window["menu"+menu_num.toString()].moveTo(25,950);
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
			if (typeof insertedScoop != "undefined"){insertedScoop.node.style.zIndex = -1;}
			if (typeof moveable_Lcup1 != "undefined"){moveable_Lcup1.node.style.zIndex = -1;}
			if (typeof moveable_Lcup2 != "undefined"){moveable_Lcup2.node.style.zIndex = -1;}
			if (typeof moveable_Lcup3 != "undefined"){moveable_Lcup3.node.style.zIndex = -1;}
			if (typeof moveable_Scup1 != "undefined"){moveable_Scup1.node.style.zIndex = -1;}
			if (typeof moveable_Scup2 != "undefined"){moveable_Scup2.node.style.zIndex = -1;}
			if (typeof moveable_Scup3 != "undefined"){moveable_Scup3.node.style.zIndex = -1;}

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
			currentScreen = 1;
			if (window.customerWaiting == true){
				try{
				clickToTakeOrder.node.style.zIndex = 1;
				awaitingOrderCustomer.node.style.zIndex = 1;
				}
				catch{
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
			if (typeof insertedScoop != "undefined"){insertedScoop.node.style.zIndex = 1;}
			if (typeof moveable_Lcup1 != "undefined" && moveable_Lcup1.type != "onScreen4"){moveable_Lcup1.node.style.zIndex = 1;}
			if (typeof moveable_Lcup2 != "undefined" && moveable_Lcup2.type != "onScreen4"){moveable_Lcup2.node.style.zIndex = 1;}
			if (typeof moveable_Lcup3 != "undefined" && moveable_Lcup3.type != "onScreen4"){moveable_Lcup3.node.style.zIndex = 1;}
			if (typeof moveable_Scup1 != "undefined" && moveable_Scup1.type != "onScreen4"){moveable_Scup1.node.style.zIndex = 1;}
			if (typeof moveable_Scup2 != "undefined" && moveable_Scup2.type != "onScreen4"){moveable_Scup2.node.style.zIndex = 1;}
			if (typeof moveable_Scup3 != "undefined" && moveable_Scup3.type != "onScreen4"){moveable_Scup3.node.style.zIndex = 1;}
			if (typeof timerComplete1 != "undefined"){timer1.setImage("Images/brewTimer/timer8.png");}
			if (typeof timerComplete2 != "undefined"){timer2.setImage("Images/brewTimer/timer8.png");}
			if (typeof timerComplete3 != "undefined"){timer3.setImage("Images/brewTimer/timer8.png");}
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

			