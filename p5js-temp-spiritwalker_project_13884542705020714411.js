// * a preamble for my project *
// this is the second iteration of my project 1,  
// my original idea for this project was largely based on a interactable landscape that showed a group of cities interconnected with each other.
// But I largely struggled to draw within processing (even with crosshairs).
// So I pivoted my project more towards the idea of kindred spirits.
// Theses souls who are on a journey to find each other, stumbling around a canvas looking for each other, and once they find each other, the kindred spirits are fulfilled
// I spent a lot of time building my foundation for this code, as I found that I will spend most of my time obsessing over minute features such as color choices
// and not spend enough time actually building out the main appeal of my code.
// With this project I wanted to experiment with classes, arrays, interactivity, random (with floor and round), and vectors
let angelics = ["#E32636", "#013E83", "#88D6AE", "#E8DE35" ,"#837752"]; // my colors
// my red is angelics[0]
// my blue is angelics[1]
// my green is angelics[2]
// my yellow is angelics[3]
// my brown is angelics[4]
let wanderer;// my first spirit (my first object)
let kindred; // my second spirit
//let colorSwitch;

function setup() {
  createCanvas(800, 800);
  //background(255); //
  wanderer= new spirit(300,300);
  kindred= new spirit(300,500);
  
  //angelics[0] = color(227,38,54); // My red
  //angelics[1] = color(0,62,131); // my blue
  //angelics[2] = color(136,214,174); // my green
  //angelics[3] = color(232,222,53); // my yellow
  //angelics[4] = color(131,119,82); // my brown
  
  
}


function draw() {
//colorSwitch=random(angelics.length);
//colorSwitch=floor(angelics);
background(angelics[4]);
//background(angelics[int(random(0,angelics.length))]);
wanderer.move(3);
//wander.haloGlow();
wanderer.display(255);
kindred.move(5);
kindred.display(255);
//background(angelics[(random(0,4))]);

}
