// my background

function varyingB() {
  
  for( i=0; i <=frameCount; i++) {
strokeWeight(i/width);
  }
  stroke(angelics[int(random(0,angelics.length))]);
  
   line(frameCount,0, frameCount, height);
if(frameCount>width) {
  frameCount=0;
  i=0;
}
ellipseMode(CENTER);

strokeWeight(0);
fill(255,230);
ellipse(200,400,95,95);//spirit cages
fill(210,200); // fill for sprite
ellipse(215,368,10,10); // bubble sprite
fill(255,230);
ellipse(400,200,95,95);
fill(210,200);
ellipse(430,175,10,10);
fill(255,230);
ellipse(600,300,95,95);
fill(210,200);
ellipse(622,270,10,10);
}
