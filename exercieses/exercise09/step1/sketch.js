'use strict'
// theory
// for(gridy){ - i=0; i<number of tiles; i++
//   for(gridx){ - i=0; i<number of tiles; i++
//     draw rectangle at gridx * tile width and gridy * tile width
//   }
// }
//Math.floor(random(-1,2)) - yes no maybe

let actStrokeCap;
let img;
function preload(){
  img = loadImage("image.svg");
}

function setup(){
  // frameRate(1);
  createCanvas(1000,1000);
  actStrokeCap = ROUND;
}
function draw(){
  imageMode(CENTER);
  randomSeed(100);
  background(255);
  strokeCap(actStrokeCap);
  const numberOfTiles = 10, // in 1 dirrection  total number will be numberOfTiles^2
        tileWidth = width/numberOfTiles;
  for(let gridY = 0; gridY<numberOfTiles; gridY++){
    for(let gridX = 0; gridX<numberOfTiles; gridX++){
      fill(0);
      stroke(0);
      strokeWeight(1);
      angleMode(DEGREES);
      push();
      let xPos = gridX*tileWidth+tileWidth/2;
      let yPos = gridY*tileWidth+tileWidth/2
      translate(xPos,yPos);
      rotate(atan2(mouseY-yPos,mouseX-xPos) + 20);
      image(img,0,0,tileWidth,tileWidth);
      // line(-tileWidth/2,-tileWidth/2,tileWidth/2,tileWidth/2)
      pop();
    }
  }
}

function keyReleased(){
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == '1') actStrokeCap = ROUND;
  if (key == '2') actStrokeCap = SQUARE;
  if (key == '3') actStrokeCap = PROJECT;
}
