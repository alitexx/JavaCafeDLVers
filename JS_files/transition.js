



function transition(screenNum){
	document.body.classList.add('fade-out'); // fade out
	switch(screenNum){ // should I make all of the images global? that seems like a waste
		case "opening": // title screen
		screenBeingDestroyed = [background,clouds,cafeIcon,tree1,tree2,barrier1,barrier2,beginTXT,titleJavaCafe];
		break;
		case "mainMenu": // main menu
		screenBeingDestroyed = [backgroundMMS,MENUtxt,campaignBtn,customBtn];
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
	}


	screenBeingDestroyed.forEach(function (item, index) { // deletes the items
		item.destroy();
		item = undefined;
		delete(item);
		});
	setTimeout(function(){ // fade back in
		document.body.classList.remove('fade-out');
	}, 250);
} // end transition


function getSoundAndFadeAudio(audiosnippetId) {

    var sound = document.getElementById(audiosnippetId);

    // Set the point in playback that fadeout begins. This is for a 2 second fade out.
    var fadePoint = sound.duration - 2; 

    var fadeAudio = setInterval(function () {

        // Only fade if past the fade out point or not at zero already
        if ((sound.currentTime >= fadePoint) && (sound.volume != 0.0)) {
            sound.volume -= 0.1;
        }
        // When volume at zero stop all the intervalling
        if (sound.volume === 0.0) {
            clearInterval(fadeAudio);
        }
    }, 200);

}



