
var img;
var color =[];
var sortMode = null;
function preload(){
  img = loadImage("data/pic1.jpg");
}

function setup(){
  createCanvas(600,600);
}

function draw(){

  img.loadPixels();
  // console.log(img.pixels[1]);
  // console.log(img);


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

 //sort the colors of the array using a sort mode (defaul is null)
  gd.sortColors(colors, sortMode);

  var i=0;
  for (var gridY = 0; gridY<tileCount;gridY++){
    for (var gridX = 0; gridX<tileCount; gridX++){
      fill(colors[i]);
      rect(gridX*rectSize, gridY*rectSize, rectSize, rectSize);
      i++;
    }
  }
  // console.log(colors);
  //noLoop();
}

function keyReleased(){

  //save the canvas
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');



  //if the following keys are pressed the sort mode will change
  if(key =='5') sortMode = "null";
  if(key =='6') sortMode = gd.HUE;
  if(key =='7') sortMode = gd.SATURATION;
  if(key =='8') sortMode = gd.BRIGHTNESS;
  if(key =='9') sortMode = gd.GRAYSCALE;
  console.log(sortMode);
}
