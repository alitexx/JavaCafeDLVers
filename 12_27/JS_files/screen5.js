// grading screen!!!!!!! given you ye score
var background5; var customerImage5;

function screen5(menuImage){
	background5 = new sjs.Image("Images/grading_screen.png");
	background5.node.style.zIndex = 3;
	background5.setSize(1600,800);
	background5.center();

	barrier1 = new sjs.Image("Images/mainMenu/DarkBorder.png");
	barrier1.node.style.zIndex = 50;
	barrier1.moveTo(0,-1400);

	barrier2 = new sjs.Image("Images/mainMenu/DarkBorder.png");
	barrier2.node.style.zIndex = 50;
	barrier2.moveTo(0,1400);

	switch(menuImage){
		case "Images/customerData/spamton_Menu.png" :
			customerImage5 = new sjs.Image("Images/customerData/customer1_flipped.png");
		break;
	}
	customerImage5.node.style.zIndex = 4;
	customerImage5.setSize(412.5,536.25);
	customerImage5.moveTo(600,275);
}