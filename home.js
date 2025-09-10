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
        body: "I started working on this during Summer 2025. The game utilizes multi-layer JavaScript objects to store all of the values of each artifact. Later on I plan on making an inventory system that utilizes sorting algorithms. From this project, I was able to learn techniques on how to optimize code.",
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
9/9/25 - Artifact Simulator v0.4
    Artifact main and minor affixes can now be upgraded
        Minor affixes that are a percentage now have the % sign
    Total amount of mora and resin you would have spent now displayed
    Added emoji fallback font (you're welcome Nunners)
    Temporary fix for webpage layout of buttons
    (Hopefully now I can work on the inventory system...)

9/4/25 - Artifact Simulator v0.3
    Added some alright design
        Text and buttons are no longer the default design
        Arranged artifact stats to be easier to read
        Added emojis for each artifact type
        Placeholder column and button for upgrading artifacts
    Updated description of project on home page
    Fixed rng function (my bad...)

9/3/25 - Artifact Simulator v0.2
    Added main and minor affix values (forgot I never added it even for the main affix lol)
    Tried to optimize the code a bit (10% faster WOOOO)
    Minor affixes now displayed on separate lines for ez readability

9/2/25 - Artifact Simulator v0.1
    Super bare bones right now
        very little functionality right now
        like no CSS
    Currently generates everything of an artifact except for minor affix values and displays only 1

8/27/25 - Home page revamp
    Created nice dividers between each of my projects using lots of divs (so professional wow)
    Added links to my miner game and link to future artifact simulator
    Added basic descriptions to each project (most of which are still placeholders)
*/