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
            {startTime: 0, pos: 1},
            {startTime: 1, pos: 2},
            {startTime: 2, pos: 3}
        ]
    }
};
//Circle data
var boardCircles = [];
var currCircles = [];
var circRadius = 125;
//Miscellaneous