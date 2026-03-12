/*==========[VARIABLES AND DICTIONARIES]==========*/

/*----[Canvas variables]----*/
const canvasWidth = window.innerWidth*0.75;//3072
const canvasHeight = window.innerHeight*0.95;//1516

/*----[Game variables]----*/
//Time data
var startUpTime = 0;
var oldTime = 0;
//Beatmap data
var beatmaps = {
    currMap: "palette",
    hitsound: null,
    palette: {
        bpm: 110,
        audio: null,
        audiopath: "/rhythm/audios/Kirara Magic - Palette.wav",
        notes: [

            //Measures 1-4
            {hitTime: 1, pos: 1},
            {hitTime: 2, pos: 0},
            {hitTime: 2.5, pos: 0},
            {hitTime: 3.5, pos: 2},
            {hitTime: 4, pos: 1},
            {hitTime: 4.5, pos: 1},

            {hitTime: 5, pos: 4},
            {hitTime: 6, pos: 3},
            {hitTime: 6.5, pos: 3},
            {hitTime: 8, pos: 5},
            {hitTime: 8.5, pos: 5},
            
            {hitTime: 9, pos: 3},
            {hitTime: 10, pos: 4},
            {hitTime: 10.5, pos: 4},
            {hitTime: 11.5, pos: 6},
            {hitTime: 12, pos: 3},
            {hitTime: 12.5, pos: 0},

            {hitTime: 13, pos: 1},
            {hitTime: 14, pos: 4},
            {hitTime: 14.5, pos: 4},
            {hitTime: 15.5, pos: 3},
            {hitTime: 16, pos: 3},

            //Measure 5-9
            {hitTime: 17, pos: 4},
            {hitTime: 18, pos: 3},
            {hitTime: 18.5, pos: 3},
            {hitTime: 19.5, pos: 5},
            {hitTime: 20, pos: 4},
            {hitTime: 20.5, pos: 7},

            {hitTime: 21, pos: 7},
            {hitTime: 22, pos: 6},
            {hitTime: 22.5, pos: 6},
            {hitTime: 23.5, pos: 8},
            {hitTime: 24, pos: 8},
            {hitTime: 25.5, pos: 6},

            {hitTime: 26, pos: 7},
            {hitTime: 26.5, pos: 7},
            {hitTime: 27.5, pos: 4},
            {hitTime: 28, pos: 8},
            {hitTime: 28.5, pos: 5},

            {hitTime: 29, pos: 2},
            {hitTime: 29.5, pos: 2},
            {hitTime: 31, pos: 1},
            {hitTime: 31.5, pos: 1},
            {hitTime: 33, pos: 4},
            {hitTime: 33.5, pos: 4},

            {hitTime: 34, pos: 3},

            {hitTime: 1000, pos: 3},
        ],
        perfectTime: 0.2,
        greatTime: 0.6,
        goodTime: 0.9
    }
};
//Circle data
var circData = {
    boardCircles: [],
    currCircles: [],
    mapData: {
        firstIdx: 0,
        lastIdx: 0,
        currIdx: 0,
    },
    circRadius: 175,
    qNoteLen: 0.25,
    speed: 1
}
//DOM elements
var elems = {
    stats: {
        perfect: null,
        great: null,
        good: null,
        miss: null,
    }
}