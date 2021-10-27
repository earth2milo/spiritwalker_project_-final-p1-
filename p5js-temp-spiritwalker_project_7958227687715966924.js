var angelics = []; // my colors


let wanderer;// my first spirit (my first object)
let kindred; // my second spirit


function setup() {
  createCanvas(800, 800);
  background(131,119,82); //
  wanderer= new spirit(300,300);
  kindred= new spirit(mouseX,mouseY);
  
  angelics[0] = color(227,38,54); // My red
  angelics[1] = color(0,62,131); // my blue
  angelics[2] = color(136,214,174); // my green
  angelics[3] = color(232,222,53); // my yellow
  angelics[4] = color(131,119,82); // my brown
  
  
}


function draw() {

wanderer.move(13);
wanderer.display(30);
kindred.move(13);
kindred.display(30);
//background(angelics[(random(0,4))]);

}
