
##Step 1

This step contains only the setup function.

```js
//setup function contains attributes that don't usually change while the app is executing
function setup() {
  createCanvas(720, 720); //defining the width and height of the canvas
  noCursor();
  colorMode(HSB, 360, 100, 100);  // color mode set to HSB and its max values
  rectMode(CENTER); // the way the rectangle is drawn, CENTER will draw the rectngle from the middle
  noStroke(); // no stroke on shapes
}
```
 - colorMode(HSB, 360, 100, 100):
HSB - Hue Saturation Brightness.
The numbers represent the maximum range of values (from 0 to the given number) the user can assign to any drawing (line, rectangle, ellipse, etc);
