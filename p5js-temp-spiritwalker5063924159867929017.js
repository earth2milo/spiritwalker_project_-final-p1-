


var stX; // my handoff statements for the constructor
var stY;
var pos;
var prev;



class spirit { // my class spirit


  constructor(x, y) { // my constructor statement
    this.x= x;
    this.y= y;
    this.diameter = frameCount;  // thickness
    this.history = []; // for trails

    pos = createVector(x, y); // need to include variable constructor here
    prev = pos.copy();
  }



  display(x,y, alpha) {// This function is largely based off The Coding Train's coding challenge #52: Random Walker. I want the random walker to be two spirits that slowly path their way to each other
   pos.x= x;
   pos.y= y;
    //beginShape();
    ////for (var i = 0; i < this.history.length; i++) {
    ////  let pos = this.history[i];
    //  fill(0);
    //  vertex(pos.x, pos.y, 8, 16);
    //  endShape();
    //}
    stroke(255, alpha); // fill


    strokeWeight(12); // thickness for the spirit's line

    point(pos.x, pos.y); // my spirit's head

    point(pos.x, pos.y+11.5); // my spirit's body


    ellipseMode(CENTER);
    stroke(255, 215, 0, alpha); // gold
    noFill();
    ellipse(pos.x, pos.y-10, 12, 0.4 ); // my halo

    for (i=0; i<35; i++) { // aura for loop
      stroke(255, i);
    }
    if (i>=35) {
      i=0;
    }
    ellipse(pos.x-1, pos.y-14, 35, 8); // aura glow
  }





  move(rateX,rateY) { // my move with a local variable that modifies speed
    //var step = p5.Vector.random2D(); // draws a random 2d vector
    var step = createVector(rateX,rateY);
    var path = floor(random(100)); // floor functions rounds down to nearest random int ( excludes decimals)
    if (path<50) {
      step.mult(0.2);
    }
    if (path>50) {
      step.mult(1);
    }

    pos.add(step);

    //line(pos.x, pos.y, prev.x, prev.y); // I want to change this shape into a heart
    //prev.set(pos); // sets the previous position to current pos
    //// I wanna add if statements to decrease movement speed and make the spirits more angelic
    //let v = createVector(this.x, this.y); // my vector trail
    //this.history.push(v); // storing my two coordinates paths


    if ( step >= width || step >= height ) { // if statement that resets to initial position

      step=stX; // reset to start
      step=stY;
    }
  }
}
