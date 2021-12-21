class Drink { // broken in internet explorer

  brewingSlot = 0;
  
  // Brew Station
  drinkType = "";
  cupSize = "";
  isLatte = false;
  points = 0;

  //Toping Station
  toppings = [null];

  // Called on init
  constructor(slotNum, drinkItself, drinkType) {
    console.log("The class has been created")
    this.brewingSlot = slotNum;
    this.cupSize = drinkItself.src;
    this.drinkType = drinkType;
  }


  onClickEventS3(drinkItself){
  var onClickDrink;
          onClickDrink = drinkItself.onMouseDown(function(){
            // switch based on slotnum eventually
            console.log("drink has been clicked");
                drinkItself.canBrew = false;
                drinkItself.draggable();
                drinkItself.type = "doneBrewing";
                timer1.setImage("Images/brewTimer/timer_null.png");
                insertedScoop.destroy();
                station1Taken = false;
                scoop1Taken = "";
                timerComplete1 = false;
                onClickDrink = null;
          });
  }


  // Helpful Functions
  addTopping(newTopping)
  {
    var valueIsTopping = false;
    for (const [key, value] of Object.entries(this.toppings)) { // still says its undefined??????????????????????????????????????????S
      if (value == newTopping) {
        valueIsTopping = true; // stops the next code from running
        break;
      }
    } // end for
    if (valueIsTopping != true){
      this.toppings.push(newTopping);
      console.log("New topping added :");
      console.log(newTopping);
    }
  }// end addtopping

  addLatteMilk()
  {
  	 this.isLatte = true;
  }

  customerRating(orderForm)
  {
    console.log(this.drinkType)
    console.log(this.cupSize)
    console.log(this.isLatte)
    console.log(this.toppings)
  	// figure out the score based on actual order
    switch(orderForm){
      case("Images/customerData/spamton_Menu.png"):
        GRADING("Images/drinkTypeButtons/battery_acid.png","Images/drinkTypeButtons/L_draggable.png", true,[null, "Whipped Cream"]);
      // pass a list of his order into another function
      break;


    }

  }
}

function GRADING(flavor,size,latteStatus,toppingsList){
  // first, check flavor
  if (this.drinkType == flavor){
    this.points = this.points + 10
  } // no else, i wont be taking points away

  // drink size
  if (this.cupSize == size){ // this is where it gets tricky
    this.points = this.points + 10
  }

  // is latte
  if (this.isLatte == latteStatus){
    this.points = this.points + 10
  }

  // toppings
  if (this.toppings == toppingsList){
    this.points = this.points + 10
  }
}

// this allows the variable in the class to be reassigned to whatever i want