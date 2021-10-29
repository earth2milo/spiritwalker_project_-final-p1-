// my background

function varyingB() {
  for( i=0; i< frameCount; i++) {
strokeWeight(i/width);
  }
  stroke(angelics[int(random(0,angelics.length))]);
  
   line(frameCount,0, frameCount, height);
if(frameCount>width) {
  frameCount=0;
  i=0;
}

}
