var drinksBeingMade = {
	numOne: null, // drink 1
	numTwo: null, // drink 2
	numThree: null // drink 3
};

// BE SURE TO COME BACK HERE TO MAKE SURE TO CLEAR DICTIONARY WHEN DONE
// THATS HOW I'LL BE ABLE TO CONTINUE
var currentScreen = 0
var cupsCurrentlyUsed = 0 // helps check if user made too many

var customersBeingServed = {
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
				// add more customizations, now I should complete other maps so I know
				// what I'm dealing with
			}

}

var DISPLAYED_customer_order = { // IMAGE LINKS FOR EASIER CALLING
	"Spamton": {
				"name": "Spamton",
				"size": "Images/drinkTypeButtons/large_empty.png",
				"drinkType": "Images/drinkTypeButtons/battery_acid.png",
				"latte": "add image for latte y or n here"
			}
}

var NPCstats = null
function findNewCustomer(){ // leaving this code here, USE A SWITCH STATEMENT!!!!!
	switch (Math.round(Math.random(0,1))) { // change num according to new npcs being added
		case 0: // spammy
		// IDEA : Make a running variable? sets different things according to var
			NPCstats = spawnNPC("Spamton", "Images/customerData/customer1.png", ALLcustomerOrders["Spamton"],"Images/customerData/customer1Interract.gif");
			break;
		case 1:
			console.log("used to be 1");
			NPCstats = spawnNPC("Spamton", "Images/customerData/customer1.png", ALLcustomerOrders["Spamton"],"Images/customerData/customer1Interract.gif");
			break;
 		}
	}// end funct


customerWaiting = false; // checks if theres a customer
setInterval(function (){ // customer walking in
	if (customerWaiting == false){
		findNewCustomer();
		// play sfx here for bell chime, GET BELL CHIME!!!
		customerWaiting = true;
		spawningInACustomer(); // made a separate function for finding customer
		} // ends func
}, 15000); // every 15 seconds, initial spawn 2.5 seconds in


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
			awaitingOrderCustomer.node.style.zIndex = 1;
			awaitingOrderCustomer.setSize(412.5,536.25);
			awaitingOrderCustomer.moveTo(1200,370);


			var clickToTakeOrder = new sjs.Image("Images/customerData/newCustomer.gif");
			clickToTakeOrder.node.style.zIndex = 1;
			clickToTakeOrder.moveTo(850,200);

			clickToTakeOrder.onMouseDown(function(){
				awaitingOrderCustomer.destroy();
				clickToTakeOrder.destroy(); // destroy customer graphics

				var takingCustomersOrder = new sjs.Image(NPCstats[1]);
				takingCustomersOrder.node.style.zIndex = 1;
				takingCustomersOrder.setSize(412.5,536.25);
				takingCustomersOrder.moveTo(1200,370);

				var ticketForOrder = new sjs.Image("Images/customerData/menu.png"); // potentially tween in from above?
				ticketForOrder.node.style.zIndex = 10;
				ticketForOrder.setSize(630, 819);
				ticketForOrder.center();

				display_order(DISPLAYED_customer_order["Spamton"]);

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