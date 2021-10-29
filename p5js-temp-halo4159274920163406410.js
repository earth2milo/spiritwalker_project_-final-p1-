// my background

function varyingB() {
strokeWeight(frameCount/width);
  stroke(angelics[int(random(0,angelics.length))]);
  
   line(frameCount,0, frameCount, height);
if(frameCount>width) {
  frameCount=0;
}

}
