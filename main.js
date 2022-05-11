let teamOne = document.getElementById("teamOne");
let teamTow = document.getElementById("teamTow");
let teamLeft = document.querySelector(".teamfull");
let teamRight = document.querySelector(".teamfull2");
let send = document.getElementById("send");
let next = document.getElementById("next");
let mySearch = document.getElementById("search");
let myCatg = document.getElementById("categorie");
let gazon = document.querySelector(".gazon");
let vs = document.querySelector(".vs");
let match = document.querySelector('.match');
let textArea = document.querySelectorAll(".twoTeams");
let team = textArea[0].value.split("\n");
let textAreaLeague = document.querySelectorAll(".oneLeague");
let myConvert = document.getElementById('convert');
let firstLeague = document.getElementById('firstLeague');
let text = "";
let textVs = "";
let textTags = "";
let textLeagues = "";
let lesMatchs = document.querySelector('.les-matchs');
let myTags = document.querySelector('.tags');
let download = document.getElementById("download");

console.log(team.length / 3);

for (let i = 0; i < team.length; i++) {

    text += `<p>${team[i]}</p>`;
}
    myConvert.innerHTML = text;

for (let j = 1; j < team.length; j++) {

    textVs += `<p>${team[j++]} vs ${team[j++]}</p>`;
}
    lesMatchs.innerHTML = textVs;

for (let k = 1; k < team.length; k++) {

    textTags += `<span>${team[k++]} vs ${team[k++]} highlights football, </span>`;
}
    myTags.innerHTML = textTags;   

next.onclick = () => {

    teamOne.value = myConvert.children[1].textContent;
    teamTow.value = myConvert.children[2].textContent;
    myCatg.value = myConvert.firstElementChild.textContent;    

    teamLeft.style.background = `url('images/${teamOne.value}.png') no-repeat scroll center center`;
    teamLeft.style.backgroundSize = "180px 180px";
    
    teamRight.style.background = `url('images/${teamTow.value}.png') no-repeat scroll center center`;
    teamRight.style.backgroundSize = "180px 180px";
    
    gazon.style.background = `url('couverture/${myCatg.value}2.jpg') no-repeat`;
    
    vs.style.background = `rgba(100,100,100,0.5) url('couverture/${myCatg.value}.jpg') no-repeat scroll center 50%`;
    vs.style.backgroundSize = "105px 105px";

    match.innerHTML = `<p style='font-size:10px'>${teamOne.value} vs ${teamTow.value} - ${myCatg.value} 2021-2022</p>`;

    myConvert.children[2].remove();
    myConvert.children[1].remove();
    myConvert.firstElementChild.remove();

};

mySearch.onclick = () => {

    teamLeft.style.background = `url('images/${teamOne.value}.png') no-repeat scroll center center`;
    teamLeft.style.backgroundSize = "180px 180px";
    
    teamRight.style.background = `url('images/${teamTow.value}.png') no-repeat scroll center center`;
    teamRight.style.backgroundSize = "180px 180px";   

    gazon.style.background = `url('couverture/${myCatg.value}2.jpg') no-repeat`;

    vs.style.background = `rgba(100,100,100,0.5) url('couverture/${myCatg.value}.jpg') no-repeat scroll center 50%`;
    vs.style.backgroundSize = "105px 105px";

    match.innerHTML = `<p style='font-size:10px'>${teamOne.value} vs ${teamTow.value} - ${myCatg.value} 2021-2022</p>`;
}