


var stX; // my handoff statements for the constructor
var stY;


class spirit { // my class spirit


  constructor(startX, startY) { // my constructor statement
    this.x=startX; // experimenting putting local variables into my constructor
    this.y=startY;
    startX=stX;
    startY=stY;
    this.diameter = 7;  // thickness
    this.history = []; // for trails
  }


  display(alpha) { // This function is largely based off The Coding Train's coding challenge #52: Random Walker. I want the random walker to be two spirits that slowly path their way to each other
    beginShape();
    for (var i = 0; i < this.history.length; i++) {
      let pos = this.history[i];
      fill(130, 255, 0);
      vertex(pos.x, pos.y, 8, 16);
      endShape();
      
    }


    stroke(255, alpha); // fill


    strokeWeight(this.diameter); // thickness for the spirit's line

    point(this.x, this.y); // my spirit's head

    point(this.x, this.y+7.5); // my spirit's body


    ellipseMode(CENTER);
    stroke(255, 215, 0, alpha); // gold
    noFill();
    ellipse(this.x, this.y-8, 10, 0.4 ); // my halo
  }




  move(rate) { // my move with a local variable that modifies speed
    var r = floor(random(32)); //using the floor function to round down my random number so I dont get results like 3.99, etc
    // I set this value to 32 to reduce the speed of the spirits, so they wont be as sporatic with their movement
    this.x=constrain(this.x, 0, width-400); // to keep the spirits inching together and a
    this.y=constrain(this.y, 0, height-300);
    switch (r) { // my switch statement with variable r

    case 0:
      //this.x=constrain(this.x, 0, width-400); // to keep the spirits inching together and a
      //this.y=constrain(this.y, 0, height-300); // bit more consistent I added the constrain function
      // which essentially limits values between a minimum and maximum value
      this.x=this.x+rate; // my spirit moves to the right
      break;
    case 1:
      this.x=this.x-rate; // my spirit moves to the left
      break;
    case 2:

      this.y=this.y+rate; // my spirit moves  up
      break;
    case 3:
      this.y=this.y-rate;  // my spirit moves  down
      break;
    }

    let v = createVector(this.x, this.y); // my vector trail
    this.history.push(v); // storing my two coordinates paths




    if ( this.x >= width || this.y >= height ) { // if statement that resets to initial position

      this.x=stX; // reset to start
      this.y=stY;
    }
  }
}
