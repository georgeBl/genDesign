
let actRandomSeed=10000;

let slider;
function setup(){
  createCanvas(600,600);
  slider = createSlider(5,40,0,5);
  // slider.position(10,620);
  slider.style('width','180px');
  slider.addClass('positionFix');
}


function draw(){
  background(255);
  randomSeed(actRandomSeed);

  noStroke();
  let tileCount = slider.value();
      tileWidth = width / tileCount;
  for(let gridY = 0; gridY< tileCount; gridY++){
    for(let gridX = 0; gridX< tileCount; gridX++){
      push();
      fill(0);
      var moveX = random(-1, 1) * mouseX / 20;
      var moveY = random(-1, 1) * mouseY / 20;
      translate(gridX*tileWidth+tileWidth/2+moveX,gridY*tileWidth+tileWidth/2+moveY);
      ellipse(0,0,tileWidth,tileWidth);
      pop();
    }
  }
  for(let gridY = 0; gridY< tileCount; gridY++){
    for(let gridX = 0; gridX< tileCount; gridX++){
      push();
      fill(255);
      translate(gridX*tileWidth+tileWidth/2,gridY*tileWidth+tileWidth/2);
      scale(1/3);
      ellipse(0,0,tileWidth,tileWidth);
      pop();
    }
  }

}


function mousePressed() {
  actRandomSeed = random(100000);
}
