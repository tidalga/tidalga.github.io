/*
NOTE: This project contains other JavaScript files within [scripts/]
Other additions present in index.html and style.css
*/

/*==========[q5.js FUNCTIONS]==========*/
function preload(){
    beatmaps[beatmaps.currMap].audio = loadSound(beatmaps[beatmaps.currMap].audiopath);
    beatmaps[beatmaps.currMap].audio.volume = 0.125;
}

function setup(){
    createCanvas(canvasWidth, canvasHeight);
    canvasSetup();
    domVarsSetup();
    circleSetup();
    noLoop();
}

function keyPressed(){
    let time = calcTime();
    let pos = calcHitPos(mouseX, mouseY);
    registerHit(time, pos);
};

function draw(){
    background(0);
    updateBoard(calcHitPos(mouseX, mouseY));
}