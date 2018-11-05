//define the canvas and the Color mode in the setup function
//additional set no stroke to the
function setup(){
    createCanvas(500,500);
    colorMode(HSB,width,height,100);
//    rectMode(CENTER);
//    noCursor();
    noStroke();
}


function draw(){
  //define the variables for every frame
    var numberOfCols = mouseX+1,
        numberOfRows = mouseY+1,
        stepX = width/numberOfCols,
        stepY = height/numberOfCols;

    //
    for(var gridX=0; gridX<width; gridX+=stepX){

        for(var gridY=0; gridY<height; gridY+=stepY){
            fill(gridX,height-gridY,100);
            rect(gridX, gridY, stepX, stepY);
        }

    }


}

function keyPressed(){
    if(key=='S'){
        saveCanvas(gd.timestamp() + " _MouseX_" + mouseX + "_MouseY_" + mouseY, 'png');
    }

}
