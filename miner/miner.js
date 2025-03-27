var stone = 0;
var dirt = 0;

var oreHP = 5;
var currOre = "stone";
var oreList = {
	dirt: {
    	count: 0,
       	maxHP: 3,
        color: "#8B4513",
    },
    stone: {
    	count: 0,
        maxHP: 5,
        color: "gray",
    }
}; 

var button = document.getElementById("clicker");
var currOreD = document.getElementById("currOre");
var oreHPD = document.getElementById("oreHPD");
var stoneCt = document.getElementById("stoneCt");
var dirtCt = document.getElementById("dirtCt");
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
 	refresh();
}

function generate(){
	let val = rng(1,5);
    if(val <= 2){
    	currOre = "stone";
        updateOre(currOre);
        
    }
    else{
    	currOre = "dirt";
        updateOre(currOre);
    }
    refresh();
}

function updateOre(o){
	oreHP = oreList[o].maxHP;
    oreC.fillStyle = oreList[o].color;
	oreC.fillRect(0,0,ore.width,ore.height);
}

function refresh(){
	currOreD.innerHTML = currOre;
	oreHPD.innerHTML = oreHP + "/" + oreList[currOre].maxHP;
    stoneCt.innerHTML = "Stone: " + oreList.stone.count;
    dirtCt.innerHTML = "Dirt: " + oreList.dirt.count;
}

button.onclick = mine;

/*
Update Log:
3/26/2025 - Ok so basically I made this game
	You can mine ores!!! (you only got dirt and stone so far)
	Also don't mind the css (it's super bare bones dw)
*/