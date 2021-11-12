// * a preamble for my project *
// this is the second iteration of my project 1,
// my original idea for this project was largely based on a interactable landscape that showed a group of cities interconnected with each other.
// But I largely struggled to draw within processing (even with crosshairs).
// So I pivoted my project more towards the idea of kindred spirits.
// Theses souls who are on a journey to find each other, frantically looking  around the canvas for each other, but ulimimately unable to reach each other. The kindred spirits are frustrated.
// I spent a lot of time building my foundation for this code, as I found that I will spend most of my time obsessing over minute features such as color choices
// and not spend enough time actually building out the main appeal of my code.
// With this project I wanted to experiment with classes, arrays, interactivity, random (with floor and round), and vectors


let angelics = ["#E32636", "#013E83", "#88D6AE", "#E8DE35", "#837752,"]; // my colors
let alpha=150;



// my red is angelics[0]
// my blue is angelics[1]
// my green is angelics[2]
// my yellow is angelics[3]
// my brown is angelics[4]


let wanderer;// my first spirit (my first object)
let kindred; // my second spirit


function setup() {

  createCanvas(800, 800);

  wanderer = new spirit(width/2, height/2);
  kindred = new spirit (100, 300);
  sky = new spirit(150, 50);

  zeus = new clouds();
  hermes = new clouds();
  aphrodite = new clouds();

  //console.log("Click to bring the spirits together");
}

function draw() {
  let mouse = createVector(mouseX, mouseY);
  varyingB();

  if (frameCount%75==0) { // makes my first little trail with this effect by modifying the background's alpha value
    alpha++;
  }
  if (alpha>255) {
    alpha=0;
  }

  background(137, 207, 240, alpha);

  //  zeus.draw(320, 100, 40);
  //  zeus.move();
  //  hermes.draw(720, 130, 40);
  //  aphrodite.draw(120, 200, 40);
  //  zeus.draw(320,700,40);
  //  zeus.move();
  //  hermes.draw(220,600,32);


  wanderer.seek(mouse);
  wanderer.update();
  wanderer.draw();
  wanderer.displayTracker();



  //wanderer.display(200, 400, 300);
  //wanderer.move();
  //kindred.display(400, 200, 255);
  // kindred.move();
  //sky.display(600, 300, 255);
  //sky.move();
}
