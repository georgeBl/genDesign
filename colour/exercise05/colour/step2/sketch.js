
var img;
//create an empty array that will store the pixels shown on screen.
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

  //set the number of pixels to be displayed on screen. -> number of tiles
  var tileCount = 20;

  //calculate the witdh of each tile/pixel box
  var rectSize = width / tileCount
  //empty the array every new loop to display only the pixels wanted
  colors = [];

  //a loop that run from  top to bottom /left to right
  //this loop will sample the image pixels and save them in the color array
  //the color array will be used then to display the pixels on screen
  for (var gridY = 0; gridY < tileCount; gridY++) {
    //for each pixel from left to right run this script.
    for (var gridX = 0; gridX < tileCount; gridX++) {
      //working out a pixel value for x and y
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);

      //calculate the position of the pixels in the pixels array
      //the resul is the position of color red for each pixel selected
      var i = (py * img.width + px) * 4;
      //creating a color object using the index calculated on top
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      //add the color object to the colors array
      colors.push(c);
    }
  }

  console.log(colors);

  noLoop();
}
