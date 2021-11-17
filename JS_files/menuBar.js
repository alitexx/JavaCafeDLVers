function menuBar() {
	var bgBar = new sjs.Image("Images/MenuBar.png");
	bgBar.moveTo(175,0);
	bgBar.type = "screenSelector";
	bgBar.node.style.zIndex = 5;
	var screen1btn = new sjs.Button("Order", function(){
		transition();
		screen1();
		window.currentScreen = 1;
		menuBar();
		spawningInACustomer();
		});
	screen1btn.node.style.zIndex = 6;
	screen1btn.node.style.fontFamily = "Apple Kid"
	screen1btn.node.style.width = '200px';
	screen1btn.node.style.height = '75px';
	screen1btn.node.style.background = 'LightGreen';
	screen1btn.node.style.color = 'LightYellow';
	screen1btn.node.style.fontSize = '50px';
	screen1btn.type = "screenSelector"
	screen1btn.moveTo(250, 25);


	var screen2btn = new sjs.Button("Prep", function(){
		transition();
		screen2();
		window.currentScreen = 2;
		menuBar();
		spawningInACustomer();
		});
	screen2btn.node.style.zIndex = 6;
	screen2btn.node.style.fontFamily = "Apple Kid"
	screen2btn.node.style.width = '200px';
	screen2btn.node.style.height = '75px';
	screen2btn.node.style.background = 'LightSkyBlue';
	screen2btn.node.style.color = 'LightCyan';
	screen2btn.node.style.fontSize = '50px';
	screen2btn.type = "screenSelector"
	screen2btn.moveTo(550, 25);

	var screen3btn = new sjs.Button("Brew", function(){
		transition();
		screen3();
		window.currentScreen = 3;
		menuBar();
		spawningInACustomer();
		});
	screen3btn.node.style.zIndex = 6;
	screen3btn.node.style.fontFamily = "Apple Kid"
	screen3btn.node.style.width = '200px';
	screen3btn.node.style.height = '75px';
	screen3btn.node.style.background = 'LightCoral';
	screen3btn.node.style.color = 'LightPink';
	screen3btn.node.style.fontSize = '50px';
	screen3btn.type = "screenSelector"
	screen3btn.moveTo(850, 25);


	var screen4btn = new sjs.Button("Extras", function(){
		transition();
		screen4();
		window.currentScreen = 4;
		menuBar();
		spawningInACustomer();
		});
	screen4btn.node.style.zIndex = 6;
	screen4btn.node.style.fontFamily = "Apple Kid"
	screen4btn.node.style.width = '200px';
	screen4btn.node.style.height = '75px';
	screen4btn.node.style.background = 'MediumOrchid';
	screen4btn.node.style.color = 'LavenderBlush';
	screen4btn.node.style.fontSize = '50px';
	screen4btn.type = "screenSelector"
	screen4btn.moveTo(1150, 25);
	
}