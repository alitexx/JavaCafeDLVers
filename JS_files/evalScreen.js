
var gradingPaper; var bgFinal; var character; var customerReview1; var customerReview2; var customerReview3; var finalScore; var totalForFinal = 0;
var smile1; var smile2; var smile3;

var hooray = new Audio("Audio/day_complete.mp3");

function evalScreen(){
	hooray.play();

	var resultsMusic = new Audio("Audio/6results.mp3");
	setTimeout(function(){
		hooray.pause();
		resultsMusic.play();
		resultsMusic.loop = true;
	}, 3550);

	bgFinal = new sjs.Image("Images/final_Eval_Screen.png");
	bgFinal.node.style.zIndex = 20;
	bgFinal.center();

	barrier1 = new sjs.Image("Images/mainMenu/DarkBorder.png");
	barrier1.node.style.zIndex = 30;
	barrier1.moveTo(0,-1000);

	barrier2 = new sjs.Image("Images/mainMenu/DarkBorder.png");
	barrier2.node.style.zIndex = 30;
	barrier2.moveTo(0,1000);

	gradingPaper = new sjs.Image("Images/gradingMenu.png");
	gradingPaper.moveTo(810,90);
	gradingPaper.node.style.zIndex = 40;

	character = new sjs.Image("Images/player_Grading.png");
	character.moveTo(100,380);
	character.node.style.zIndex = 20;

	continueGameBtn = new sjs.Button("Next Day", function (){ // the next level
	});

	continueGameBtn.node.style.zIndex = 50;
	continueGameBtn.node.style.fontFamily = "Apple Kid";
	continueGameBtn.node.style.width = '300px';
	continueGameBtn.node.style.height = '100px';
	continueGameBtn.node.style.background = 'YellowGreen'; // make it green
	continueGameBtn.node.style.color = 'GreenYellow';
	continueGameBtn.node.style.fontSize = '75px';
	continueGameBtn.moveTo(1000, 800);

	endGameBtn = new sjs.Button("End Game", function (){ 
		window.location.reload(); // just reload page when this occurs
	});

	endGameBtn.node.style.zIndex = 5;
	endGameBtn.node.style.fontFamily = "Apple Kid";
	endGameBtn.node.style.width = '300px';
	endGameBtn.node.style.height = '100px';
	endGameBtn.node.style.background = 'Maroon'; // make it RED
	endGameBtn.node.style.color = 'Red';
	endGameBtn.node.style.fontSize = '75px';
	endGameBtn.moveTo(300, 800);

	var runningTimer = 0;
	var theInterval = setInterval(function(){
		runningTimer = runningTimer + 1;
		displayReviews(runningTimer);
		if (runningTimer >= 3){clearInterval(theInterval);}
	}, 1000);
	setTimeout(function(){
		finalScore = new sjs.Text("Grade",200,"DeepPink");
		finalScore.node.style.zIndex = 50;
		finalScore.node.style.fontFamily =  "International Font of Mystery";
		finalScore.moveTo(900,500);
		findGrade();

	}, 4250);






	/* TO DO :
	PUT TEXT THAT DISPLAYS EACH ORDER AND HOW YOU DID
	THEN, PUT TEXT THAT SHOWS UR OVERALL GRADE FOR THE DAY
	YAHOO!!!!!!!! DONEZO
	LOOP TO THE NEXT DAY?

	GcustomerRating1


	perfect = 2 points
	ok = 1 point
	bad = 0 points

	6 = S
	5 = A
	4 = B
	3 = C
	2 = D
	1 = E
	0 = F
	*/
}

function displayReviews(num){
	//window["customerReview"+num.toString()] = new sjs.Text(["GcustomerRating"+num.toString()+"[0]"],120,"DeepPink");
	switch(num){
		case 1:
			customerReview1 = new sjs.Text(GcustomerRating1[0],120,"DeepPink");
			customerReview1.moveTo(1000,155);
			smile1 = new sjs.Image(GcustomerRating1[1]);
			smile1.moveTo(850,150);
			smile1.node.style.zIndex = 50;
			smile1.setSize(100,100);
			totalForFinal = totalForFinal + GcustomerRating1[2];
		break;
		case 2:
			customerReview2 = new sjs.Text(GcustomerRating2[0],120,"DeepPink");
			customerReview2.moveTo(1000,285);
			smile2 = new sjs.Image(GcustomerRating2[1]);
			smile2.moveTo(850,280);
			smile2.node.style.zIndex = 50;
			smile2.setSize(100,100);
			totalForFinal = totalForFinal + GcustomerRating2[2];
		break;
		case 3:
			customerReview3 = new sjs.Text(GcustomerRating3[0],120,"DeepPink");
			customerReview3.moveTo(1000,415);
			smile3 = new sjs.Image(GcustomerRating3[1]);
			smile3.moveTo(850,410);
			smile3.node.style.zIndex = 50;
			smile3.setSize(100,100);
			totalForFinal = totalForFinal + GcustomerRating3[2];
		break;
	}
	window["customerReview"+num.toString()].node.style.zIndex = 5;
	window["customerReview"+num.toString()].node.style.fontFamily = "Apple Kid";
}

function findGrade(){
	var rating;
	console.log(totalForFinal);
	switch(totalForFinal){
		case 0: // player gets F
		rating = new sjs.Text("F",300,"DarkSlateBlue");
		break;
		case 1: // player gets E
		rating = new sjs.Text("E",300,"DarkGreen");
		break;
		case 2: // player gets D
		rating = new sjs.Text("D",300,"YellowGreen");
		break;
		case 3: // player gets C
		rating = new sjs.Text("C",300,"Gold");
		break;
		case 4: // player gets B
		rating = new sjs.Text("B",300,"Orange");
		break;
		case 5: // player gets A
		rating = new sjs.Text("A",300,"Red");
		break;
		case 6: // player gets S
		rating = new sjs.Text("S",300,"Khaki");
		break;
	}
	rating.node.style.zIndex = 50;
	rating.node.style.fontFamily = "International Font of Mystery";
	rating.moveTo(1290,440);
}