function setup(){
    createCanvas(400,400);
    colorMode(HSB, height, width, 100);
//    rectMode(CENTER);
//    noCursor();
    noStroke();
}


function draw(){
  background(255);
  let numberOfSteps = 50,
      angleIncrement = 360/numberOfSteps,
      radius = 200;

  beginShape(TRIANGLE_FAN);
    vertex(width/2,height/2);
    for(let angle = 0; angle <= 360; angle+=angleIncrement){
        fill(angle, mouseX, mouseY);
      let vx = radius * cos(radians(angle)) + width/2;
      let vy = radius * sin(radians(angle)) + height/2;
      vertex(vx,vy);


    }
  endShape();


}
