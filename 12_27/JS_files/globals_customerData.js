var drinksBeingMade = {
	numOne: null, // drink 1 of type classDrinks
	numTwo: null, // drink 2 of type classDrinks
	numThree: null // drink 3 of type classDrinks
};


// BE SURE TO COME BACK HERE TO MAKE SURE TO CLEAR DICTIONARY WHEN DONE
// THATS HOW I'LL BE ABLE TO CONTINUE

var currentScreen = 0; // keeps track of streen player is currently on
var cupsCurrentlyUsed = 0; // helps check if user made too many

var menu1;
var menu2;
var menu3;
var menu4;
var menu5;

var awaitingOrderCustomer;
var clickToTakeOrder;

var doorbell = new Audio("Audio/doorbellSFX.wav");
var btn_clickSFX = new Audio("Audio/button_click.wav");


var customersBeingServed = { // customer orders you are carrying
	numOne: null,
	numTwo: null,
	numThree: null,
	numFour: null,
	numFive: null,
};

/*var ALLcustomerOrders = {
	"Spamton": {
				size: "Large",
				drinkType: "Battery_Acid",
				latte: "yes",
				toppings: "whipped"
				// add more customizations
			}
	"UG": {}

}*/ // i dont think this is needed anymore

var DISPLAYED_customer_order = { // IMAGE LINKS FOR EASIER CALLING
	"Images/customerData/customer1.png": {
				"name": "Spamton",
				"size": "Images/drinkTypeButtons/large_empty.png",
				"drinkType": "Images/drinkTypeButtons/battery_acid.png",
				"latte": "Images/drinkTypeButtons/FrotherYES.png",
				"toppings" : [null,"Images/screen4Items/whipped_btn.png"]
				// i made it a list bc other toppings will be in a list
			},
	"Images/customerData/Customer2.png": { // WORK ON DISPLAYING A MENU FOR UG
		"name": "UncleGrandpa",
		"size": "Images/drinkTypeButtons/large_empty.png",
		"drinkType": "Images/drinkTypeButtons/medium_roast.png",
		"latte": "Images/drinkTypeButtons/FrotherYES.png",
		"toppings" : ["Images/screen4Items/sugarcubes_Icon.png","Images/screen4Items/expresso.png"]

	}
}

var NPCstats = null // current npc waiting

function findNewCustomer(){ // FINDS A NEW CUSTOMER TO BE SPAWNED, DOESNT DO ANY OF THE SPAWNING
	switch (Math.round(Math.random(0,1))) { // change num according to new npcs being added
		case 0: // spammy
		// spamton still spawns MANY TIMES so have it cut it out
			NPCstats = spawnNPC("Spamton", "Images/customerData/customer1.png","Images/customerData/customer1Interract.gif");
			break;
		case 1: // UG
			NPCstats = spawnNPC("UncleGrandpa", "Images/customerData/Customer2.png","Images/customerData/Customer2Interract.gif");
			break;
 		}
	}// end funct


var customerWaiting = false; // checks if theres a customer
var secondsUntilSpawn = 5000; // changes throughout the game, made it fast for testing



function STARTspawningNPCS(){ // THE LOOP OF SPAWNING CUSTOMERS
	setInterval(function (){
		if (customerWaiting == false){
			findNewCustomer(); // find someone to fill spot
			// play sfx here for bell chime, GET BELL CHIME!!
			if (NPCstats != null){
			spawningInACustomer();
				}
			} // ends func
	}, secondsUntilSpawn); // every 5 seconds, initial spawn 2.5 seconds in
} // ends start spawning npcs funct

var newCustomer; // test

function spawningInACustomer(exception){ // ACTUALLY SPAWNS THE GRAPHICS

		if (window.currentScreen != 1 && typeof newCustomer == "undefined"){
			//display bubble near orders
			newCustomer = new sjs.Image("Images/customerData/newCustomer.gif");
			newCustomer.node.style.zIndex = 10;
			newCustomer.setSize(100,100);
			newCustomer.moveTo(175,10);
		}
		if (window.currentScreen == 1){
			awaitingOrderCustomer = new sjs.Image(NPCstats[0]);
			awaitingOrderCustomer.node.style.zIndex = 1;
			awaitingOrderCustomer.setSize(412.5,536.25);
			awaitingOrderCustomer.moveTo(1200,370);
			console.log(awaitingOrderCustomer);


			clickToTakeOrder = new sjs.Image("Images/customerData/newCustomer.gif");
			clickToTakeOrder.node.style.zIndex = 1;
			clickToTakeOrder.moveTo(850,200);

			clickToTakeOrder.onMouseDown(function(){
				awaitingOrderCustomer.destroy();
				clickToTakeOrder.destroy(); // destroy customer graphics

				var takingCustomersOrder = new sjs.Image(NPCstats[1]);
				takingCustomersOrder.node.style.zIndex = 0;
				takingCustomersOrder.setSize(412.5,536.25);
				takingCustomersOrder.moveTo(1200,370);

				var ticketForOrder = new sjs.Image("Images/customerData/menu.png"); // potential tween
				ticketForOrder.node.style.zIndex = 6;
				ticketForOrder.moveTo(520,70);

				var checkForContinue = display_order(DISPLAYED_customer_order[NPCstats[0]]);
				setTimeout(function(){
					customerWaiting = false;
					ticketForOrder.destroy();
					takingCustomersOrder.destroy();
					spawnOrderForm(NPCstats[0])
				if (typeof newCustomer != "undefined"){ // destroys graphics
					newCustomer.destroy();
				}
					}, 3500);// end timeout
				})// end mouse down
			} // ends if
		} // ends func



function spawnNPC(customerComingIn, imageForspawn, talking_gif){ // CHECKS IF SOMEONE CAN BE SPAWNED, THEN RETURNS VALUE TO SPAWN THEM
	var slotOpen = 0
	for (const [key, value] of Object.entries(customersBeingServed)) { // find npc
		if (value == customerComingIn) {return null;}
		} // end for
		for (const [key, value] of Object.entries(customersBeingServed)) { // checks if customer picked is here
			if (value == null){
				slotOpen = key; //assign the first open slot to spamton
				break;
			} else {slotOpen = 0;}
			}// end for
			
				//set spamton as first null
			if (slotOpen != 0) {
					customersBeingServed[slotOpen] = customerComingIn; // sets null as their name
					customerWaiting = true; // someone is here
					doorbell.play();
				}

			return [imageForspawn, talking_gif];
} // end function


function display_order(customerImages){ // DISPLAYS ORDER WHEN THEY PLAYER WANTS TO TAKE THEIR ORDER
	var writingAudio = new Audio("Audio/5WritingSFX.wav");
	writingAudio.play();
	var cupSize; var frother; var flavor;
	var topping0; var topping1; var topping2;
	// make sure they can be destroyed in the end
	setTimeout(function(){
			cupSize = new sjs.Image(customerImages["size"]);
			cupSize.node.style.zIndex = 6;
			cupSize.setSize(200,300);
			cupSize.moveTo(550,100);
		}, 200);

		setTimeout(function(){
			frother = new sjs.Image(customerImages["latte"]);
			frother.setSize(250,250);
			frother.node.style.zIndex = 6;
			frother.moveTo(550,400);
		}, 1250);

		setTimeout(function(){
			flavor = new sjs.Image(customerImages["drinkType"]);
			flavor.setSize(175,175);
			flavor.node.style.zIndex = 6;
			flavor.moveTo(860,185);
		}, 750);


 		var toppingslist = customerImages["toppings"];
 		if (toppingslist[0] != null){
 			setTimeout(function(){
				var topping0 = new sjs.Image(toppingslist[0]);
				topping0.setSize(150,150);
				topping0.node.style.zIndex = 6;
				topping0.moveTo(570,685);
				setTimeout(function(){
					topping0.destroy();
				}, 1750);
			}, 1750);
		} if (toppingslist[1] != null){
			setTimeout(function(){
				var topping1 = new sjs.Image(toppingslist[1]);
				topping1.setSize(150,150);
				topping1.node.style.zIndex = 6;
				topping1.moveTo(725,685);
				setTimeout(function(){
					topping1.destroy();
				}, 1250);
			}, 2250);
		} if (toppingslist[2] != null){
			setTimeout(function(){
				var topping2 = new sjs.Image(toppingslist[2]); // make new image for all bottle
				topping2.setSize(150,150);
				topping2.node.style.zIndex = 6;
				topping2.moveTo(880,685);
				setTimeout(function(){
					topping2.destroy();
				}, 750);
			}, 2750);
		}
	var returnValue = setTimeout(function(){
		cupSize.destroy();
		frother.destroy();
		flavor.destroy();
	}, 3500); // remember to crop the writing to 3 seconds
}