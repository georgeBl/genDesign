
###Step1

```js
function setup() {
  createCanvas(800, 400);
  noStroke();
  colorMode(HSB, width, height, 100);
}
```
In the colorMode function, the hue and saturation are dependant on the canvas. The hue is set to 800 while the saturation is set to 400;

```js
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
```
The variables stepX and stepY represent the number of steps in each direction (right, bottom) the loop will iterate.
To add interaction to the program, the two variables are set to mouse X and mouse Y, so when mouse X is high, the number of rows is higher. Same applies for the mouse Y, affecting columns.
The fill scales with the number of rows. Each row, the rectangles are brighter;
The rectangles are also dependant on the mouse X and Y as their width and height are the mouse X and Y +2.
