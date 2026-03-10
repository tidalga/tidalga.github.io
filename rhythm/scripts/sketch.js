/*NOTE: This project contains other JavaScript files within [scripts/]*/

/*==========[q5.js FUNCTIONS]==========*/
function preload(){
    beatmaps[beatmaps.currentMap].audio = loadSound(beatmaps[beatmaps.currentMap].audiopath);
}

function setup(){
    createCanvas(canvasWidth, canvasHeight);
    gameSetup();
    circleSetup();
    beatmaps[beatmaps.currentMap].audio.play();
}

q5.keyPressed = function(){
    let time = calcTime();
    let pos = calcHitPos(mouseX, mouseY);
    registerHit(time, pos);
};

function draw(){
    background(0);
    updateBoard(calcHitPos(mouseX, mouseY));
}