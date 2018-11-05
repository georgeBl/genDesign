//runs before all the other functions
function preload(){
  img = loadImage("data/pic1.jpg");
}

//run once, when the script is loaded
function setup(){
  createCanvas(600,600);
}

//run in a loop while the page is opened
function draw(){
//load the pixel array for the image.
    img.loadPixels();

  console.log(img.pixels[1]);
  console.log(img);

  noLoop();
}
