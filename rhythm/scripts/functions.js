/*==========[DRAWING FUNCTIONS]==========*/
function drawBoard(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            fill(40);
            circle((j+1)*width/5, (i+1)*height/3, circRadius);
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
    console.log("Since last: " + (newTime-oldTime));
    console.log("Total: " + (newTime-startUpTime));
    oldTime = newTime;
  
    console.log("MouseX: " + mouseX);
    console.log("MouseY: " + mouseY);
}

function checkValidHit(){
    if(mouseX <= circX+circRadius/2 && mouseX >= circX-circRadius/2 
        && mouseY <= circY+circRadius/2 && mouseY >= circY-circRadius/2){
      circX = canvasWidth+circRadius/2;
      circY = random(circRadius,canvasWidth-circRadius);
    }
}