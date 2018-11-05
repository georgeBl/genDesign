
var img;
var color =[];

function preload(){
  img = loadImage("data/pic1.jpg");
}

function setup(){
  createCanvas(600,600);
}

function draw(){

  img.loadPixels();
  console.log(img.pixels[1]);
  console.log(img);


  var tileCount = 20;
  var rectSize = width / tileCount

  colors = [];


  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }
  //Draw the pixels on the screen
  //initialize the first index of the colors array to 0 every time the function loops
  var i=0;
  for (var gridY = 0; gridY<tileCount;gridY++){
    for (var gridX = 0; gridX<tileCount; gridX++){
      //set the fill of each pixel with the corespondent pixel
      fill(colors[i]);
      //draw the pixel unsing the rectangle function
      rect(gridX*rectSize, gridY*rectSize, rectSize, rectSize);
      i++;
    }
  }
  console.log(colors);
  noLoop();
}
