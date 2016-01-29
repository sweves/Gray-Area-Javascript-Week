var y;
var speed;
var bubbles = [];
var numBubbles = 50;

function setup(){

	var canvas = createCanvas(windowWidth, windowHeight);

	y = windowHeight-30;
	speed = 1;

	for (var i = 0; i <= numBubbles; i++){
      	bubbles.push(new Bubble());
  	}

  	

}

function draw(){

	background(144, 229, 203);

	for(var i=0; i<bubbles.length; i++){

		bubbles[i].display();
		bubbles[i].move();

	}

	for (var i = bubbles.length-1; i >= 0; i--) {
    	var abubble = bubbles[i];
	    if (abubble.offScreen()) {
	      bubbles.splice(i, 1);
	    }
  	}

  	if(bubbles.length <= numBubbles){
    	bubbles.push(new Bubble());
  	}

	console.log(bubbles.length);	
	
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}