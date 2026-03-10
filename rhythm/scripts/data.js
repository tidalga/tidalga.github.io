/*==========[VARIABLES AND DICTIONARIES]==========*/

/*----[Canvas variables]----*/
const canvasWidth = window.innerWidth*0.75;//3072
const canvasHeight = window.innerHeight*0.95;//1516

/*----[Game variables]----*/
//Time data
var date;
var startUpTime = 0;
var oldTime = 0;
//Beatmap data
var beatmaps = {
    currentMap: "palette",
    palette: {
        bpm: 110,
        audio: null,
        audiopath: "/rhythm/audios/Kirara Magic - Palette.wav",
        notes: [
            {startTime: 0, hitTime: 2, endTime: 4, pos: 0},
            {startTime: 2, hitTime: 4, endTime: 6, pos: 1},
            {startTime: 4, hitTime: 6, endTime: 8, pos: 2},
            {startTime: 6, hitTime: 8, endTime: 10, pos: 5},
            {startTime: 8, hitTime: 10, endTime: 12, pos: 4},
            {startTime: 10, hitTime: 12, endTime: 14, pos: 3},
        ]
    }
};
//Circle data
var circData = {
    hitCircles: [],
    currCircles: [],
    circRadius: 125,
    speed: 1
}