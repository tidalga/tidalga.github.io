var genBtn = document.getElementById("genBtn");
var upBtn = document.getElementById("upBtn");
var cArtType = document.getElementById("type");
var cArtEmoji = document.getElementById("typeEmoji");
var cArtAffix = document.getElementById("affix");
var cArtAffixVals = document.getElementById("affixVals");
var cArtLvl = document.getElementById("lvl");
var cArtAffixUps = document.getElementById("affixUps");
var moneySpent = document.getElementById("moneySpent");
var invBorder = document.getElementById("invBorder");

const stats = {
    "total": -1,
    "currIdx": 0,
    "lastIdx": -1,
    "resinSpent": 0,
    "moraSpent": 0,
    "artifacts": []
}
const typeEmojis = {
    "Flower of Life": "🌸",
    "Plume of Death": "🪶",
    "Sands of Eon": "⌛",
    "Goblet of Eonothem": "🏺",
    "Circlet of Logos": "👑"
}
const mainAffixValues = {
    "HP": 717,
    "ATK": 47,
    "HP%": 7.0,
    "ATK%": 7.0,
    "DEF%": 8.7,
    "Energy Recharge%": 7.8,
    "Elemental Mastery": 28,
    "Pyro DMG Bonus%": 7.0,
    "Geo DMG Bonus%": 7.0,
    "Dendro DMG Bonus%": 7.0,
    "Cryo DMG Bonus%": 7.0,
    "Hydro DMG Bonus%": 7.0,
    "Anemo DMG Bonus%": 7.0,
    "Electro DMG Bonus%": 7.0,
    "Physical DMG Bonus%": 8.7,
    "Healing Bonus%": 5.4,
    "CRIT Rate%": 4.7,
    "CRIT DMG%": 9.3,
}
const minorAffixValues = {
    "HP": [209.13, 239.00, 268.88, 298.75],
    "ATK": [13.62, 15.56, 17.51, 19.45],
    "DEF": [16.20, 18.52, 20.83, 23.15],
    "HP%": [4.08, 4.66, 5.25, 5.83],
    "ATK%": [4.08, 4.66, 5.25, 5.83],
    "DEF%": [5.10, 5.83, 6.56, 7.29],
    "Elemental Mastery": [16.32, 18.65, 20.98, 23.31],
    "Energy Recharge%": [4.53, 5.18, 5.83, 6.48],
    "CRIT Rate%": [2.72, 3.11, 3.50, 3.89],
    "CRIT DMG%": [5.44, 6.22, 6.99, 7.77],
}
const upgradeCosts = [16300, 28425, 42425, 66150, 117175];
const suffixes = ["", "K", "M", "B", "T", "Qd", "Qn"];
const storageElms = ["resinSpent", "moraSpent", "total", "artifacts"];

/**==========[OVERALL HELPER FUNCTIONS]==========*/
function rng(a,b){
    if(a != 0){
        return a + Math.floor(Math.random() * b);
    }
    return Math.floor(Math.random() * (b+1));
    
}
//Helper function for getMinorAffixes
function contains(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i].type == value){
            return true;
        }
    }
    return false;
}
function round(val, decimals){
    return Math.round(val * 10**decimals)/10**decimals;
}
function format(val){
    let temp = val;
    let suffixIdx = 0;
    while(temp/1000 >= 1){
        suffixIdx++;
        temp = temp/1000;
    }
    return round(temp, 2) + suffixes[suffixIdx];
}
function updateIdx(idx){
    stats.lastIdx = stats.currIdx;
    stats.currIdx = idx;
}

/**==========[ARTIFACT FUNCTIONS]==========*/
function getType(num){
    let type = "";
    switch(num){
        case 1:
            type = "Flower of Life";
            break;
        case 2:
            type = "Plume of Death";
            break;
        case 3:
            type = "Sands of Eon";
            break;
        case 4:
            type = "Goblet of Eonothem";
            break;
        case 5:
            type = "Circlet of Logos";
            break;
    }
    return type;
}

function getMainAffix(type){
    let affix = [];
    let num = 0;

    if(type == "Flower of Life"){
        affix.push("HP");
    }
    else if(type == "Plume of Death"){
        affix.push("ATK");
    }
    else if(type == "Sands of Eon"){
        num = rng(1,30);
        if(num >= 7 && num <= 14){
            affix.push("HP%");
        }
        else if(num >= 15 && num <= 22){
            affix.push("ATK%");
        }
        else if(num >= 23 && num <= 30){
            affix.push("DEF%");
        }
        else if(num >= 1 && num <= 3){
            affix.push("Energy Recharge%");
        }
        else if(num >= 4 && num <= 6){
            affix.push("Elemental Mastery");
        }
    }
    else if(type == "Goblet of Eonothem"){
        num = rng(1,400);
        if(num >= 171 && num <= 247){
            affix.push("HP%");
        }
        else if(num >= 248 && num <= 324){
            affix.push("ATK%");
        }
        else if(num >= 325 && num <= 400){
            affix.push("DEF%");
        }
        else if(num >= 11 && num <= 30){
            affix.push("Pyro DMG Bonus%");
        }
        else if(num >= 31 && num <= 50){
            affix.push("Geo DMG Bonus%");
        }
        else if(num >= 51 && num <= 70){
            affix.push("Dendro DMG Bonus%");
        }
        else if(num >= 71 && num <= 90){
            affix.push("Cryo DMG Bonus%");
        }
        else if(num >= 91 && num <= 110){
            affix.push("Hydro DMG Bonus%");
        }
        else if(num >= 111 && num <= 130){
            affix.push("Anemo DMG Bonus%");
        }
        else if(num >= 131 && num <= 150){
            affix.push("Electro DMG Bonus%");
        }
        else if(num >= 151 && num <= 170){
            affix.push("Physical DMG Bonus%");
        }
        else if(num >= 1 && num <= 10){
            affix.push("Elemental Mastery");
        }
    }
    else if(type == "Circlet of Logos"){
        num = rng(1,50);
        if(num >= 18 && num <= 28){
            affix.push("ATK%");
        }
        else if(num >= 29 && num <= 39){
            affix.push("HP%");
        }
        else if(num >= 40 && num <= 50){
            affix.push("DEF%");
        }
        else if(num >= 3 && num <= 7){
            affix.push("CRIT Rate%");
        }
        else if(num >= 8 && num <= 12){
            affix.push("CRIT DMG%");
        }
        else if(num >= 13 && num <= 17){
            affix.push("Healing Bonus%");
        }
        else if(num >= 1 && num <= 2){
            affix.push("Elemental Mastery");
        }
    }
    affix.push(mainAffixValues[affix[0]]);

    return affix;
}

function getMinorAffixes(mainAffix){
    let affixes = [];
    let num;

    while(affixes.length < 4){
        num = rng(1,44);
        if(num >= 27 && num <= 32){
            if(mainAffix != "HP" && !contains(affixes, "HP")){
                num = rng(0,3);
                affixes.push({
                    type: "HP",
                    value: minorAffixValues["HP"][num]
                });
            }
        }
        else if(num >= 33 && num <= 38){
            if(mainAffix != "ATK" && !contains(affixes, "ATK")){
                num = rng(0,3);
                affixes.push({
                    type: "ATK",
                    value: minorAffixValues["ATK"][num]
                });
            }
        }
        else if(num >= 39 && num <= 44){
            if(mainAffix != "DEF" && !contains(affixes, "DEF")){
                num = rng(0,3);
                affixes.push({
                    type: "DEF",
                    value: minorAffixValues["DEF"][num]
                });
            }
        }
        else if(num >= 7 && num <= 10){
            if(mainAffix != "HP%" && !contains(affixes, "HP%")){
                num = rng(0,3);
                affixes.push({
                    type: "HP%",
                    value: minorAffixValues["HP%"][num]
                });
            }
        }
        else if(num >= 11 && num <= 14){
            if(mainAffix != "ATK%" && !contains(affixes, "ATK%")){
                num = rng(0,3);
                affixes.push({
                    type: "ATK%",
                    value: minorAffixValues["ATK%"][num]
                });
            }
        }
        else if(num >= 15 && num <= 18){
            if(mainAffix != "DEF%" && !contains(affixes, "DEF%")){
                num = rng(0,3);
                affixes.push({
                    type: "DEF%",
                    value: minorAffixValues["DEF%"][num]
                });
            }
        }
        else if(num >= 19 && num <= 22){
            if(mainAffix != "Energy Recharge%" && !contains(affixes, "Energy Recharge%")){
                num = rng(0,3);
                affixes.push({
                    type: "Energy Recharge%",
                    value: minorAffixValues["Energy Recharge%"][num]
                });
            }
        }
        else if(num >= 23 && num <= 26){
            if(mainAffix != "Elemental Mastery" && !contains(affixes, "Elemental Mastery")){
                num = rng(0,3);
                affixes.push({
                    type: "Elemental Mastery",
                    value: minorAffixValues["Elemental Mastery"][num]
                });
            }
        }
        else if(num >= 1 && num <= 3){
            if(mainAffix != "CRIT Rate%" && !contains(affixes, "CRIT Rate%")){
                num = rng(0,3);
                affixes.push({
                    type: "CRIT Rate%",
                    value: minorAffixValues["CRIT Rate%"][num]
                });
            }
        }
        else if(num >= 4 && num <= 6){
            if(mainAffix != "CRIT DMG%" && !contains(affixes, "CRIT DMG%")){
                num = rng(0,3);
                affixes.push({
                    type: "CRIT DMG%",
                    value: minorAffixValues["CRIT DMG%"][num]
                });
            }
        }
    }

    return affixes;
}

function generate(){
    //Determining Type
    let type = getType(rng(1,5));
    //Determining Main Affix
    let affix = getMainAffix(type);
    //Determining Minor Affixes
    let minorAffixes = getMinorAffixes(affix[0]);
    
    stats.artifacts.push({
        type: type,
        affix: affix[0],
        minorAffixes: {
            mA1: {
                type: minorAffixes[0].type,
                baseVal: minorAffixes[0].value,
                value: minorAffixes[0].value,
                upgrades: 0
            },
            mA2: {
                type: minorAffixes[1].type,
                baseVal: minorAffixes[1].value,
                value: minorAffixes[1].value,
                upgrades: 0
            },
            mA3: {
                type: minorAffixes[2].type,
                baseVal: minorAffixes[2].value,
                value: minorAffixes[2].value,
                upgrades: 0
            },
            mA4: {
                type: minorAffixes[3].type,
                baseVal: minorAffixes[3].value,
                value: minorAffixes[3].value,
                upgrades: 0
            },
        },
        baseVal: affix[1],
        value: affix[1],
        level: 0
    });

    stats.total++;
    stats.resinSpent += 20;
}

function upgrade(){
    let currArt = stats.artifacts[stats.currIdx];
    let num = rng(1,4);
    let num2 = rng(0,3);
    let mult;

    if(currArt.level != 20){
        currArt.level += 4;
        mult = currArt.level / 4;
        currArt.value = currArt.baseVal + currArt.baseVal * (17/15 * mult);
        currArt.minorAffixes["mA" + num].upgrades++;
        currArt.minorAffixes["mA" + num].value += currArt.minorAffixes["mA" + num].baseVal * (10-num2)/10;
        stats.moraSpent += upgradeCosts[mult - 1];
    }
}

/**==========[DISPLAY FUNCTIONS]==========*/
function display(){
    let minorAffixString = "";
    let minorAffixUps = "";
    let minorAffix;

    //Type + emoji
    cArtType.innerHTML = stats.artifacts[stats.currIdx].type;
    cArtEmoji.innerHTML = typeEmojis[stats.artifacts[stats.currIdx].type];
    
    //Main + minor affixes
    cArtAffix.innerHTML = stats.artifacts[stats.currIdx].affix + " (" + round(stats.artifacts[stats.currIdx].value, 1);
    if(stats.artifacts[stats.currIdx].affix != "ATK" && stats.artifacts[stats.currIdx].affix != "HP" && stats.artifacts[stats.currIdx].affix != "Elemental Mastery"){
        cArtAffix.innerHTML += "%";
    }
    cArtAffix.innerHTML += ")";
    for(let i = 1; i < 5; i++){
        minorAffix = stats.artifacts[stats.currIdx].minorAffixes["mA" + i].type;
        minorAffixString += minorAffix + " (" + round(stats.artifacts[stats.currIdx].minorAffixes["mA" + i].value, 2);
        if(minorAffix != "ATK" && minorAffix != "HP" && minorAffix != "DEF" && minorAffix != "Elemental Mastery"){
            minorAffixString += "%";
        }
        minorAffixString += ")";
        if(i != 4){
            minorAffixString += "<br>";
        }   
    }
    cArtAffixVals.innerHTML = minorAffixString;

    //Level + minor affix upgrades
    cArtLvl.innerHTML = "Lvl: " + stats.artifacts[stats.currIdx].level;
    for(let i = 1; i < 5; i++){
        minorAffixUps += stats.artifacts[stats.currIdx].minorAffixes["mA" + i].upgrades;
        if(i != 4){
            minorAffixUps += "<br>";
        }  
    }
    cArtAffixUps.innerHTML = minorAffixUps;

    //Resources spent
    moneySpent.innerHTML = "Resin spent: " + format(stats.resinSpent) + "<br>Mora spent: " + format(stats.moraSpent);
    
}

//Helper function for addToInv
function resetDiv(div){
    if(stats.lastIdx != -1 && stats.lastIdx != stats.currIdx){
        let oldDiv = document.getElementById("art " + stats.lastIdx);
        oldDiv.style.backgroundColor = "white";
    }
    div.style.backgroundColor = "rgb(255, 255, 120)";
}

function addToInv(idx){
    const div = document.createElement("div");
    const mainAffix = document.createElement("span");
    const artEmoji = document.createElement("emoji");
    const affixes = [];

    //Adding elements and properties to div
    div.id = "art " + idx;
    div.classList.add("invArt");
    if(stats.artifacts[idx].affix == "Energy Recharge%"){
        mainAffix.innerHTML = "ER%";
    }
    else if(stats.artifacts[idx].affix == "Elemental Mastery"){
        mainAffix.innerHTML = "EM";
    }
    else if(stats.artifacts[idx].affix.includes("Bonus")){
        mainAffix.innerHTML = stats.artifacts[idx].affix.split(" ", 1)[0] + "%";
    }
    else{
        mainAffix.innerHTML = stats.artifacts[idx].affix;
    }
    artEmoji.innerHTML = typeEmojis[stats.artifacts[idx].type];
    div.appendChild(mainAffix);
    div.appendChild(artEmoji);
    //Initializing elements for minor affixes
    for(let i = 0; i < 4; i++){
        affixes.push(document.createElement("smol"));
        affixes[i].innerHTML = stats.artifacts[idx].minorAffixes["mA" + (i + 1)].type;
        div.appendChild(affixes[i]);
    }
    //Adding event listeners to div
    div.addEventListener("click", function(){
        let idx = div.id.split(" ")[1];
        if(idx != stats.currIdx){
            updateIdx(idx);
            display();
            resetDiv(div);
        }
    });
    div.addEventListener("mouseenter", function(){div.style.backgroundColor = "rgb(255, 255, 120)"});
    div.addEventListener("mouseleave", function(){
        if(div.id.split(" ")[1] != stats.currIdx){
            div.style.backgroundColor = "white";
        }
    });
    //Changing color of div + assigning div to main div
    resetDiv(div);
    invBorder.appendChild(div);
}

/**==========[DATA SAVING FUNCTIONS]==========*/
function save(){
    for(let i = 0; storageElms[i] != "artifacts"; i++){
        localStorage.setItem("artifactsim_" + storageElms[i], stats[storageElms[i]]);
    }
    localStorage.setItem("artifactsim_artifacts", JSON.stringify(stats["artifacts"]));
}

function fetchSave(){
    let temp;
    for(let i = 0; i < storageElms.length; i++){
        temp = localStorage.getItem("artifactsim_" + storageElms[i]);
        if(temp != null){
            if(storageElms[i] == "artifacts"){
                stats[storageElms[i]] = JSON.parse(temp);
            }
            else{
                stats[storageElms[i]] = Number(temp);
            }
        }
        else{
            if(storageElms[i] == "artifacts"){
                localStorage.setItem("artifactsim_" + storageElms[i], "[]");
            }
            else{
                localStorage.setItem("artifactsim_" + storageElms[i], "");
            }
        }
    }
}

function loadInv(){
    for(let i = 0; i < stats.total; i++){
        addToInv(i);
        updateIdx(i);
        if(i > 0){
            resetDiv(document.getElementById("art " + (i - 1)));
        }
    }
    if(stats.total > 0){
        resetDiv(document.getElementById("art " + (stats.total - 1)));
    }
}


/**==========[EVENTS]==========*/
fetchSave();
loadInv();
if(stats.total != -1){
    display();
}

genBtn.onclick = function(){
    console.time("Runtime for 1 artifact");
    for(let i = 0; i < 1; i++){
        generate();
        addToInv(stats.total);
        updateIdx(stats.total);
        resetDiv(document.getElementById("art " + stats.currIdx));
    }
    save();
    display();
    console.timeEnd("Runtime for 1 artifact");
};
upBtn.onclick = function(){
    upgrade();
    save();
    display();
};