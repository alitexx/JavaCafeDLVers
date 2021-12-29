// grading screen!!!!!!! given you ye score
var background5; var customerImage5; var finished_drink; var textBbl; var customerRatingDisplayed; var face_Score; var continueBtn;

var customerGRADING; // tells us what the customer thinks!!!!!!
var audioS5 = new Audio("Audio/grading.mp3");
audioS5.loop = true;

function screen5(menuImage, spotToBeDeleted){
	background5 = new sjs.Image("Images/grading_screen.png");
	background5.node.style.zIndex = 3;
	background5.setSize(1600,800);
	background5.center();

	barrier1 = new sjs.Image("Images/mainMenu/DarkBorder.png");
	barrier1.node.style.zIndex = 50;
	barrier1.moveTo(0,-1400);

	barrier2 = new sjs.Image("Images/mainMenu/DarkBorder.png");
	barrier2.node.style.zIndex = 50;
	barrier2.moveTo(0,1400);

	switch(menuImage){
		case "Images/customerData/spamton_Menu.png" : // spamton
			customerImage5 = new sjs.Image("Images/customerData/customer1_flipped.png"); // customer
			finished_drink = new sjs.Image("Images/L_Finished.gif"); // size of their drink
		break;
		case "Images/customerData/UG_Menu.png" : // UG
			customerImage5 = new sjs.Image("Images/customerData/Customer2_flipped.png");
			finished_drink = new sjs.Image("Images/L_Finished.gif");
		break;
		case "Images/customerData/leo_Menu.png" : // leo
			customerImage5 = new sjs.Image("Images/customerData/customer3_flipped.png");
			finished_drink = new sjs.Image("Images/L_Finished.gif");
		break;
		case "Images/customerData/robin_Menu.png" : // robin
			customerImage5 = new sjs.Image("Images/customerData/Customer4.png");
			finished_drink = new sjs.Image("Images/S_Finished.gif");
		break;
		case "Images/customerData/luigi_Menu.png" : // luigi
			customerImage5 = new sjs.Image("Images/customerData/Customer5_flipped.png");
			finished_drink = new sjs.Image("Images/S_Finished.gif");
		break;
		case "Images/customerData/SG_Menu.png" : // SG
			customerImage5 = new sjs.Image("Images/customerData/Customer6_flipped.png");
			finished_drink = new sjs.Image("Images/L_Finished.gif");
		break;
		case "Images/customerData/glamrock_Menu.png" : // glamrock
			customerImage5 = new sjs.Image("Images/customerData/Customer7.png");
			finished_drink = new sjs.Image("Images/S_Finished.gif");
		break;
		case "Images/customerData/gingerbrave_Menu.png" : //gb
			customerImage5 = new sjs.Image("Images/customerData/Customer8.png");
			finished_drink = new sjs.Image("Images/S_Finished.gif");
		break;
		case "Images/customerData/greg_Menu.png" : // greg
			customerImage5 = new sjs.Image("Images/customerData/Customer9_flipped.png");
			finished_drink = new sjs.Image("Images/S_Finished.gif");
		break;
		case "Images/customerData/autumn_Menu.png" : // autumn
			customerImage5 = new sjs.Image("Images/customerData/Customer10_flipped.png");
			finished_drink = new sjs.Image("Images/S_Finished.gif");
		break;
	}
	customerImage5.node.style.zIndex = 4;
	customerImage5.setSize(350,525);
	customerImage5.moveTo(600,275);

	finished_drink.node.style.zIndex = 4;
	finished_drink.moveTo(1100,510);

	textBbl = new sjs.Image("Images/textBbl.gif");
	textBbl.moveTo(50,250);
	textBbl.node.style.zIndex = 4;

	customerRatingDisplayed = new sjs.Text(customerGRADING[0],100,"black");
	customerRatingDisplayed.moveTo(260,325);
	customerRatingDisplayed.node.style.zIndex = 5;
	customerRatingDisplayed.node.style.fontFamily = "Apple Kid";

	switchToDeleteMenu(spotToBeDeleted);


	setTimeout(function(){
		// display image for smile :) or frown >:(
		face_Score = new sjs.Image(customerGRADING[1]);
		face_Score.moveTo (90,295);
		face_Score.node.style.zIndex = 5;

		continueBtn = new sjs.Button("Click To Continue", function (){
			audioS5.pause();
			FINISHEDCUSTOMERS = FINISHEDCUSTOMERS + 1 // add one to the tally of customers completed
			if (FINISHEDCUSTOMERS >= 3 && endlessMode == false){
				hooray.load();
				hooray.play();
				currentScreen = 6;
				transition(5);
				setTimeout(function (){
					evalScreen();
				}, 2990);
			} else {
			setTimeout(function (){
				transition(5);
				overworldBGM.load();
				overworldBGM.play();
				checksForSwitchingScreens(currentScreen,1); // cannot fully delete items in a setTimeout function
				currentScreen = 1;
				screen1();
				canChangeScreens = true;
				able2BTopped = true;
			}, 250);
			}
		});
		continueBtn.node.style.zIndex = 51;
		continueBtn.node.style.fontFamily = "Apple Kid";
		continueBtn.node.style.width = '500px';
		continueBtn.node.style.height = '100px';
		continueBtn.node.style.background = 'LightPink';
		continueBtn.node.style.color = 'MistyRose';
		continueBtn.node.style.fontSize = '75px';
		continueBtn.moveTo(550, 800);


		
		}, 1500);
}


function switchToDeleteMenu(spotToBeDeleted){
	switch(spotToBeDeleted){
		case "numOne":
			menu1 = undefined;
			delete(menu1);
		break;
		case "numTwo":
			menu2 = undefined;
			delete(menu2);
		break;
		case "numThree":
			menu3 = undefined;
			delete(menu3);
		break;
		case "numFour":
			menu4 = undefined;
			delete(menu4);
		break;
		case "numFive":
			menu5 = undefined;
			delete(menu5);
		break;
	}
}