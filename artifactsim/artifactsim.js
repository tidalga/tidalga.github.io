var genBtn = document.getElementById("genBtn");
var cArtType = document.getElementById("type");
var cArtAffix = document.getElementById("mainAffix");
var cArtMinorAffixes = document.getElementById("minorAffixes");

const artifacts = [];
const affixWeights = {
    HP: 6,
    ATK: 6,
    DEF: 6,
    HP_per: 4,
    ATK_per: 4,
    DEF_per: 4,
    ER_per: 4,
    EM: 4,
    CR: 3,
    CD: 3
}
var counter = 0;

function rng(a,b){
    return a + Math.floor(Math.random() * b);
}

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
    let affix = "";
    let num = 0;

    if(type == "Flower of Life"){
        affix = "HP";
    }
    else if(type == "Plume of Death"){
        affix = "ATK";
    }
    else if(type == "Sands of Eon"){
        num = rng(1,30);
        if(num >= 1 && num <= 3){
            affix = "Energy Recharge";
        }
        else if(num >= 4 && num <= 6){
            affix = "Elemental Mastery";
        }
        else if(num >= 7 && num <= 14){
            affix = "HP";
        }
        else if(num >= 15 && num <= 22){
            affix = "ATK";
        }
        else if(num >= 23 && num <= 30){
            affix = "DEF";
        }
    }
    else if(type == "Goblet of Eonothem"){
        num = rng(1,400);
        if(num >= 1 && num <= 10){
            affix = "Elemental Mastery";
        }
        else if(num >= 11 && num <= 30){
            affix = "Pyro DMG Bonus";
        }
        else if(num >= 31 && num <= 50){
            affix = "Geo DMG Bonus";
        }
        else if(num >= 51 && num <= 70){
            affix = "Dendro DMG Bonus";
        }
        else if(num >= 71 && num <= 90){
            affix = "Cryo DMG Bonus";
        }
        else if(num >= 91 && num <= 110){
            affix = "Hydro DMG Bonus";
        }
        else if(num >= 111 && num <= 130){
            affix = "Anemo DMG Bonus";
        }
        else if(num >= 131 && num <= 150){
            affix = "Electro DMG Bonus";
        }
        else if(num >= 151 && num <= 170){
            affix = "Physical DMG Bonus";
        }
        else if(num >= 171 && num <= 247){
            affix = "HP";
        }
        else if(num >= 248 && num <= 324){
            affix = "ATK";
        }
        else if(num >= 325 && num <= 400){
            affix = "DEF";
        }
    }
    else if(type == "Circlet of Logos"){
        num = rng(1,50);
        if(num >= 1 && num <= 2){
            affix = "Elemental Mastery";
        }
        else if(num >= 3 && num <= 7){
            affix = "CRIT Rate";
        }
        else if(num >= 8 && num <= 12){
            affix = "CRIT DMG";
        }
        else if(num >= 13 && num <= 17){
            affix = "Healing Bonus";
        }
        else if(num >= 18 && num <= 28){
            affix = "ATK";
        }
        else if(num >= 29 && num <= 39){
            affix = "HP";
        }
        else if(num >= 40 && num <= 50){
            affix = "DEF";
        }
    }

    return affix;
}

function getMinorAffixes(mainAffix){
    let affixes = [];
    let num;

    while(affixes.length < 4){
        num = rng(1,44);
        if(num >= 1 && num <= 3){
            if(mainAffix != "CRIT Rate%" && affixes.indexOf("CRIT Rate%") == -1){
                affixes.push("CRIT Rate%");
            }
        }
        else if(num >= 4 && num <= 6){
            if(mainAffix != "CRIT DMG%" && affixes.indexOf("CRIT DMG%") == -1){
                affixes.push("CRIT DMG%");
            }
        }
        else if(num >= 7 && num <= 10){
            if(mainAffix != "HP%" && affixes.indexOf("HP%") == -1){
                affixes.push("HP%");
            }
        }
        else if(num >= 11 && num <= 14){
            if(mainAffix != "ATK%" && affixes.indexOf("ATK%") == -1){
                affixes.push("ATK%");
            }
        }
        else if(num >= 15 && num <= 18){
            if(mainAffix != "DEF%" && affixes.indexOf("DEF%") == -1){
                affixes.push("DEF%");
            }
        }
        else if(num >= 19 && num <= 22){
            if(mainAffix != "Energy Recharge%" && affixes.indexOf("Energy Recharge%") == -1){
                affixes.push("Energy Recharge%");
            }
        }
        else if(num >= 23 && num <= 26){
            if(mainAffix != "Elemental Mastery" && affixes.indexOf("Elemental Mastery") == -1){
                affixes.push("Elemental Mastery");
            }
        }
        else if(num >= 27 && num <= 32){
            if(mainAffix != "HP" && affixes.indexOf("HP") == -1){
                affixes.push("HP");
            }
        }
        else if(num >= 33 && num <= 38){
            if(mainAffix != "ATK" && affixes.indexOf("ATK") == -1){
                affixes.push("ATK");
            }
        }
        else if(num >= 39 && num <= 44){
            if(mainAffix != "DEF" && affixes.indexOf("DEF") == -1){
                affixes.push("DEF");
            }
        }
    }

    return affixes;
}

function generate(){
    //Determining Type
    let currType = getType(rng(1,5));
    //console.log("The type: " + currType);
    
    //Determining Main Affix
    let currAffix = getMainAffix(currType);
    //console.log("The affix: " + currAffix);

    let currMinorAffixes = getMinorAffixes(currAffix);
    //console.log("The minor affixes: " + currMinorAffixes);
    
    artifacts.push({
        type: currType,
        affix: currAffix,
        minorAffixes: {
            mA1: currMinorAffixes[0],
            mA2: currMinorAffixes[1],
            mA3: currMinorAffixes[2],
            mA4: currMinorAffixes[3]
        },
        level: 0
    });

    display();
}

function display(){
    let minorAffixString = "";

    cArtType.innerHTML = "Artifact: " + artifacts[counter].type;
    cArtAffix.innerHTML = "Main affix: " + artifacts[counter].affix;
    for(let i = 1; i < 5; i++){
        minorAffixString += artifacts[counter].minorAffixes["mA" + i] + " | ";
    }
    cArtMinorAffixes.innerHTML = "Minor affixes: " + minorAffixString;
    console.log("Number of artifacts: " + ++counter);
}

genBtn.onclick = generate;