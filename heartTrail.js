// added function from challenge in class that I made with Charles during Challenge #2.
class clouds {

  constructor() {
this.fill = color(random(200,255)); // defining my clases instructions
this.xpos = 0;
this.ypos = 0;
this.xspeed = 1;
  }

  draw(x,y,h) {
   
    strokeWeight(3);
    noStroke();
    fill(this.fill);       
    ellipse(this.xpos+x, this.ypos+y, 40+h, 40);
    ellipse(this.xpos+x, this.ypos+y, 40, 40);
    ellipse(this.xpos+x, this.ypos+y, 40, 40+h);
    ellipse(this.xpos+x, this.ypos+y, 40+h, 40);
    ellipse(this.xpos+x, this.ypos+y, 40, 40+h);

    
  
  }
  
  move() {
   this.xpos = this.xpos + this.xspeed; // my movement for my clouds
   if (this.xpos > width) {
     this.xpos=-100; // reset
   }
   
  
  }
}
