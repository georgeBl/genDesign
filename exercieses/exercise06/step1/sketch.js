'use strict'
//setting up the values needed to create the color array
var colorCount = 20,
    hueValues = [],
    saturationValues = [],
    brightnessValues = [];

//this value can be used in order to control the randomness
var actRandomSeed = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB,360,100,100,100);
  noStroke();
}

function draw(){
  noLoop();

  // to be edited
  // create the pallete of colours (will use 2 different primary colours and different shades)
  for(var i=0; i<=colorCount; i++){
    if(i%2 === 0){
    hueValues[i] = random(150,170);
    saturationValues[i] = 100;
    brightnessValues[i] = random(15, 100);
    }
    else{
      hueValues[i] = 195;
      saturationValues[i] = random(20,40);
      brightnessValues[i] = 100;
    }
  }


}
