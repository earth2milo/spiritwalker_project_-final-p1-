var stX;
var stY;

class spirit {


  constructor(startX, startY) { // my constructor statement
    this.x=startX; // experimenting putting local variables into my constructor
    this.y=startY;
    startX=stX;
    startY=stY;
    //this.x=300; // my constructor x and y
    //this.y=550;
    this.diameter = floor(random(3)); //
    this.diameter = 5;
  }


  display(alpha) { // This function is largely based off The Coding Train's coding challenge #52: Random Walker. I want the random walker to be two spirits that slowly path their way to each other



    stroke(0, 62, 131, alpha); // fill

   
    strokeWeight(this.diameter); // thickness for the spirit's line
    
    point(this.x, this.y); // my spirit's head
    
    point(this.x, this.y+7.5); // my spirit's body
   
    
    ellipseMode(CENTER);
    stroke(255, 215, 0, alpha); // gold
    noFill();
    ellipse(this.x, this.y-10, 7, 1 ); // my halo
    noStroke();
    fill(1);
    ellipse(this.x, this.y-6.5,24,10);
  }

  move(rate) { // my move with a local variable that modifies speed
    var r = floor(random(32)); //using the floor function to round down my random number so I dont get results like 3.99, etc
    // I set this value to 32 to reduce the speed of the spirits, so they wont be as sporatic with their movement
    switch (r) { // my switch statement with variable r
    case 0:

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

    if ( this.x >= width || this.y >= height ) { // if statement that resets to initial position

      this.x=stX; //
      this.y=stY;
    }
  }
}
