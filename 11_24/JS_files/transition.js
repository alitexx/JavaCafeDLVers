



function transition(){ //somehow handle deletion of past screen here?
	document.body.classList.add('fade-out'); // fade out
//	if (window.currentScreen = 0) { // FIND A WAY TO DESTROY OTHER THINGS
//		var pastScreen = [background, clouds, cafeEnter, tree1, tree2, barrier1, barrier2, beginTXT]
//	}
	setTimeout(function(){ // fade back in
		document.body.classList.remove('fade-out');
//		for (i = 0; i < pastScreen.length; i++) { // stops when longer than list contents
//			pastScreen[i].destroy(); // destroy original object
//		} // end for
	}, 250);
} // end transition
