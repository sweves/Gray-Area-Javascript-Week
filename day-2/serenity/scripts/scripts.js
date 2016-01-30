var transparency;
var cycle = 0;
var cycle2 = 0;
var invert = 0;
var thick = 200;
var outer_angle = 0;

function setup(){
	createCanvas(windowWidth, windowHeight);
	frameRate(15);
	// an odd number for the height causes a space between the two loops
	//thick = isEven(windowHeight/2)?windowHeight/2:(windowHeight+1)/2;
	thick = isEven(windowHeight/4)?windowHeight/4:Math.floor(windowHeight/4);

}

function draw(){
	background(255);

		 for(var i = 0; i <= thick; i++){
			// thickness of the band,
			var angle = map(i,0,thick*2,PI,0) + cycle2;
			// SPEED
			transparency = map(angle,0,TWO_PI,0,250) ;
			stroke(200,100,0,transparency);
			line(0,i,windowWidth,i);
		 }

		 for(var i = thick+1; i <= thick*2; i++){
			// thickness of the band,
		 //change 100 to 50 for the ground to get darker a little faster.
			var angle = map(i,0,thick,0,HALF_PI) + cycle2;
			// SPEED
			transparency = map(angle,0,TWO_PI,0,255) ;
			stroke(200,100,0,transparency);
			line(0,i,windowWidth,i);
		 }

		 cycle2 = map(sin(outer_angle),-1,1,2,4.7)
		 outer_angle += .03;

 		 console.log(cycle+","+cycle2);

		 for(var i = 0; i <= thick; i++){
			// thickness of the band,
			var angle = map(i,0,thick*2,PI,0) + cycle2;
			// SPEED
			transparency = map(angle,0,TWO_PI,0,250) ;
			stroke(200,100,0,transparency);
			line(0,i+thick*2+1,windowWidth,i+thick*2+1);
		 }

		 for(var i = thick+1; i <= thick*2; i++){
			// thickness of the band,
		 //change 100 to 50 for the ground to get darker a little faster.
			var angle = map(i,0,thick,0,HALF_PI) + cycle2;
			// SPEED
			transparency = map(angle,0,TWO_PI,0,255) ;
			stroke(200,100,0,transparency);
			line(0,i+thick*2+1,windowWidth,i+thick*2+1);
		 }

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}
