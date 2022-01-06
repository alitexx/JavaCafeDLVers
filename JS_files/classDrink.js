class Drink { // broken in internet explorer

  brewingSlot = 0;
  
  // Brew Station
  drinkType = "";
  cupSize = "";
  isLatte = false;
  points = 0;
  happiness = "";

  //Toping Station
  toppings = [null];

  // Called on init
  constructor(slotNum, drinkItself, drinkType) {
    this.brewingSlot = slotNum;
    this.cupSize = drinkItself.src;
    this.drinkType = drinkType;
  }


  onClickEventS3(drinkItself, area){
  var onClickDrink;
          onClickDrink = drinkItself.onMouseDown(function(){
            // switch based on slotnum eventually
                drinkItself.canBrew = false;
                drinkItself.draggable();
                drinkItself.type = "doneBrewing";
                drinkItself.isBeingBrewed = false;
                drinkItself.station = undefined;
                delete(drinksBeingMade[drinkItself.station]);
                //window["timer"+area]
                window["timer"+area].setImage("Images/brewTimer/timer_null.png");
                window["insertedScoop"+area].destroy();
                window["station"+area+"Taken"] = false;
                window["scoop"+area+"Taken"] = "";
                window["timerComplete"+area] = false;
                onClickDrink = undefined;
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
    }
  }// end addtopping

  addLatteMilk()
  {
  	 this.isLatte = true;
  }

  customerRating(orderForm)
  {
  	// figure out the score based on actual order */
    switch(orderForm){
      case("Images/customerData/spamton_Menu.png"):
        this.happiness = this.GRADING("Images/drinkTypeButtons/scoops/scoopBattery.png","Images/drinkTypeButtons/L_draggable.png", true,[null, 'Whipped Cream', undefined, undefined]);
      // pass a list of his order into another function
      break;
      case "Images/customerData/UG_Menu.png" : // UG
        this.happiness = this.GRADING("Images/drinkTypeButtons/scoops/scoopLighter.png","Images/drinkTypeButtons/L_draggable.png", true,[null,'Sugar Cube', 'Shot of Expresso', undefined]);
      break;
      case "Images/customerData/leo_Menu.png" : // leo
        this.happiness = this.GRADING("Images/drinkTypeButtons/scoops/scoopDarkEST.png","Images/drinkTypeButtons/L_draggable.png", true,[null,'Chocolate Syrup', 'Shot of Expresso', undefined]);
      break;
      case "Images/customerData/robin_Menu.png" : // robin
        this.happiness = this.GRADING("Images/drinkTypeButtons/scoops/scoopGreen.png","Images/drinkTypeButtons/S_draggable.png", false,[null, 'Shot of Vanilla', undefined, undefined]);
      break;
      case "Images/customerData/luigi_Menu.png" : // luigi
        this.happiness = this.GRADING("Images/drinkTypeButtons/scoops/scoopChai.png","Images/drinkTypeButtons/S_draggable.png", true,[null,'Shot of Vanilla', 'Peppermint Candy', undefined]);
      break;
      case "Images/customerData/SG_Menu.png" : // SG
        this.happiness = this.GRADING("Images/drinkTypeButtons/scoops/scoopBattery.png","Images/drinkTypeButtons/L_draggable.png", false,[null, 'Shot of Pumpkin', undefined, undefined]);
      break;
      case "Images/customerData/glamrock_Menu.png" : // glamrock
        this.happiness = this.GRADING("Images/drinkTypeButtons/scoops/scoopDarker.png","Images/drinkTypeButtons/S_draggable.png", true,[null,'Chocolate Syrup', 'Cinnamon', undefined]);
      break;
      case "Images/customerData/gingerbrave_Menu.png" : //gb
        this.happiness = this.GRADING("Images/drinkTypeButtons/scoops/scoopChai.png","Images/drinkTypeButtons/S_draggable.png", false,[null,'Caramel Syrup', 'Cinnamon', undefined]);
      break;
      case "Images/customerData/greg_Menu.png" : // greg
        this.happiness = this.GRADING("Images/drinkTypeButtons/scoops/scoopChamo.png","Images/drinkTypeButtons/S_draggable.png", false,[null, 'Sugar Cube', undefined, undefined]);
      break;
      case "Images/customerData/autumn_Menu.png" : // autumn
        this.happiness = this.GRADING("Images/drinkTypeButtons/scoops/scoopWhite.png","Images/drinkTypeButtons/S_draggable.png", true,[null,'Whipped Cream', 'Shot of Vanilla', 'Cinnamon']);
      break;



    }
      return this.happiness;
  }
  GRADING(flavor,size,latteStatus,toppingsList){
    // first, check flavor
    if (this.drinkType == flavor){
      console.log("the point has been given for flavor");
      this.points = this.points + 15;
    } // no else, i wont be taking points away

    // drink size
    if (this.cupSize == size){
      console.log("the point has been given for cup size");
      this.points = this.points + 15;
    }

    // is latte
    if (this.isLatte == latteStatus){
      console.log("the point has been given for latte");
      this.points = this.points + 15;
    }

    // toppings
    for (const [key, value] of Object.entries(toppingsList)) { // find npc
      if (value == this.toppings[key] && value != null) {
        console.log("the point has been given for "+value);
        this.points = this.points + 10;
      } else if (typeof value == "undefined") {
        this.points = this.points + 10;
      }
    } // end for

    console.log(this.points);
    if (this.points <= 35){
      return ["BAD", "Images/face_Angry.png", 0];
    } else if (this.points > 35 && this.points <= 70){
      return ["OK", "Images/face_Neutral.png", 1];
    } else if (this.points >= 75){ // 75 is perfect
      return ["PERFECT", "Images/face_Happy.png", 2];
    }
}


}
