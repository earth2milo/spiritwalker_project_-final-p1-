var stX; // my handoff statements for the constructor
var stY;
var pos;
var prev;
let mouse1;


class spirit { // my class spirit


  constructor(x, y) { // my constructor statement
    // this.x= x;
    //this.y= y;
    // this.diameter = (frameCount/2);  // thickness
     this.history = []; // array for trails
    
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, -2);
    this.position = createVector(x, y);
    this.r = 3;
    this.maxspeed = 3;
    this.maxforce = 0.2;




    //pos = createVector(x, y); // need to include variable constructor here
    //prev = pos.copy();
  }


  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);

    this.position.add(this.velocity);
    this.acceleration.mult(0);
    
    if(this.position.x > height || this.position.y > width) {
      this.position.x = height/2;
      this.position.x = width/2;
      
    }
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  seek(angel) {
    let reunion = p5.Vector.sub(this.position, angel);

    reunion.setMag(this.maxspeed);

    let moving = p5.Vector.sub(reunion, this.velocity);
    moving.limit(this.maxforce);

    this.applyForce(moving);
  }


  draw() {
    stroke(255, alpha); // fill
     strokeWeight(14); // thickness for the spirit's line 
    point(mouseX, mouseY);
    point(mouseX, mouseY+11.5);
    ellipseMode(CENTER);
    stroke(255, 215, 0, alpha); // gold
    noFill();
    //ellipse(x,y-10, 12, 0.4 ); // my halo
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

  displayTracker(x,y) {


    let artemis = this.velocity.heading() + PI/2; // calculates angle of heading
    push();
    translate(this.position.x, this.position.y);
    rotate(artemis);
   
   
     stroke(255, alpha); // fill
     strokeWeight(14); // thickness for the spirit's line 
    point(x, this.r*2);
    point(x, (this.r*2)-11.5);
    point(-this.r, this.r*2);
   
    
    ellipseMode(CENTER);
    stroke(255, 215, 0, alpha); // gold
    noFill();
    ellipse(x, (this.r*2)-10, 12, 0.4);
    ellipse(-this.r, (this.r*2)-10, 12, 0.4);
    ellipse(this.r, this.r*2);

    for (i=0; i<35; i++) { // aura for loop
      stroke(255, i);
    }
    if (i>=35) {
      i=0;
    }

    //ellipse(x-1, y-14, 35, 8); // aura glow
    ellipse(x-1, (this.r*2)-14, 35, 8);
    ellipse(-this.r+1, (this.r*2)-14, 35, 8);
    
    if (i>=35) {
      i=0;
    }
    ellipse((this.r*2), (this.r*2)-14, 35, 8); // aura glow
    ellipse(x, (this.r*2)-1, 35, 8);
    
    //beginShape();
    //vertex(0, -this.r * 2);
    //vertex(-this.r, this.r *2);
    //vertex( this.r, this.r *2);
    //endShape(CLOSE); 
  pop();
  
  
  //beginShape();
  //    for (var i = 0; i < this.history.length; i++) { // stores positions of my objects' positions
  //      let pos = this.history[i];
  //      fill(0);
  //      stroke(255,0,0);
  //      vertex(this.position.x, this.position.y, 4, 16);
  //      endShape();
  
      
  }
  
  





  //  move() { // my move with a local variable that modifies speed






  //    var step = p5.Vector.random2D(); // draws a vector with a random angle

  //    var path = floor(random(15)); // floor functions rounds down to nearest random int ( excludes decimals)
  //    if (path<10) { // 50% change to modify movement
  //      step.add(floor(random(width/5)));
  //      translate(path);
  //    }
  //    if (path<3) { // another if
  //      step.mult(1.3); // multiply my step by 1.3 if path smaller than 3
  //      translate(path);
  //    }
  //    if (path>10) {
  //      translate(path);
  //    }


  //    pos.add(step); // updates positions

  //    if (frameCount%28==0) { // breaking out of bubble
  //      // this.seperation = p5.Vector.sub(pos.x,prev.x);
  //      // this.seperation = p5.Vector.sub(pos.x,prev.x);
  //      // this.seperation = p5.Vector.sub(pos.x,prev.x);
  //      // this.seperation = p5.Vector.sub(pos.x,prev.x);
  //      stroke(255, alpha); // fill
  //      strokeWeight(10); // thickness for the spirit's line
  //      //point(x,y); // my spirit's head
  //      point(prev.x, prev.y);
  //      //point(x,y+11.5); // my spirit's body
  //      point(prev.x, prev.y+11.5);
  //      ellipseMode(CENTER);
  //      stroke(255, 215, 0, alpha); // gold
  //      noFill();
  //      //ellipse(x,y-10, 12, 0.4 ); // my halo
  //      ellipse(prev.x, prev.y-10, 12, 0.4);

  //      for (i=0; i<35; i++) { // aura for loop
  //        stroke(255, i);


  //        ellipse(prev.x-1, prev.y-14, 35, 8);

  //        stroke(angelics[int(random(0, angelics.length))]);
  //        strokeWeight(4);
  //        line(pos.x, pos.y, prev.x, prev.y); // my link between spirits
  //        //line(pos.x+50, pos.y+5, prev.x+90, prev.y+5);
  //        prev.set(pos); // sets the previous position to current pos


  //        if ( prev.x>width || prev.y>height) {
  //          prev.x=pos.x;
  //          prev.y=pos.y;
  //        }
  //      }
  //    }
  //  }

  //  display(x, y, alpha) {// This function is largely based off The Coding Train's coding challenge #52: Random Walker. I want the random walker to be two spirits that slowly path their way to each other


  //    pos.x=x;
  //    pos.y=y;

  //    var r = floor(random(80)); // increased the amount of numbers so that the movement would be less sporatic
  //    switch(r) {
  //    case 0: // more cases to make movement seem more erratic
  //      x=x+10;
  //      break;
  //    case 1:
  //      x=x-10;
  //      break;
  //    case 2:
  //      y=y+10;
  //      break;
  //    case 3:
  //      y=y-10;
  //      break;
  //    }

  //    beginShape();
  //    for (var i = 0; i < this.history.length; i++) { // stores positions of my objects' positions
  //      let pos = this.history[i];
  //      fill(0);
  //      vertex(x, y, 4, 16);
  //      endShape();
  //    }

  //    stroke(255, alpha); // fill
  //    strokeWeight(14); // thickness for the spirit's line
  //    //point(x,y); // my spirit's head
  //    point(x, y);
  //    //point(x,y+11.5); // my spirit's body
  //    point(x, y+11.5);
  //    ellipseMode(CENTER);
  //    stroke(255, 215, 0, alpha); // gold
  //    noFill();
  //    //ellipse(x,y-10, 12, 0.4 ); // my halo
  //    ellipse(x, y-10, 12, 0.4);

  //    for (i=0; i<35; i++) { // aura for loop
  //      stroke(255, i);
  //    }
  //    if (i>=35) {
  //      i=0;
  //    }

  //    //ellipse(x-1, y-14, 35, 8); // aura glow
  //    ellipse(x-1, y-14, 35, 8);
  //    if (i>=35) {
  //      i=0;
  //    }
  //    ellipse(x-1, y-14, 35, 8); // aura glow
  //  }
}
