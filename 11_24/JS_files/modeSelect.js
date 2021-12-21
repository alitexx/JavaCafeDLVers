

// this only holds the data for the mode select screen, NOTHING ELSE. 
var musicCompleted = false; //remember to reset when player leaves
function mainModeSelect() {
// audio


	var menuAudio = new Audio("Audio/3Alt_Menu.ogg");
	// maybe button sfx
	if (musicCompleted == false) {
    	musicCompleted = true;
		menuAudio.play(); // stops from firing 50 times
		menuAudio.loop = true;
  }

		var background = new sjs.Image("Images/MenuBG.png");
		background.center();
		background.type = "modeSelect";
		background.node.style.zIndex = 0;

		var MENUtxt = new sjs.Text("MENU",200,"red");
		MENUtxt.node.style.fontFamily = "International Font of Mystery";
		MENUtxt.type = "modeSelect";
		MENUtxt.moveTo(700,0);

		

		var campaignBtn = new sjs.Button("Campaign", function(){
			transition();
			STARTspawningNPCS();
			setTimeout(function(){
				window.currentScreen = 1
				screen1(); // HEAD TO SCREEN 1
				menuBar();
				// audio change
				menuAudio.pause();
			},250);
			var overworldBGM = new Audio("Audio/4BGM.wav");
			overworldBGM.loop = true;
			overworldBGM.play();
			
		});
		campaignBtn.node.style.fontFamily = "Apple Kid"
		campaignBtn.node.style.width = '300px';
		campaignBtn.node.style.height = '150px';
		campaignBtn.node.style.background = 'LightSeaGreen';
		campaignBtn.node.style.color = 'PaleTurquoise';
		campaignBtn.node.style.fontSize = '100px';
		campaignBtn.center().offset(0, -175);



		var customBtn = new sjs.Button("Custom", function(){
			transition();
			// i'll come back here
			menuAudio.destroy();
			console.log("this has been clicked"); // COME BACK AFTER GAME IS DONE
		});
		customBtn.node.style.fontFamily = "Apple Kid"
		customBtn.node.style.width = '300px';
		customBtn.node.style.height = '150px';
		customBtn.node.style.background = 'LightSeaGreen';
		customBtn.node.style.color = 'PaleTurquoise';
		customBtn.node.style.fontSize = '100px';
		customBtn.center().offset(0, 175);

	
} // end of main
