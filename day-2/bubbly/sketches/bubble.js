function Bubble() {
	this.x = random(0, windowWidth);
	this.y = random(0, windowHeight);
	this.xspeed = random(-1, 1);
	this.yspeed = 5;
	this.origin = this.x;

	this.display = function(){

		fill(255);
		noStroke();
		ellipse(this.x, this.y, 20, 20);

	}

	this.move = function(){
		this.y = this.y - this.yspeed;
		this.x = this.x - this.xspeed;

		if(this.x > this.origin + 10 || this.x < this.origin - 10){
			this.xspeed = this.xspeed * -1;
		}
	}

	this.offScreen = function(){

		if(this.y<0){
			return true;
		} else{
			return false;
		}

	}
}