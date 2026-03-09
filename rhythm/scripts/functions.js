/*==========[DRAWING FUNCTIONS]==========*/
function boardSetup(){   
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            boardCircles[i*3+j] = new hitCircle((j+1.5)*width/5, (i+0.5)*height/3, circRadius);
        }
    }
}

function drawBoard(){
    fill(40);
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            boardCircles[i*3+j].drawCircle();
        }
    }
}

function updateBoard(){
    drawBoard();
}

/*==========[GAME FUNCTIONS]==========*/
function gameSetup(){
    date = new Date();
    startUpTime = date.getTime();
    oldTime = date.getTime();
}

function calcTime(){
    date = new Date();
    let newTime = date.getTime();
    //console.log("Since last: " + (newTime-oldTime));
    //console.log("Total: " + (newTime-startUpTime));
    oldTime = newTime;
}

function checkValidHit(){
    // if(mouseX <= circX+circRadius/2 && mouseX >= circX-circRadius/2 
    //     && mouseY <= circY+circRadius/2 && mouseY >= circY-circRadius/2){
    //   circX = canvasWidth+circRadius/2;
    //   circY = random(circRadius,canvasWidth-circRadius);
    // }
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            let currHitCircle = boardCircles[i*3+j];
            let circX = currHitCircle.xPos;
            let circY = currHitCircle.yPos;
            if(mouseX <= circX+circRadius/2 && mouseX >= circX-circRadius/2 
                && mouseY <= circY+circRadius/2 && mouseY >= circY-circRadius/2){
                return i*3+j;
            }
        }
    }
    return -1;
}

function registerHit(value){
    console.log(value);
}