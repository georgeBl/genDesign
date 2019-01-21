let minuteStrokeLength = 10;
let minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

let hourStrokeLength = 30;
let hourStrokeWeight = 10;
let hourStrokeColor;
let hourStrokeCap;

let clockRadius = 200;

let hourHandsTaper = 6;
let hourHandLength = 195;
let hourHandOffset = 80;
let hourHandStartWidth = 20;

let minuteHandsTaper = 6;
let minuteHandLength = 155;
let minuteHandOffset = 80;
let minuteHandStartWidth = 20;

let secondHandsTaper = 2;
let secondHandLength = 155;
let secondHandOffset = 80;
let secondHandStartWidth = 10;

function setup(){
  createCanvas(500, 500);
  angleMode(DEGREES);
  minuteStrokeColor = color(30,30,30);
  minuteStrokeCap = SQUARE;

  hourStrokeColor = color(30,30,30);
  hourStrokeCap = SQUARE;
}

function draw(){
  background(255);
  strokeCap(SQUARE);

  //ticks of the clock
  for (let i = 0; i < 60; i++){
    push();
    translate(width/2, height/2);
    rotate(map(i,0,60,0,360));
    if(i===0 || i%5 ===0){
      //hours
      strokeWeight(hourStrokeWeight);
      fill(hourStrokeColor);
      line(0,clockRadius-hourStrokeLength,0,clockRadius);
    } else{
      strokeWeight(minuteStrokeWeight);
      fill(minuteStrokeColor);
      line(0, clockRadius-minuteStrokeLength,0,clockRadius);
    }
    pop();
  }

  //hours hand
  push();
  fill(30,30,30);
  translate(width/2,height/2);
  let hr = hour();
  let hourAngle = map(hr, 0,12,0,360);
  rotate(hourAngle+270);
  beginShape();
  vertex(-hourHandOffset, -hourHandStartWidth/2);
  vertex(hourHandLength,- hourHandStartWidth/2+3);
  vertex(hourHandLength, hourHandStartWidth/2-3);
  vertex(-hourHandOffset, hourHandStartWidth/2);
  endShape();
  pop();

  //miute hand
  push();
  fill(30,30,30);
  translate(width/2,height/2);
  let mn = minute();
  let minuteAngle = map(mn,0,60,0,360);
  rotate(minuteAngle+270);
  beginShape(); //i didnt use taper because it wouldnt fid on the line same values used
  vertex(-minuteHandOffset, -minuteHandStartWidth/2);
  vertex(minuteHandLength,-minuteHandStartWidth/2+3);
  vertex(minuteHandLength,minuteHandStartWidth/2-3);
  vertex(-minuteHandOffset,minuteHandStartWidth/2);
  endShape();
  pop();

  push();
  fill("red");
  let sc = second();
  let secondAngle = map(sc, 0, 60, 0, 360);
  translate(width/2, height/2);
  rotate(secondAngle+270);
  beginShape(); //used taper here to aknowledge it is there
  vertex(-secondHandOffset, - secondHandStartWidth/2);
  vertex(secondHandLength, - secondHandStartWidth/2 + secondHandsTaper/2);
  vertex(secondHandLength, secondHandStartWidth/2 - secondHandsTaper/2);
  vertex(-secondHandOffset, secondHandStartWidth/2);
  endShape();
  ellipse(0,0,15,15);
  ellipse(secondHandLength-25/2, 0, 25, 25);
  pop();
}
