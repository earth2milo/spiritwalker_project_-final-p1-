// * a preamble for my project *
// this is the second iteration of my project 1,
// my original idea for this project was largely based on a interactable landscape that showed a group of cities interconnected with each other.
// But I largely struggled to draw within processing (even with crosshairs).
// So I pivoted my project more towards the idea of kindred spirits.
// Theses souls who are on a journey to find each other, stumbling around a canvas looking for each other, and once they find each other, the kindred spirits are fulfilled
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
  //translate(width, height);
  //background(angelics[4]);

  wanderer = new spirit(300,100);
  kindred = new spirit (100,300);
  sky = new spirit(150,50);
  
  zeus = new clouds();
  hermes = new clouds();
  aphrodite = new clouds();
}

function draw() {
  varyingB();

  if (frameCount%2==0) { // makes my first little trail with this effect by modifying the background's alpha value
    alpha++;
  }
  if (alpha>255) {
    alpha=0;
  }
  background(137, 207, 240, alpha);
 //zeus.draw(320,100,255, 48);
// hermes.draw(720,700,230, 32);
  wanderer.display(200, 400, 300);
  wanderer.move();
  kindred.display(400, 200, 255);
  kindred.move();
  sky.display(600,300, 255);
  sky.move();





  //let d = dist(wanderer.x, wanderer.y, kindred.x, kindred.y);
}
