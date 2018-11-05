

//setup function contains attributes that don't usually change while the app is executing
function setup() {
  createCanvas(720, 720); //defining the width and height of the canvas
  noCursor();

  colorMode(HSB, 360, 100, 100);  // color mode set to HSB and its max values -- more in the readme file
  rectMode(CENTER); // the way the rectangle is drawn, CENTER will draw the rectngle from the middle
  noStroke(); // no stroke on shapes
}
