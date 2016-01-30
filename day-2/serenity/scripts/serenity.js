//serenity.js
function Oscillator(startval,maxval,increment){
  this.sv = startval;
  this.mv = maxval;
  this.inc = increment;
  this.direction = 1;

  this.next = function(){
    if(this.sv > this.mv || this.sv < 0){
      this.direction *= -1;
    }
    this.sv += this.inc;
  }
}
