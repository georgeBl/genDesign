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

  // ------ area tiling ------
  // count tiles
  var counter = 0;
  // row count and row height
  // var rowCount = int(random(5, 30));

  var rowCount = 15; 
  var rowHeight = height / rowCount;

  // seperate each line in parts
  for (var i = rowCount; i >= 0; i--) {
    // how many fragments
    var partCount = i + 1;
    var parts = [];

    for (var ii = 0; ii < partCount; ii++) {
      // sub fragments or not?
      if (random() < 0.075) {
        // take care of big values
        var fragments = int(random(2, 20));
        partCount = partCount + fragments;
        for (var iii = 0; iii < fragments; iii++) {
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

    // add all subparts
    var sumPartsTotal = 0;
    for (var ii = 0; ii < partCount; ii++) {
      sumPartsTotal += parts[ii];
    }

    // draw rects
    var sumPartsNow = 0;
    for (var ii = 0; ii < parts.length; ii++) {
      sumPartsNow += parts[ii];

      var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
      var y = rowHeight * i;
      var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
      var h = rowHeight;

      var index = counter % colorCount;
      var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
      fill(col);
      rect(x, y, w, h);

      counter++;
    }
  }

}
