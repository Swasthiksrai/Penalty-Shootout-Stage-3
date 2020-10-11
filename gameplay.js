var score = [0,1];


var team1={
    name: "Athletic BP",
    runs: [],
    score:0
}

var team2={
    name: "Celta De Vigo",
    runs: [],
    score:0
}

window.onload = () => {
    selectToss();
    updateButtonText();
    updateNames();
    updateScore();
}

function selectToss(){
    toss = Math.round(Math.random())+1;
    console.log(toss);
}

var updateButtonText= () =>{
    var button = document.getElementById("strike-button");
    console.log(button);
    button.textContent=`${toss== 1 ? team1.name:team2.name} Kick`;
}

var updateNames = () =>
{
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-2-name").textContent = team2.name;
}

var updateScore = () =>
{
    document.getElementById("team-1-name").textContent = team1.score;
    document.getElementById("team-2-name").textContent = team2.score;
}
