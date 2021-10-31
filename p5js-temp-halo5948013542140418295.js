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

strokeWeight(10);
fill(0);
ellipse(200,400,95,95);
ellipse(400,200,95,95);
ellipse(600,300,95,95);
}
