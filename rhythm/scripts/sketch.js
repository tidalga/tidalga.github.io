/*NOTE: This project contains other JavaScript files within [scripts/]*/

/*==========[p5.js FUNCTIONS]==========*/
function preload(){
    beatmaps["palette"].audio = loadSound(beatmaps["palette"].audiopath);
}

function setup(){
    createCanvas(canvasWidth, canvasHeight);
    gameSetup();
    boardSetup();
    beatmaps["palette"].audio.play();
}

function keyPressed(){
    calcTime();
    let num = checkValidHit();
    registerHit(num);
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