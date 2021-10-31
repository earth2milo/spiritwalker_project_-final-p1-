// added function from challenge in class that I made with Charles during Challenge #2.
var geo;
class clouds {

  constructor() {

 
  }

  draw(x, y, f, h) {
    stroke(angelics[int(random(0, angelics.length))]);
    fill(f);        // cloud2
    ellipse(geo.x+x, geo.y+y, 40+h, 40);
    ellipse(geo.x+x, geo.y+y, 40, 40);
    ellipse(geo.x+x, geo.y+y, 40, 40+h);
    ellipse(geo.x+x, geo.y+y, 40+h, 40);
    ellipse(geo.x+x, geo.y+y, 40, 40+h);

    if (mouseIsPressed) {
      x++;
      h++;
    }

    if (x>width) {
      x=0;
    }
  }
}
