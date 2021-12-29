

var timeoutTimer = 250;

function transition(screenNum){
	if (currentScreen == 6 && timeoutTimer > 3000){
		document.body.classList.add('fade-out_FINAL');
		timeoutTimer = 3000
	} else {
		document.body.classList.add('fade-out');
		timeoutTimer = 250
	}
	 // fade out
	switch(screenNum){ // should I make all of the images global? that seems like a waste
		case "opening": // title screen
		screenBeingDestroyed = [background,clouds,cafeIcon,tree1,tree2,barrier1,barrier2,beginTXT,titleJavaCafe];
		break;
		case "mainMenu": // main menu
		screenBeingDestroyed = [backgroundMMS,MENUtxt,campaignBtn,customBtn,creditsBtn];
		break;
		case 1: // screen 1
		screenBeingDestroyed = [background1, player]; // start here
		break;
		case 2: // screen 2
		screenBeingDestroyed = [background2,moveToScreen3,button1_scn2,button2_scn2,button3_scn2,button4_scn2,button5_scn2,button6_scn2,button7_scn2,button8_scn2,button9_scn2,button10_scn2,button11_scn2];
		break;
		case 3: // screen 3
		screenBeingDestroyed = [background3,moveToScreen4,scoopInterract1,scoopInterract2,scoopInterract3,station1,station2,station3,frother,constant_Lcup,constant_Scup,timer1,timer2,timer3];
		break;
		case 4: // screen 4
		screenBeingDestroyed = [background4,moveToEndScreen,turnInMenu,item_whipped,item_cara,item_choco,item_sugarcube,item_peppermint,item_cinnamon,button1_scn4,button2_scn4,button3_scn4,button4_scn4,button5_scn4,button6_scn4];
		break;
		case 5: // finished drinks
		screenBeingDestroyed = [background5,customerImage5,finished_drink,textBbl,customerRatingDisplayed,face_Score,barrier1,barrier2,continueBtn];
		break;
		//case 6: // finished drinks
		//screenBeingDestroyed = [barrier1,barrier2,continueGameBtn,endGameBtn,bgBar,screen1btn,screen2btn,screen3btn,screen4btn,garbage_btn,scoopOfBeans,moveable_frother,moveable_Lcup1,moveable_Lcup2,moveable_Lcup3,moveable_Scup1,moveable_Scup2,moveable_Scup3,insertedScoop1,insertedScoop2,insertedScoop3,drip1,drip2,drip3,gradingPaper,bgFinal,character,customerReview1,customerReview2,customerReview3,finalScore,totalForFinal,smile1,smile2,smile3,menu1,menu2,menu3,menu4,menu5,awaitingOrderCustomer,clickToTakeOrder,newCustomer];
		//break;
	}


	screenBeingDestroyed.forEach(function (item, index) { // deletes the items
		try{ // try and catch here only because of restarting the game
			item.destroy();
			item = undefined;
			delete(item);
		}
		catch{
			item = undefined;
			delete(item);
		}
		});
	setTimeout(function(){ // fade back in
	if (currentScreen == 6 && timeoutTimer > 3000){
		document.body.classList.remove('fade-out_FINAL');
	} else {document.body.classList.remove('fade-out');}
	}, timeoutTimer);
} // end transition


