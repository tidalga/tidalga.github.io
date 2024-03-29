var money = 0;
var sDollars = 0;
var ups = 0;
var upPrice = 100;
var upPoints = 0;
var maxUpPoints = 100;
var xp = 0;
var tier = 1;
var tierReq = 10;
var totalUps = 0;

var upsOption = "Max";
var testing = false;
if (localStorage.getItem("clicker_money") != null){
    money = Number(localStorage.getItem("clicker_money"));
}
else{
    localStorage.setItem("clicker_money", "0");
}
if (localStorage.getItem("clicker_sDollars") != null){
    sDollars = Number(localStorage.getItem("clicker_sDollars"));
}
else{
    localStorage.setItem("clicker_sDollars", "0");
}
if (localStorage.getItem("clicker_ups") != null){
    ups = Number(localStorage.getItem("clicker_ups"));
}
else{
    localStorage.setItem("clicker_ups", "0");
}
if (localStorage.getItem("clicker_upPrice") != null){
    upPrice = Number(localStorage.getItem("clicker_upPrice"));
}
else{
    localStorage.setItem("clicker_upPrice", "100");
}
if (localStorage.getItem("clicker_upPoints") != null){
    upPoints = Number(localStorage.getItem("clicker_upPoints"));
}
else{
    localStorage.setItem("clicker_upPoints", "0");
}
if (localStorage.getItem("clicker_xp") != null){
    xp = Number(localStorage.getItem("clicker_xp"));
}
else{
    localStorage.setItem("clicker_xp", "0");
}
if (localStorage.getItem("clicker_tier") != null){
    tier = Number(localStorage.getItem("clicker_tier"));
}
else{
    localStorage.setItem("clicker_tier", "1");
}
if (localStorage.getItem("clicker_totalUps") != null){
    totalUps = Number(localStorage.getItem("clicker_totalUps"));
}
else{
    localStorage.setItem("clicker_totalUps", "0");
}

//tier dependant variables
if(tier == 2){
    tierReq = 50;
    //maxUpPoints = 100;
}
else if(tier == 3){
    tierReq = 100;
    maxUpPoints = 1000;
}

const tierBenefitsArray = [" - Unlock Upgrade Points<br> - Double base click value",
 " - Increase max Upgrade Points to 1000<br> - Double base click value",
 " - COMING SOON"];

var moneyElem = document.getElementById("money");
var upsElem = document.getElementById("ups")
var upsBElem = document.getElementById("upsButton");
var upsValElem = document.getElementById("upsVal");
var totalUpsValElem = document.getElementById("totalUpsVal");
var xpElem = document.getElementById("xp");
var xpBarElem = document.getElementById("xpBar");
var tierElem = document.getElementById("tier");
var tierInfoElem = document.getElementById("tierInfo");
var tierBElem = document.getElementById("tierUp");
var tierBenefitsElem = document.getElementById("tierBenefits");
var upPointsInfoElem = document.getElementById("upPointsInfo");
var convertBElem = document.getElementById("convert");
var upPointsElem = document.getElementById("upPoints");
var sDollarsElem = document.getElementById("sDollars");
var sDollarsInfoElem = document.getElementById("sDollarsInfo")
const uOps = document.getElementsByClassName("uOps");

tierInfoElem.hidden = true;
upPointsInfoElem.hidden = true;
sDollarsInfoElem.hidden = true;

//other functions
function sNotation(value){
    let temp = value;
    let exp = 0;
    for (let i = 0; temp >= 10; i++){
        temp = temp / 10;
        exp++;
    }
    if(value < 1){
        return value;
    }
    return (Math.ceil(temp*1000)/1000)+"e"+exp;
}

function suffix(value){
    if (value >= 1000000000000){
        return sNotation(value);
    }
    else if (value >= 1000000000){
        return Math.ceil(value/1000000)/1000 + "B";
    }
    else if (value >= 1000000){
        return Math.ceil(value/1000)/1000 + "M";
    }
    else if (value >= 1000){
        return Math.ceil(value)/1000 + "K";
    }
    else {
        return Math.ceil(value*10)/10;
    }
}

function refresh(){
    moneyElem.innerHTML = "$" + suffix(money);
    moneyElem.title = "$" + mpc() + " per click";
    upsElem.innerHTML = suffix(ups);
    upsElem.title = "you have " + ups + " Upgrades";
    upsValElem.innerHTML = "Value per Upgrade: $" + suffix(1 * (1 + upPoints/10));
    totalUpsValElem.innerHTML = "Total value of Upgrades: $" + suffix(ups * (1 + upPoints/10));
    if(upsOption == "Max"){
    	upsBElem.innerHTML = "buy " + maxUps() + " upgrades ($" + suffix(multiPrice(maxUps())) + ")";
    }
    else{
    	upsBElem.innerHTML = "buy " + upsOption + " upgrades ($" + suffix(multiPrice(upsOption)) + ")";
    }
    upsBElem.title = "cost: $" + Math.ceil(upPrice);
    tierElem.innerHTML = "Tier: " + tier;
    if(tier >= 3){
        xpElem.innerHTML = "Maxed!"
        xpBarElem.value = tierReq;
        xpBarElem.max = tierReq;
        sDollarsInfoElem.hidden = false;
    }
    else{
        xpElem.innerHTML = xp + "/" + tierReq;
        xpBarElem.value = xp;
        xpBarElem.max = tierReq;
    }
    if(xp >= tierReq){
        tierBenefitsElem.innerHTML = tierBenefitsArray[tier - 1];
        tierInfoElem.hidden = false;
    }
    else{
        tierInfoElem.hidden = true;
    }
    if(tier >= 2){
        upPointsInfoElem.hidden = false;
    }
    upPointsElem.innerHTML = "You have " + upPoints + "/" + maxUpPoints + " Upgrade Points";
    if(upPoints == maxUpPoints){
        convertBElem.innerHTML = "Maxed!";
    }
    else{
        convertBElem.innerHTML = "Convert!";
    }
    sDollarsElem.innerHTML = "You have " + sDollars + " Silver Dollars";
}

function save(){
    if(testing != true){
        localStorage.setItem("clicker_money", money);
        localStorage.setItem("clicker_sDollars", sDollars)
        localStorage.setItem("clicker_ups", ups);
        localStorage.setItem("clicker_upPrice", upPrice);
        localStorage.setItem("clicker_upPoints", upPoints);
        localStorage.setItem("clicker_xp", xp);
        localStorage.setItem("clicker_tier", tier);
        localStorage.setItem("clicker_totalUps", totalUps);
    }
}

function setUps(moners){
    testing = true;
    ups = moners;
}

function clearData(){
    money = 0;
    sDollars = 0;
    ups = 0;
    upPrice = 100;
    upPoints = 0;
    maxUpPoints = 100;
    xp = 0;
    tier = 1;
    tierReq = 10;
    totalUps = 0;
    if (localStorage.getItem("clicker_money") != null){
        localStorage.removeItem("clicker_money");
    }
    if (localStorage.getItem("clicker_sDollars") != null){
        localStorage.removeItem("clicker_sDollars");
    }
    if (localStorage.getItem("clicker_ups") != null){
        localStorage.removeItem("clicker_ups");
    }
    if (localStorage.getItem("clicker_upPrice") != null){
        localStorage.removeItem("clicker_upPrice");
    }
    if (localStorage.getItem("clicker_upPoints") != null){
        localStorage.removeItem("clicker_upPoints");
    }
    if (localStorage.getItem("clicker_xp") != null){
        localStorage.removeItem("clicker_xp");
    }
    if (localStorage.getItem("clicker_tier") != null){
        localStorage.removeItem("clicker_tier");
    }
    if (localStorage.getItem("clicker_totalUps") != null){
        localStorage.removeItem("clicker_totalUps");
    }
    console.log("ur data be gone");
    refresh();
}


//game functions
function mpc(){
    let base = 1;
    let tierMult = 2**(tier - 1);
    let upsVal = ups * (1 + upPoints/10);
    return base * tierMult + upsVal;
}

function rng(a,b){
    return Math.floor(Math.random()*(b+1-a))+a;
}

function click(){
    money += mpc();
    if(tier >= 3 && rng(1,100) == 1){
        sDollars += 1;
    }
    if(testing != true){
        localStorage.setItem("clicker_money", money);
        localStorage.setItem("clicker_sDollars", sDollars);
    }
    refresh();
}

function setUpsOption(option){
	upsOption = option;
    refresh();
}

function upgrade(){
	if (upsOption == "Max"){
    	if (money >= multiPrice(maxUps())){
        	let newUps = maxUps();
            money -= multiPrice(newUps);
            ups += newUps;
            xp += newUps;
            totalUps += newUps;
            upPrice *= 1.1**newUps;
            refresh();
            save();
        }
    }
    else{
    	if (money >= multiPrice(upsOption)){
            money -= multiPrice(upsOption);
            ups += upsOption;
            xp += upsOption;
            totalUps += upsOption;
            upPrice *= 1.1**upsOption;
            refresh();
            save();
        }
    } 
}

function multiPrice(ups){
	let sum = 0;
    for(let i = 0; i <= ups - 1; i++){
    	sum += upPrice * 1.1**i;
    }
    return sum;
}

function maxUps(){
    let ups = 1;
    while(money >= multiPrice(ups+1)){
    	ups++;
    }
    return ups;
}

function tierUp(){
    if (xp >= tierReq && tier != 3){
        money = 0;
        xp -= tierReq;
        ups = 0;
        upPrice = 100;
        if (tier == 1){
            tierReq = 50;
        }
        else if (tier == 2){
            tierReq = 100;
            maxUpPoints = 1000;
        }
        tier++;
        refresh();
        save();
    }
}

function convert(){
    if (tier >= 2 && ups >= 1 && upPoints < maxUpPoints){
        if((upPoints + ups) > maxUpPoints){
            upPoints = maxUpPoints;
        }
        else{
            upPoints += ups;
        }
        money = 0;
        xp = 0;
        ups = 0;
        upPrice = 100;
        refresh();
        save();
    }
}
refresh();
document.getElementById("daButton").onclick = click;
upsBElem.onclick = upgrade;
tierBElem.onclick = tierUp;
convertBElem.onclick = convert;
uOps[0].onclick = function(){setUpsOption(1)};
uOps[1].onclick = function(){setUpsOption(5)};
uOps[2].onclick = function(){setUpsOption(10)};
uOps[3].onclick = function(){setUpsOption("Max")};

/*
update log:
1/xx/24 - tier 3
    added silver dollars
        1% chance of earning per click, used to buy in shop
    more quality of life changes
        tier progress bar now uses the html "progress" tag (basically it moves now)
        multi upgrade options 5, 10, and Max (unlock with silver dollars)

1/15/24 - upgrade tiers (no way, an actual gameplay update)
    added upgrade tiers
        each Upgrade purchase gives 1 XP, leveling up increases your Upgrade Tier
        Upgrade Tiers unlock more content (so far the max Tier is 2)
    added Upgrade Points (Tier 2 required)
        increases value of Upgrades by $0.1 per Upgrade Point
    quality of life changes
        most game values now shows tenths place decimal when value < 1000

1/8/24 - huge overhaul
    layout change
        everything is now separted into divs (everything isn't stacked on top of each other anymore)
    price scaling change
        upgrade price now increases by simply * 1.1 compounding
    rebirthing goes bye-bye
        gonna change it into something different
    suffixes added to large numbers
        K for 1,000+, M for 1,000,000+, etc. Scientific notation also added for larger numbers that don't have suffixes yet 

1/4/24 - saving update
    everything actually saves now?! (i should have done this update months ago lol)
    i'll expand on this game eventually...

7/27/23 - in the beginning...
    the basic functions 
        clicking to earn money, upgrade at $100 (scales by 100 + oldPrice * 1.1)
        rebirth at 10 mpc (scales by 10), increases starting mpc by 1 and increases money earned per upgrade by 1
*/
