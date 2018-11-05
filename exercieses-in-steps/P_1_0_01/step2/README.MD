
##Step 2

This step has the draw function added.

```js
//draw function contains instructions that repeat while the page is open
function draw() {
  background(mouseY / 2, 100, 100); // defines the colour of the background
  fill(360 - mouseY / 2, 100, 100); // defines the colour of any following drawing
  rect(360, 360, mouseX + 1, mouseX + 1); //draws a rectangle
}
```
On the first instruction, the mouse Y position is used to define the colour of the background. If the mouse is closer to the bottom of the screen, the hue value is higher
In the second instruction, the fill is also dependant of mouse Y coordinates.
The rectangle drawn on screen is dependant of the mouse X position. If the mouse is moving towards the right side of the screen, the rectangle grows bigger in size. Because both of its width and heights are dependant of mouse X, the rectangle is will always be a square.
