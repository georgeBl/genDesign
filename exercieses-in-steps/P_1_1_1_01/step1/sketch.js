'use strict';
//variables used for the width and heights of the rectangles
var stepX;
var stepY;

function setup() {
  createCanvas(800, 400);
  noStroke();
  colorMode(HSB, width, height, 100);
}

function draw() {
  //store the mouse X and Y values and add 2 - explained in the readme file
  stepX = mouseX + 2;
  stepY = mouseY + 2;

  //itterate from left to right, top to bottom and draw a rectangle on each step, filled with a different colour
  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}
