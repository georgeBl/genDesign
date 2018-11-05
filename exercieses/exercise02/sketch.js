function setup(){
    createCanvas(400,400);
    colorMode(HSB,width,height,100);
//    rectMode(CENTER);
//    noCursor();
    noStroke();
}

let stepX,
    stepY;

function draw(){

   stepX = mouseX + 1;
   stepY = mouseY + 1;

  for(let gridY = 0; gridY< height; gridY +=stepY){
    for(let gridX = 0; girdX<width; gridX +=stepX){
      fill(gridX, )
    }

  }


}

function keyPressed(){
    if(key=='S'){
        saveCanvas(gd.timestamp() + " _MouseX_" + mouseX + "_MouseY_" + mouseY, 'png');
    }

}
