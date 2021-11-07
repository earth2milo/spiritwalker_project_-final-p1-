var stX; // my handoff statements for the constructor
var stY;
var pos;
var prev;



class spirit { // my class spirit


  constructor(x, y) { // my constructor statement
    this.x= x;
    this.y= y;
    this.diameter = frameCount;  // thickness
    this.history = []; // array for trails

    pos = createVector(x, y); // need to include variable constructor here
    prev = pos.copy();
  }








  move() { // my move with a local variable that modifies speed
  
  
  
  
    //var step = createVector(rateX, rateY);// actual draw and fluctuation between movement
    var step = p5.Vector.random2D();
    var path = floor(random(10)); // floor functions rounds down to nearest random int ( excludes decimals)
    if (path<5) { // 50% change to modify movement
      step.add(floor(random(width/8)));
    }
    if(path<3) { // another if
      step.mult(1.2);
    }
    
    
    pos.add(step); // updates positions
   
   if (frameCount%55==0) { // breaking out of bubble
      stroke(255, alpha); // fill
      strokeWeight(12); // thickness for the spirit's line
      //point(x,y); // my spirit's head
      point(prev.x, prev.y);
      //point(x,y+11.5); // my spirit's body
      point(prev.x, prev.y+11.5);
      ellipseMode(CENTER);
      stroke(255, 215, 0, alpha); // gold
      noFill();
      //ellipse(x,y-10, 12, 0.4 ); // my halo
      ellipse(prev.x, prev.y-10, 12, 0.4);

      for (i=0; i<35; i++) { // aura for loop
        stroke(255, i);
    
   
      ellipse(prev.x-1, prev.y-14, 35, 8);
      
        stroke(180, 119, 250);
        strokeWeight(4);
        line(pos.x, pos.y, prev.x, prev.y); // my link between spirits
        //line(pos.x+50, pos.y+5, prev.x+90, prev.y+5);
        prev.set(pos); // sets the previous position to current pos
        
        
        if( prev.x>width || prev.y>height) {
        prev.x=pos.x;
         prev.y=pos.y;
        }
      }
    }
      
      
     
   
  }

  display(x, y, alpha) {// This function is largely based off The Coding Train's coding challenge #52: Random Walker. I want the random walker to be two spirits that slowly path their way to each other

    pos.x=x;
    pos.y=y;

var r = floor(random(80)); // increased the amount of numbers so that the movement would be less sporatic
   switch(r) {
  case 0:
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

    beginShape();
    for (var i = 0; i < this.history.length; i++) { // stores positions of my objects' positions
      let pos = this.history[i];
      fill(0);
      vertex(x, y, 4, 16);
      endShape();
    }

    stroke(255, alpha); // fill
    strokeWeight(12); // thickness for the spirit's line
    //point(x,y); // my spirit's head
    point(x, y);
    //point(x,y+11.5); // my spirit's body
    point(x, y+11.5);
    ellipseMode(CENTER);
    stroke(255, 215, 0, alpha); // gold
    noFill();
    //ellipse(x,y-10, 12, 0.4 ); // my halo
    ellipse(x, y-10, 12, 0.4);

    for (i=0; i<35; i++) { // aura for loop
      stroke(255, i);
    }
    if (i>=35) {
      i=0;
    }

    //ellipse(x-1, y-14, 35, 8); // aura glow
    ellipse(x-1, y-14, 35, 8);
      if (i>=35) {
        i=0;
      }
 ellipse(x-1, y-14, 35, 8); // aura glow
 
     

      if (x > width || y >height) {
        x=0;
        y=0;
      }
    }

}
