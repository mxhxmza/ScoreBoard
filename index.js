//for home team
let homecount = 0;
let homescore = document.getElementById("homescore");

function home1(){
    homecount += 1;
    homescore.textContent = homecount;
    updateleader();
}

function home2(){
    homecount += 2;
    homescore.textContent = homecount;
    updateleader();
}

function home3(){
    homecount += 3;
    homescore.textContent = homecount;
    updateleader();
}


//for away team
let awaycount = 0;
let awayscore = document.getElementById("awayscore");

function away1(){
    awaycount += 1;
    awayscore.textContent = awaycount;
    updateleader();
}

function away2(){
    awaycount += 2;
    awayscore.textContent = awaycount;
    updateleader();
}

function away3(){
    awaycount += 3;
    awayscore.textContent = awaycount;
    updateleader();
}

//new game
function newgame(){
    homecount = 0;
    awaycount = 0;
    homescore.textContent = homecount;
    awayscore.textContent = awaycount;
    updateleader();
}

//leader
let leader = document.getElementById("leader");
leader.textContent = "Leader: TIE";
function updateleader(){
    if (homecount > awaycount){
        leader.textContent = "Leader: HOME";
    }
    else if (homecount < awaycount){
        leader.textContent = "Leader: AWAY";
    }
    else{
        leader.textContent = "Leader: TIE";
    }
}