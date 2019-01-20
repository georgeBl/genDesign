'use strict'
// theory
// for(gridy){ - i=0; i<number of tiles; i++
//   for(gridx){ - i=0; i<number of tiles; i++
//     draw rectangle at gridx * tile width and gridy * tile width
//   }
// }
//Math.floor(random(-1,2)) - yes no maybe

let actStrokeCap;

function setup(){
  // frameRate(1);
  createCanvas(500,500);
  actStrokeCap = ROUND;
}
function draw(){

  randomSeed(100);
  background(255);
  strokeCap(actStrokeCap);
  const numberOfTiles = 25, // in 1 dirrection  total number will be numberOfTiles^2
        tileWidth = width/numberOfTiles;
  for(let gridY = 0; gridY<numberOfTiles; gridY++){
    for(let gridX = 0; gridX<numberOfTiles; gridX++){
      // ellipseMode(CORNER);

      fill("RED");
      angleMode(DEGREES);

      // rectMode(CENTER);
      push();
      translate(gridX*tileWidth+tileWidth/2,gridY*tileWidth+tileWidth/2);
      // translate(gridX*tileWidth, gridY*tileWidth);
      // random()>0.5 ? rotate(90) : rotate(0);
      // scale();
      // rect(0,0,tileWidth,tileWidth);
      // line(0,tileWidth,tileWidth,0);
      strokeWeight(5);
      random()>0.5 ? line(-tileWidth/2,tileWidth/2,tileWidth/2,-tileWidth/2)
       : line(-tileWidth/2,-tileWidth/2,tileWidth/2,tileWidth/2)
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
