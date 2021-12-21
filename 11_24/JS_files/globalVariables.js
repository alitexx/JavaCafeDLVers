var drinksBeingMade = {
	numOne: null, // drink 1
	numTwo: null, // drink 2
	numThree: null // drink 3
};
// BE SURE TO COME BACK HERE TO MAKE SURE TO CLEAR DICTIONARY WHEN DONE
// THATS HOW I'LL BE ABLE TO CONTINUE

var currentScreen = 0 // keeps track of streen player is currently on
var cupsCurrentlyUsed = 0 // helps check if user made too many

var customersBeingServed = { // customer orders you are carrying
	numOne: null,
	numTwo: null,
	numThree: null,
	numFour: null,
	numFive: null,
};

var ALLcustomerOrders = {
	"Spamton": {
				size: "Large",
				drinkType: "Battery_Acid",
				latte: "yes"
				// add more customizations
			}

}

var DISPLAYED_customer_order = { // IMAGE LINKS FOR EASIER CALLING
	"Images/customerData/customer1.png": {
				"name": "Spamton",
				"size": "Images/drinkTypeButtons/large_empty.png",
				"drinkType": "Images/drinkTypeButtons/battery_acid.png",
				"latte": "Images/drinkTypeButtons/FrotherYES.png",
				"toppings" : ["Images/screen4Items/bottle_Whipped.png"]
				// i made it a list bc other toppings will be in a list
			}
}

var NPCstats = null // current npc waiting

function findNewCustomer(){ // leaving this code here, USE A SWITCH STATEMENT!!!!!
	switch (Math.round(Math.random(0,1))) { // change num according to new npcs being added
		case 0: // spammy
		// spamton still spawns MANY TIMES so have it cut it out
			NPCstats = spawnNPC("Spamton", "Images/customerData/customer1.png", ALLcustomerOrders["Spamton"],"Images/customerData/customer1Interract.gif");
			break;
		case 1:
			console.log("used to be 1");
			NPCstats = spawnNPC("Spamton", "Images/customerData/customer1.png", ALLcustomerOrders["Spamton"],"Images/customerData/customer1Interract.gif");
			break;
 		}
	}// end funct


customerWaiting = false; // checks if theres a customer

function STARTspawningNPCS(){
	setInterval(function (){
		if (customerWaiting == false){
			findNewCustomer(); // find someone to fill spot
			// play sfx here for bell chime, GET BELL CHIME!!!
			customerWaiting = true;
			spawningInACustomer();
			} // ends func
	}, 10000); // every 10 seconds, initial spawn 2.5 seconds in
} // ends start spawning npcs funct



function spawningInACustomer(){ // NEED ANOTHER CHECK HERE, CHECK IF SOMEONE IS HERE!

		if (window.currentScreen != 1){
			//display bubble near orders
			var newCustomer = new sjs.Image("Images/customerData/newCustomer.gif");
			newCustomer.node.style.zIndex = 10;
			newCustomer.setSize(100,100);
			newCustomer.moveTo(175,10);
		}
		if (window.currentScreen == 1){
			var awaitingOrderCustomer = new sjs.Image(NPCstats[0]);
			awaitingOrderCustomer.node.style.zIndex = 0;
			awaitingOrderCustomer.setSize(412.5,536.25);
			awaitingOrderCustomer.moveTo(1200,370);


			var clickToTakeOrder = new sjs.Image("Images/customerData/newCustomer.gif");
			clickToTakeOrder.node.style.zIndex = 0;
			clickToTakeOrder.moveTo(850,200);

			clickToTakeOrder.onMouseDown(function(){
				awaitingOrderCustomer.destroy();
				clickToTakeOrder.destroy(); // destroy customer graphics

				var takingCustomersOrder = new sjs.Image(NPCstats[1]);
				takingCustomersOrder.node.style.zIndex = 0;
				takingCustomersOrder.setSize(412.5,536.25);
				takingCustomersOrder.moveTo(1200,370);

				var ticketForOrder = new sjs.Image("Images/customerData/menu.png"); // potentially tween in from above?
				ticketForOrder.node.style.zIndex = 10;
				ticketForOrder.setSize(630, 819);
				ticketForOrder.center();

				display_order(DISPLAYED_customer_order[NPCstats[0]]);

				customerWaiting = false; // make sure this executes LAST
				// if timed right, customer waiting will execute before order is done.
				// make sure to fix this in the final draft
				})// end mouse down
			} // ends if
		} // ends func



function spawnNPC(customerComingIn, imageForspawn, customer_order, talking_gif){ // add completed order when I'm done with it
	var slotOpen = 0
	var customerIsAlreadyHere = false
	for (const [key, value] of Object.entries(customersBeingServed)) { // find npc
		if (value == customerComingIn) {
			customerIsAlreadyHere = true;
			console.log("he is already here");
			break;
			}
		} // end for
		if (customerIsAlreadyHere == false){
			for (const [key, value] of Object.entries(customersBeingServed)) { // checks if customer picked is here
				if (value == null){
					slotOpen = key; //assign the first open slot to spamton
					break;
				} else {
					slotOpen = 0;
				}
				}// end for
			}
			
				//set spamton as first null
			if (slotOpen != 0) {
				console.log("yayyyy");
					customersBeingServed[slotOpen] = "Spamton"; // sets null as spamton
					
				}

			return [imageForspawn, talking_gif];
} // end function


function display_order(customerImages){
	if (customerImages["name"] == "Spamton") { // this is spamton's order
		var cupSize = new sjs.Image(customerImages["size"]);

// continue making spamtons order here


	}
}