/*==========[DRAWING FUNCTIONS]==========*/
function circleSetup(){
    fill(40);
    stroke(220);   
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            circData.hitCircles[i*3+j] = new hitCircle((j+1.5)*width/5, (i+0.5)*height/3, circData.circRadius);
        }
    }
}

function drawBoard(mousePos){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(i*3+j == mousePos){
                strokeWeight(8);
            }
            else{
                strokeWeight(0);
            }
            circData.hitCircles[i*3+j].drawCircle();
        }
    }
}

function updateBoard(pos){
    drawBoard(pos);
}

/*==========[GAME FUNCTIONS]==========*/
function gameSetup(){
    date = new Date();
    startUpTime = date.getTime();
    oldTime = startUpTime;
}

function calcTime(){
    date = new Date();
    let newTime = date.getTime();
    let timeSinceStart = newTime - startUpTime; 
    console.log("Since last: " + (newTime - oldTime));
    //console.log("Since start: " + timeSinceStart);
    oldTime = newTime;
    return timeSinceStart;
}

function calcHitPos(xMousePos, yMousePos){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            let currHitCircle = circData.hitCircles[i*3+j];
            let circX = currHitCircle.xPos;
            let circY = currHitCircle.yPos;
            let rad = circData.circRadius;
            if(xMousePos <= circX+rad/2 && xMousePos >= circX-rad/2 
                && yMousePos <= circY+rad/2 && yMousePos >= circY-rad/2){
                return i*3+j;
            }
        }
    }
    return -1;
}

function calcCurrCircles(){
    
}

function registerHit(time, pos){
    calcCurrCircles();
    console.log("Time: " + time + ", Pos: " + pos);
    
}