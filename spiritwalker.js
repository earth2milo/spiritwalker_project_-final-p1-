class spirit {

  constructor() {
    this.x=200;
    this.y=200;
    this.diameter = floor(random(8));
  }


  display() { // This function is largely based off The Coding Train's coding challenge #52: Random Walker. I want the random walker to be two spirits that slowly path their way to each other
    stroke(0,62,131); // Porcelain green spirit
    strokeWeight(this.diameter);
    point(this.x, this.y); // my spirit's steps
  }

  move() {
    var r = floor(random(22)); //using the floor function to round down my random number so I dont get results like 3.99, etc
    switch (r) { // my switch statement with variable r
    case 0:
      this.x=this.x+3; // my spirit moves 3 to the right
      break;
    case 1:
      this.x=this.x-3; // my spirit moves 3 to the left
      break;
    case 2:
      this.y=this.y+3; // my spirit moves 3 up
      break;
    case 3:
      this.y=this.y-3;  // my spirit moves 1 down
      break;
    }
  }
}
