/*NOTE: This project contains other JavaScript files within [scripts/]*/

/*==========[p5.js FUNCTIONS]==========*/
function setup(){
    createCanvas(canvasWidth, canvasHeight);
    gameSetup();
    drawBoard();
}

function keyPressed(){
    calcTime();
    checkValidHit();
}

function mouseClicked(){

}

function draw(){
    background(0);
    updateBoard();
    // circle(circX,circY,circRadius);
    // circX-=5;
    // if(circX <= 0-circRadius/2){
    //     circX = canvasWidth;
    // }
}