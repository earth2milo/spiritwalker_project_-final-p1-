var stX; // my handoff statements for the constructor
var stY;
var pos;
var prev;
let mouse1;


class spirit { // my class spirit


  constructor(x, y) { // my constructor statement
 
    this.acceleration = createVector(0, 0); // rate of change for movement
    this.velocity = createVector(0, -2); // speed for movement
    this.position = createVector(x, y); // position tracker for matrix transformations
    this.r = floor(random(5)); // my main value for vertex manipulation
    this.maxspeed = 3; // max speed
    this.maxforce = 5; // max vibration value when angels intersect
  }
  
  // my tracker/seeker function is largely based off of Craig Reynold's autonomous steering behaviors as seen in class on Wednesday November 10th


  update() { // my update function for handling velocity
    this.velocity.add(this.acceleration); 
    this.velocity.limit(this.maxspeed);

    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  applyForce(force) { // my update function for handling vibrations or force
    this.acceleration.add(force);
  }

  seek(angel) {
    let reunion = p5.Vector.sub(this.position, angel); // the main calculation for keeping the seeker away from the target

    reunion.setMag(this.maxspeed); // magnitude extends the vertex

    let moving = p5.Vector.sub(reunion, this.velocity); // other calculator for controlling velocity
    moving.limit(this.maxforce); // limiting force

    this.applyForce(moving); // applying force calculation
  }


  draw() {

    stroke(255, alpha); // fill

    strokeWeight(14); // thickness for the spirit's line
    point(mouseX, mouseY);
    point(mouseX, mouseY+11.5);
    ellipseMode(CENTER);
    stroke(255, 215, 0, alpha); // gold
    noFill();
    ellipse(mouseX, mouseY-10, 12, 0.4);

    for (i=0; i<35; i++) { // aura for loop
      stroke(255, i);
    }
    if (i>=35) {
      i=0;
    }

    //ellipse(x-1, y-14, 35, 8); // aura glow
    ellipse(mouseX-1, mouseY-14, 35, 8);
    if (i>=35) {
      i=0;
    }
    ellipse(mouseX-1, mouseY-14, 35, 8); // aura glow
  }

  displayTracker(x, y) {


    let artemis = this.velocity.heading() + PI/2; // calculates angle of heading
    push();
    translate(this.position.x, this.position.y);
    rotate(artemis); // matrix rotation system for modifying heading
    stroke(angelics[int(random(0, angelics.length))]); // chaotic fill 
    strokeWeight(14); // thickness for the spirit's line
    point(-this.r, this.r*2); // body
    point(-this.r, (this.r*2)+11.5); // body


    ellipseMode(CENTER);
    stroke(255, 215, 0, alpha); // gold
    noFill();

    ellipse(-this.r, (this.r*2)-10, 12, 0.4); // gold ring


    for (i=0; i<35; i++) { // aura for loop
      stroke(255, i);
    }
    if (i>=35) {
      i=0;
    }


    ellipse(-this.r+1, (this.r*2)-14, 35, 8);

    if (i>=35) {
      i=0;
    }




    pop();

    if (this.position.x > height || this.position.y > height) { //
  this.position.x = floor(random(400));
  this.position.y = floor(random(800));
    
    }
  }

  lostWanderer(x, y) {
    
  var r = floor(random(80)); // increased the amount of numbers so that the movement would be less sporatic
    switch(r) {
    case 0: // more cases to make movement seem more erratic
      x=x+10;
      break;
    case 1:
      x=x-10;
      break;
    case 2:
      y=y+10;
      break;
    case 3:
      y=y-10;
      break;
    }


    stroke(0, alpha); // fill
    strokeWeight(12); // thickness for the spirit's line
    point(x, y);
    point(x, y+11.5);
    ellipseMode(CENTER);
    stroke(255, 215, 0, alpha); // gold
    noFill();
    ellipse(x, y-10, 12, 0.4);
    for (i=0; i<35; i++) { // aura for loop
      stroke(255, i);
    }
    if (i>=35) {
      i=0;
    }
    ellipse(x-1, y-14, 35, 8);
    if (i>=35) {
      i=0;
    }
    ellipse(x-1, y-14, 35, 8); // aura glow
  

  
  }



}
