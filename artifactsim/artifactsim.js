var genBtn = document.getElementById("genBtn");
var cArtType = document.getElementById("type");
var cArtAffix = document.getElementById("mainAffix");
var cArtMinorAffixes = document.getElementById("minorAffixes");

const artifacts = [];
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
var total = 0;

/**==========[OVERALL HELPER FUNCTIONS]==========*/
function rng(a,b){
    return a + Math.floor(Math.random() * b);
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
    
    artifacts.push({
        type: type,
        affix: affix[0],
        minorAffixes: {
            mA1: {
                type: minorAffixes[0].type,
                value: minorAffixes[0].value,
                upgrades: 0
            },
            mA2: {
                type: minorAffixes[1].type,
                value: minorAffixes[1].value,
                upgrades: 0
            },
            mA3: {
                type: minorAffixes[2].type,
                value: minorAffixes[2].value,
                upgrades: 0
            },
            mA4: {
                type: minorAffixes[3].type,
                value: minorAffixes[3].value,
                upgrades: 0
            },
        },
        value: affix[1],
        level: 0
    });

    display();
}

/**==========[DISPLAY FUNCTIONS]==========*/
function display(){
    let minorAffixString = "";

    cArtType.innerHTML = "Artifact: " + artifacts[total].type;
    cArtAffix.innerHTML = "Main affix: " + artifacts[total].affix + " (" + artifacts[total].value;
    if(artifacts[total].affix != "ATK" && artifacts[total].affix != "HP" && artifacts[total].affix != "Elemental Mastery"){
        cArtAffix.innerHTML += "%";
    }
    cArtAffix.innerHTML += ")";

    for(let i = 1; i < 5; i++){
        minorAffixString += artifacts[total].minorAffixes["mA" + i].type + " (" + artifacts[total].minorAffixes["mA" + i].value + ")";
        if(i != 4){
            minorAffixString += "<br>";
        }
    }
    cArtMinorAffixes.innerHTML = "Minor affixes: <br><br>" + minorAffixString;
    console.log("Number of artifacts: " + ++total);
}

/**
function massProduce(){
    //const start = Date.now();
    console.time("Execution Time");
    for(let i = 0; i < 1000; i++){
        generate();
    }
    //const end = Date.now();
    //console.log("Time taken: " + (end - start) + "ms");
    console.timeEnd("Execution Time");
}*/

genBtn.onclick = generate;
