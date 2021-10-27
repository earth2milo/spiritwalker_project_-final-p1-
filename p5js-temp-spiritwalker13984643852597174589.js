class spirit {

  constructor(startX,startY) {
   this.x=startX;
   this.y=startY;
    //this.x=300; // my constructor x and y
   //this.y=550;
   this.diameter = floor(random(3)); // value from 0 to 10
    this.diameter = 5;
  }


  display(alpha) { // This function is largely based off The Coding Train's coding challenge #52: Random Walker. I want the random walker to be two spirits that slowly path their way to each other
    
  
    
    stroke(0, 62, 131, alpha); // fill
    strokeWeight(this.diameter);
    point(this.x, this.y); // my spirit's steps
    ellipseMode(CENTER);
    stroke(255, 215, 0, alpha); // gold
    noFill();
    ellipse(this.x, this.y-10, 21, 3 ); // my halo
    
   
  }

  move(rate) { // my move with a local variable that modifies speed
    var r = floor(random(35)); //using the floor function to round down my random number so I dont get results like 3.99, etc
   
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

      this.x=100; //
      this.y=100;
    }
  }
}
