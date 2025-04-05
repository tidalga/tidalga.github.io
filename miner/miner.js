var stone = 0;
var dirt = 0;

var oreHP = 5;
var currOre = 1;
var oreList = {
	1: {
    	name: "dirt",
        count: 0,
       	maxHP: 3,
        color: "#8B4513",
    },
    2: {
        name: "stone",
    	count: 0,
        maxHP: 5,
        color: "gray",
    }
}; 

var currOreD = document.getElementById("currOre");
var oreHPD = document.getElementById("oreHPD");
var stoneCt = document.getElementById("stoneCt");
var dirtCt = document.getElementById("dirtCt");
var inSaveBox = document.getElementById("inSaveBox");
var inSaveBtn = document.getElementById("inSaveBtn");
var ore = document.getElementById("ore");
var oreC = ore.getContext("2d");

oreC.fillStyle = "gray";
oreC.fillRect(0,0,ore.width,ore.height);
generate();

function rng(a, b){
	return a + Math.floor(Math.random() * b);
}

function mine(){
	if(oreHP > 1){
    	oreHP--;
    }
    else{
    	oreList[currOre].count++;
        generate();
    }
 	quickRef();
}

function generate(){
	let val = rng(1,5);
    if(val <= 2){
        updateOre(1);
    }
    else{
        updateOre(2);
    }
    refresh();
}

function updateOre(o){
    currOre = o;
	oreHP = oreList[o].maxHP;
    oreC.fillStyle = oreList[o].color;
	oreC.fillRect(0,0,ore.width,ore.height);
}

function loadSave(){
    for(i = 1; i <= Object.keys(oreList).length; i++){
        if(localStorage.getItem(oreList[i].name) != null){
            oreList[i].count = localStorage.getItem(oreList[i].name);
        }
    }
}

function save(){
    for(i = 1; i <= Object.keys(oreList).length; i++){
        localStorage.setItem(oreList[i].name,oreList[i].count);
    }
}

function inputSave(){
    inSaveBox = document.getElementById("inSaveBox");
    const save = inSaveBox.value.split(",");
    for(i = 1; i <= Object.keys(oreList).length; i++){
        oreList[i].count = save[i-1];
    }
    refresh();
}

function quickRef(){
    oreHPD.innerHTML = oreHP + "/" + oreList[currOre].maxHP;
}

function refresh(){
    quickRef();
	currOreD.innerHTML = oreList[currOre].name;
    let x;
    for(i = 1; i <= Object.keys(oreList).length; i++){
        x = oreList[i].name;
        document.getElementById(x + "Ct").innerHTML = x + ": " + oreList[i].count;
    }
    save();
}

ore.onclick = mine;
loadSave();
//document.getElementById("inSaveBtn").onclick = inputSave;


/*
Update Log:
4/4/2025 - Backend upgrade
    Game saves now + text box to input save data (separate data with commas)
    Rewrote how ore data is accessed to be easily expandable
    Added some CSS (still very in the works)

3/26/2025 - Ok so basically I made this game
	You can mine ores!!! (you only got dirt and stone so far)
	Also don't mind the css (it's super bare bones dw)
*/