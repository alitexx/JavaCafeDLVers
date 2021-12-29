
var deleteItem_Running = false; // checks if you are actively deleting something
var deletebbl; var prompt_Text; var cupsCanBeDeleted = true;

function deleteItem(){
	deleteItem_Running = true;
	cupsCanBeDeleted = true;
	if (deleteItem_Running == true){
		deletebbl = new sjs.Image("Images/prompt2user.png");
		deletebbl.moveTo(700,120);
		deletebbl.node.style.zIndex = 20;
		prompt_Text = new sjs.Text("Click an item to throw it away, click the garbage to cancel.",75,"white");
		prompt_Text.moveTo(730,185);
		prompt_Text.node.style.zIndex = 20;
		prompt_Text.node.style.fontFamily = "Apple Kid";

		try{ //screen2 scoop of beans
		scoopOfBeans.node.addEventListener("click", () => { // when you click scoop of beans
			scoopOfBeans.destroy();
			scoopOfBeans = undefined;
			delete(scoopOfBeans);
			scoopOut = false;

			deletebbl.destroy();
			prompt_Text.destroy();
			deleteItem_Running = false;
		});
		} catch{};

		try{ // cups
			deleteCups(moveable_Lcup1);
		} catch{};
		try{ // cups
			deleteCups(moveable_Lcup2);
		} catch{};
		try{ // cups
			deleteCups(moveable_Lcup3);
		} catch{};
		try{ // cups
			deleteCups(moveable_Scup1);
		} catch{};
		try{ // cups
			deleteCups(moveable_Scup2);
		} catch{};
		try{ // cups
			deleteCups(moveable_Scup3);
		} catch{};

	}
}
function deleteCups(cupName){
	cupName.node.addEventListener("click", () => { // when you click scoop of beans
		if (cupsCanBeDeleted == true && cupName.isBeingBrewed == false && canChangeScreens == true){
			cupsCanBeDeleted = false;
			deleteItem_Running = false;
			try{ // delete a class if it exists
				drinksBeingMade[cupName.numInLine] = undefined;
				delete(drinksBeingMade[cupName.numInLine]);
				drinksBeingMade[cupName.numInLine] = undefined;
				if (currentScreen == 4){
					drinkOnScn4 = undefined;
					delete(drinkOnScn4);
				}
				} catch{};

			switch(cupName.station){
				case "station1Taken":
					station1Taken = false;
				break;
				case "station2Taken":
					station2Taken = false;
				break;
				case "station3Taken":
					station3Taken = false;
				break;
			}

			cupName.destroy();
			cupName = undefined;
			delete(cupName);
			cupsCurrentlyUsed = cupsCurrentlyUsed - 1

			deletebbl.destroy();
			prompt_Text.destroy();
		}
	});
}