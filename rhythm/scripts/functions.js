/*==========[WEBSITE FUNCTIONS]==========*/
function canvasSetup(){
    let canvas = document.getElementsByClassName("q5Canvas");
    let div = document.getElementById("mainDiv");
    div.appendChild(canvas[0]);

    let button = document.getElementById("startBtn");
    button.onclick = function(){
        circDataSetup();
        statsSetup();
        startOrStopSong(button);
        timeSetup();
    }
}

function updateStats(grade){
    let element = elems.stats[grade];
    let oldHTML = element.innerHTML.split(" ");
    element.innerHTML = (Number(oldHTML[0]) + 1) + " " + oldHTML[1];
}

function statsSetup(){
    let statsList = document.getElementsByClassName("stats");
    for(var element of statsList){
        let oldHTML = element.innerHTML.split(" ");
        element.innerHTML = "0 " + oldHTML[1];
    }
}

function domVarsSetup(){
    elems.stats.perfect = document.getElementById("perfectStat");
    elems.stats.great = document.getElementById("greatStat");
    elems.stats.good = document.getElementById("goodStat");
    elems.stats.miss = document.getElementById("missStat");
}

/*==========[DRAWING FUNCTIONS]==========*/
function circleSetup(){
    fill(40);
    stroke(220);   
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            circData.boardCircles[i*3+j] = new hitCircle((j+1.5)*width/5, (i+0.5)*height/3, circData.circRadius);
        }
    }
}

function drawBoard(pos){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(i*3+j == pos){
                strokeWeight(8);
            }
            else{
                strokeWeight(0);
            }
            circData.boardCircles[i*3+j].drawCircle();
        }
    }
}

function drawHitCircles(time){
    let notes = beatmaps[beatmaps.currMap].notes;
    push();
    fill(220);
    opacity(0.5);
    for(let i = circData.level.firstIdx; i <= circData.level.lastIdx; i++){
        if(i >= circData.level.currIdx){
            let note = beatmaps[beatmaps.currMap].notes[i];
            let radius = map(time, note.startTime, note.hitTime, 0, circData.circRadius);
            if(radius > circData.circRadius){
                radius = circData.circRadius;
            }
            circData.boardCircles[notes[i].pos].drawCircleRad(radius);
        }
    }
    pop();
}

function updateBoard(mousePos){
    let time = calcTime();
    calcCurrIndicies(time);
    drawBoard(mousePos);
    drawHitCircles(time);
}

/*==========[GAME FUNCTIONS]==========*/
function circDataSetup(){
    circData.currCircles = [];
    circData.numHits = 0;
    circData.level.firstIdx = 0;
    circData.level.lastIdx = 0;
    circData.level.currIdx = 0;
}

function timeSetup(){
    startUpTime = (new Date()).getTime();
    oldTime = startUpTime;
}

function calcTime(){
    let newTime = (new Date()).getTime();
    let timeSinceStart = newTime - startUpTime;
    return timeSinceStart/1000;//Convert to seconds
}

function startOrStopSong(button){
    if(beatmaps[beatmaps.currMap].audio.isPlaying()){
        beatmaps[beatmaps.currMap].audio.stop();
        noLoop();
        button.innerHTML = "Restart";
    }
    else{
        beatmaps[beatmaps.currMap].audio.play();
        button.innerHTML = "Stop";
        loop();
    }
}

function calcHitPos(xMousePos, yMousePos){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            let currHitCircle = circData.boardCircles[i*3+j];
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

function calcCurrIndicies(time){
    let low = circData.level.firstIdx;
    let high = circData.level.lastIdx;
    let notes = beatmaps[beatmaps.currMap].notes;
    //Incrememnt old notes out
    while(low < notes.length && notes[low].endTime < time){
        low++;
    }
    //Incremement new notes in
    while(high < notes.length-1 && notes[high+1].startTime <= time){
        high++;
    }
    //Update values in circData
    circData.level.firstIdx = low;
    circData.level.lastIdx = high;
}

function determineType(time, pos){
    let currHit = {time: time, grade: "null"};
    if(pos != -1 && circData.level.currIdx < beatmaps[beatmaps.currMap].notes.length){
        let currNote = beatmaps[beatmaps.currMap].notes[circData.level.currIdx];
        let startTime = currNote.startTime;
        let hitTime = currNote.hitTime;
        let endTime = currNote.endTime;
        if(time < startTime){
            currHit.grade = "null";
            if(time > endTime){
                circData.level.currIdx++;
            }
        }
        //Perfect timing window: +- 0 <= x < 0.3 sec
        else if(time < hitTime + beatmaps[beatmaps.currMap].perfectTime && 
            time > hitTime - beatmaps[beatmaps.currMap].perfectTime){
            currHit.grade = "perfect";
            circData.level.currIdx++;
        }
        //Great timing window: +- 0.3 <= x < 0.6 sec
        else if(time < hitTime + beatmaps[beatmaps.currMap].greatTime && 
            time > hitTime - beatmaps[beatmaps.currMap].greatTime){
            currHit.grade = "great";
            circData.level.currIdx++;
        }
        //Good timing window: +- 0.6 <= x < 0.9 sec
        else if(time < hitTime + beatmaps[beatmaps.currMap].goodTime && 
            time > hitTime - beatmaps[beatmaps.currMap].goodTime){
            currHit.grade = "good";
            circData.level.currIdx++;
        }
        else{
            currHit.grade = "miss";
            circData.level.currIdx++;
        }
    }
    return currHit.grade;
}

function registerHit(time, pos){
    let hitType = determineType(time, pos);
    if(!(hitType == "null")){
        updateStats(hitType);
    }
    //console.log("Time: " + time + ", Pos: " + pos, "Type: " + hitType);
}