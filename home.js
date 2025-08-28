var proj = document.getElementById("proj");
var clickerBtn = document.getElementById("clickerBtn");
var artSimBtn = document.getElementById("artSimBtn");
var minerBtn = document.getElementById("minerBtn");
var projImg = document.getElementById("projImg");
var projHeader = document.getElementById("projHeader");
var projBody = document.getElementById("projBody");
var projLink = document.getElementById("projLink");

var projects = {
    "clicker": {
        header: "Click the button and watch your money grow!",
        body: "I made this game back in my senior year of high school and is one of my first ever website-based projects. The game itself is very simple and utilizes simple HTML objects such as buttons and body/header elements. From this project, I was able to learn how to use HTML, CSS, and JavaScript to a basic degree along with learning how to use browser cookies to save game data.",
        img: "https://static.wikia.nocookie.net/gensin-impact/images/f/fc/Yanfei_Card.png"
    },
    "artifactsim": {
        header: "Simulate the painful grind to your heart's content!",
        body: "I have yet to create this project, but I already have many ideas planned for this. I plan on making each of the artifacts using JavaScript objects along with making an inventory system that utilizes sorting algorithms.",
        img: "https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Item_Entangling_Bloom.png"
    },
    "miner": {
        header: "Mine your way to riches!",
        body: "Worked on this for like a day and gave up lol",
        img: "https://static.wikia.nocookie.net/gensin-impact/images/9/90/Character_Kachina_Full_Wish.png"
    }
};

function showProj(name){
    projHeader.innerText = projects[name].header;
    projBody.innerHTML = projects[name].body;
    projLink.setAttribute("href", name);
    projImg.setAttribute("src", projects[name].img);
}

clickerBtn.onclick = function(){showProj("clicker")};
artSimBtn.onclick = function(){showProj("artifactsim")};
minerBtn.onclick = function(){showProj("miner")};

showProj("clicker");

/*
Update Log:
8/27/25 - Home page revamp
    Created nice dividers between each of my projects using lots of divs (so professional wow)
    Added links to my miner game and link to future artifact simulator
    Added basic descriptions to each project (most of which are still placeholders)
*/
