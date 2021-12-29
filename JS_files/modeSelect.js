

// this only holds the data for the mode select screen, NOTHING ELSE. 
var musicCompleted = false; //remember to reset when player leaves
var backgroundMMS;
var MENUtxt;
var campaignBtn;
var customBtn;
var creditsBtn;

var dayCount = 1; // keeps track of how many days you've gone;
var endlessMode = false; // sees if you're playing on endless

var overworldBGM;

function mainModeSelect() {
// audio


	var menuAudio = new Audio("Audio/3Alt_Menu.wav");
	// maybe button sfx
	if (musicCompleted == false) {
    	musicCompleted = null;
		menuAudio.play(); // stops from firing 50 times
		menuAudio.loop = true;
  }

		backgroundMMS = new sjs.Image("Images/mainMenu/MenuBG.png");
		backgroundMMS.center();
		backgroundMMS.type = "modeSelect";
		backgroundMMS.node.style.zIndex = 0;

		MENUtxt = new sjs.Text("MENU",200,"red");
		MENUtxt.node.style.fontFamily = "International Font of Mystery";
		MENUtxt.type = "modeSelect";
		MENUtxt.moveTo(700,0);

	
		campaignBtn = new sjs.Button("Campaign", function(){
			onBeginAudio = null;
			transition("mainMenu");
			STARTspawningNPCS();
			setTimeout(function(){
				window.currentScreen = 1
				NEXTDAY() // start the day
				// audio change
				menuAudio.pause();
				menuAudio = undefined;
			},250);
		});
		campaignBtn.node.style.fontFamily = "Apple Kid"
		campaignBtn.node.style.width = '300px';
		campaignBtn.node.style.height = '150px';
		campaignBtn.node.style.background = 'LightSeaGreen';
		campaignBtn.node.style.color = 'PaleTurquoise';
		campaignBtn.node.style.fontSize = '100px';
		campaignBtn.moveTo(650,250);



		customBtn = new sjs.Button("Endless", function(){ // add a counter in this mode to see how many people you've served
			endlessMode = true;
			onBeginAudio = null;
			transition("mainMenu");
			STARTspawningNPCS();
			setTimeout(function(){
				window.currentScreen = 1
				screen1(); // HEAD TO SCREEN 1
				menuBar();
				// audio change
				menuAudio.pause();
				menuAudio = undefined;
				// INITIAL SPAWN IN OF CUSTOMER WHEN GAME STARTS!!
				findNewCustomer(); // find someone to fill spot
				spawningInACustomer();
			},250);
			overworldBGM = new Audio("Audio/4BGM.wav");
			overworldBGM.loop = true;
			overworldBGM.play();
		});
		customBtn.node.style.fontFamily = "Apple Kid"
		customBtn.node.style.width = '300px';
		customBtn.node.style.height = '150px';
		customBtn.node.style.background = 'LightSeaGreen';
		customBtn.node.style.color = 'PaleTurquoise';
		customBtn.node.style.fontSize = '100px';
		customBtn.moveTo(650,600);

		var creditsOpen = false;

		creditsBtn = new sjs.Button("Credits", function(){
			if (creditsOpen == false){
				creditsOpen = true;
				var creditsBG = new sjs.Image("Images/credits.png");
				creditsBG.moveTo(260,145);
				var textCredits = new sjs.Text("Sorry im working on this text rn just exit",100,"white");
				textCredits.node.style.zIndex = 2;
				textCredits.node.style.fontFamily =  "Apple Kid";
				textCredits.moveTo(500,350);
				var exitBtn = new sjs.Button("X", function(){
					creditsOpen = false;
					creditsBG.destroy();
					textCredits.destroy();
					exitBtn.destroy();
					});
				exitBtn.node.style.fontFamily = "Apple Kid"
				exitBtn.node.style.width = '50px';
				exitBtn.node.style.height = '50px';
				exitBtn.node.style.background = 'black';
				exitBtn.node.style.color = 'red';
				exitBtn.node.style.fontSize = '55px';
				exitBtn.moveTo(1250,175);
	
			}
		});
		creditsBtn.node.style.fontFamily = "Apple Kid"
		creditsBtn.node.style.width = '200px';
		creditsBtn.node.style.height = '50px';
		creditsBtn.node.style.background = 'LightSeaGreen';
		creditsBtn.node.style.color = 'PaleTurquoise';
		creditsBtn.node.style.fontSize = '50px';
		creditsBtn.moveTo(1400,10);
	
} // end of main
function NEXTDAY(){
	var dayDisplay = new sjs.Text(["Day "+dayCount.toString()],200,"white");
	dayDisplay.node.style.zIndex = 1;
	dayDisplay.node.style.fontFamily =  "Apple Kid";
	dayDisplay.moveTo(675,350);
	setTimeout(function(){
		transition(); // num transfered in does nothing
		setTimeout(function(){
			dayDisplay.destroy();
			screen1();
			menuBar();
			findNewCustomer(); // find someone to fill spot
			spawningInACustomer();
			overworldBGM = new Audio("Audio/4BGM.wav"); // maybe add a sfx for the start of a new day?
			overworldBGM.loop = true;
			overworldBGM.play();
		},250);
	},1250);
}

function resetGlobals(){
	canChangeScreens = true;
	scoopOut = false;

	scoop1Taken = "";
	scoop2Taken = "";
	scoop3Taken = "";

	timerComplete1 = false;
	timerComplete2 = false;
	timerComplete3 = false;

	station1Taken = false;
	station2Taken = false;
	station3Taken = false;

	able2BTopped = true;
	isSugarOut = false;
	isCinOut = false;
	isPepperOut = false;
	drinkOnScn4 = undefined;
	delete(drinkOnScn4);

	FINISHEDCUSTOMERS = 0;
	cupsCurrentlyUsed = 0;
	GcustomerRating1 = undefined;
	delete(GcustomerRating1)
	GcustomerRating2 = undefined;
	delete(GcustomerRating2)
	GcustomerRating3 = undefined;
	delete(GcustomerRating3)


	NPCstats = undefined;
	delete(NPCstats);
	customerWaiting = false;
	secondsUntilSpawn = secondsUntilSpawn - 500;

	drinksBeingMade = {
		numOne: undefined, // drink 1 of type classDrinks
		numTwo: undefined, // drink 2 of type classDrinks
		numThree: undefined // drink 3 of type classDrinks
	};

	customersBeingServed = { // customer orders you are carrying
		numOne: undefined,
		numTwo: undefined,
		numThree: undefined,
		numFour: undefined,
		numFive: undefined,
	};
}