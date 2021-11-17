//screen3
var station1Taken = false; // TURN OFF WHEN DRINK IS DONE
var station2Taken = false;
var station3Taken = false;
// globals that help game know where everything is
function screen3() {
	//bg
	var background = new sjs.Image("Images/screen3.png");
	background.type = "Game";
	background.node.style.zIndex = 0;

	var station1 = new sjs.Image("Images/circle.png");
	station1.type = "brewStation"
	station1.moveTo(175,800);
	station1.node.style.zIndex = 0;

	var station2 = new sjs.Image("Images/circle.png");
	station2.type = "brewStation"
	station2.moveTo(525,800);
	station2.node.style.zIndex = 0;

	var station3 = new sjs.Image("Images/circle.png");
	station3.type = "brewStation"
	station3.moveTo(855,800);
	station3.node.style.zIndex = 0;

	var constant_frother = new sjs.Image("Images/Frother.png");
	constant_frother.moveTo(1200,535);
	constant_frother.node.style.zIndex = 0;

	var constant_Lcup = new sjs.Image("Images/drinkTypeButtons/large_empty.png");
	constant_Lcup.type = "Game";
	constant_Lcup.setSize(200,300); // pls adjust sizing
	constant_Lcup.moveTo(1400,150);
	constant_Lcup.node.style.zIndex = 0;

	constant_Lcup.onMouseDown(function(){ // when clicked
		// add on interract for the cup
		checkForDrinkSpot();
	});

	var constant_Scup = new sjs.Image("Images/drinkTypeButtons/small_empty.png");
	constant_Scup.type = "Game";
	constant_Scup.setSize(200,300);
	constant_Scup.moveTo(1200,150);
	constant_Scup.node.style.zIndex = 0;

	sjs.onHit("Cup","brewStation", function(x,y){
		//remember, x == cup y == brewstation
		switch (y) {
			case station1 : // add an if that checks if a spot has been taken
			if (station1Taken == false){
				station1Taken = true;
				x.moveTo(140,400);
				x.unfollow();
				x.undraggable();
				}
			break;
			case station2 :
			if (station2Taken == false){
				station2Taken = true;
				x.moveTo(490,400);
				x.unfollow();
				x.undraggable();
				}
			break;
			case station3 :
			if (station3Taken == false){
				station3Taken = true;
				x.moveTo(790,400);
				x.unfollow();
				x.undraggable();
				}
			break;
		}
	});

}

function checkForDrinkSpot(){ // change
	console.log(Object.entries(drinksBeingMade))
	for (var [key, value] of Object.entries(drinksBeingMade)) {
		if (window.cupsCurrentlyUsed >= 3){ // if 3 or more cups are out
			console.log("NO MORE CUPS! >:(");
			var tooManyPrompt = new sjs.Image("Images/prompt2user.png");
			tooManyPrompt.moveTo(400,425);
			tooManyPrompt.node.style.zIndex = 2;
			var prmpt_Text = new sjs.Text("You can't carry that many drinks!",75,"white");
			prmpt_Text.node.style.zIndex = 2;
			prmpt_Text.moveTo(490,515);
			prmpt_Text.node.style.fontFamily = "Apple Kid";
			setTimeout(function(){
				tooManyPrompt.destroy();
				prmpt_Text.destroy();
				}, 1500)
		// i need to add another break?
		} else if (value == null){ // if spot is open
			window.cupsCurrentlyUsed = window.cupsCurrentlyUsed+1;
			console.log(key);
			window.drinksBeingMade[key] = new Array("LCup");
			var moveable_Lcup1 = new sjs.Image("Images/drinkTypeButtons/large_empty.png");
			moveable_Lcup1.node.style.zIndex = 1;
			moveable_Lcup1.moveTo(1200,200); // eventually change name of cup? not sure if i'll need it-
			moveable_Lcup1.type = "Cup"; //so like moveable_Lcup2 moveable_Lcup3 etc
			moveable_Lcup1.draggable();
			moveable_Lcup1.follow(sjs.mouse);
			break;
		}
	}
}