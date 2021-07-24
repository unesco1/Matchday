var teamOne = document.getElementById("teamOne");
var teamTow = document.getElementById("teamTow");
var teamLeft = document.querySelector(".teamfull");
var teamRight = document.querySelector(".teamfull2");
var send = document.getElementById("send");
var click = document.getElementById("click");
var myCatg = document.getElementById("categorie");
var gazon = document.querySelector(".gazon");
var vs = document.querySelector(".vs");
var match = document.querySelector('.match');
var textArea = document.querySelectorAll(".twoTeams");
var team = textArea[0].value.split("\n");
var textAreaLeague = document.querySelectorAll(".oneLeague");
var myConvert = document.getElementById('convert');
var firstLeague = document.getElementById('firstLeague');
var text = "";
var textVs = "";
var textTags = "";
var textLeagues = "";
var lesMatchs = document.querySelector('.les-matchs');
var myTags = document.querySelector('.tags');
var download = document.getElementById("download");

console.log(team.length / 3)

for (var i = 0; i < team.length; i++) {

    text += "<p>" + team[i] + "</p>";
}
    myConvert.innerHTML = text;

for (var j = 1; j < team.length; j++) {

    textVs += "<p>" + team[j++] + " vs " + team[j++] + "</p>";
}
    lesMatchs.innerHTML = textVs;

 for (var k = 1; k < team.length; k++) {

    textTags += "<span>" + team[k++] + " vs " + team[k++] + ", </span>";
}
    myTags.innerHTML = textTags;   

//var league = textAreaLeague[0].value.split("\n");

/*for (var m = 0; m < league.length; m++) {

    textLeagues += `<p>${league[m]}</p>`;
}
    firstLeague.innerHTML = textLeagues;

    console.log(firstLeague.firstElementChild.textContent);
*/
click.onclick = () => {

    var firstContent = document.getElementById('capture');

    teamOne.value = myConvert.children[1].textContent;
    teamTow.value = myConvert.children[2].textContent;
    myCatg.value = myConvert.firstElementChild.textContent;    

    teamLeft.style.background = "url('images/" + teamOne.value + ".png') no-repeat scroll center center";
    teamLeft.style.backgroundSize = "180px 180px";
    
    teamRight.style.background = "url('images/" + teamTow.value + ".png') no-repeat scroll center center";
    teamRight.style.backgroundSize = "180px 180px";
    
    gazon.style.background = "url('couverture/" + myCatg.value + "2.jpg') no-repeat";
    
    vs.style.background = "rgba(100,100,100,0.5) url('couverture/" + myCatg.value + ".jpg') no-repeat scroll center 50%";
    vs.style.backgroundSize = "105px 105px";

    match.innerHTML = "<p style='font-size:10px'>" + teamOne.value + " vs " + teamTow.value + " - " + myCatg.value + " 2021-2022</p>";

    myConvert.children[2].remove();
    myConvert.children[1].remove();
    myConvert.firstElementChild.remove();
 };



/*
console.log(lesMatchs);
lesMatchs.innerHTML += "<p>" + team[0] + " vs " + team[1] + "</p>"
                    + "<p>" + team[2] + " vs " + team[3] + "</p>"
                    + "<p>" + team[4] + " vs " + team[5] + "</p>"
                    + "<p>" + team[6] + " vs " + team[7] + "</p>"
                    + "<p>" + team[8] + " vs " + team[9] + "</p>"
                    + "<p>" + team[10] + " vs " + team[11] + "</p>"
                    + "<p>" + team[12] + " vs " + team[13] + "</p>"
                    + "<p>" + team[14] + " vs " + team[15] + "</p>"
                    + "<p>" + team[16] + " vs " + team[17] + "</p>"
                    + "<p>" + team[18] + " vs " + team[19] + "</p>"
                    + "<p>" + team[20] + " vs " + team[21] + "</p>"
                    + "<p>" + team[22] + " vs " + team[23] + "</p>"

var myTags = document.querySelector('.tags');

myTags.innerHTML = "<h2>My Tags</h2>"
                    + "<p>" + team[0] + " vs " + team[1] + ", " 
                     + team[2] + " vs " + team[3] + ", "
                     + team[4] + " vs " + team[5] + ", "
                     + team[6] + " vs " + team[7] + ", "
                     + team[8] + " vs " + team[9] + ", "
                     + team[10] + " vs " + team[11] + ", "
                     + team[12] + " vs " + team[13] + ", "
                     + team[14] + " vs " + team[15] + ", "
                     + team[16] + " vs " + team[17] + ", "
                     + team[18] + " vs " + team[19] + ", "
                     + team[20] + " vs " + team[21] + ", "
                     + team[22] + " vs " + team[23] + ", "
                     + team[24] + " vs " + team[25] + ", "
                     + team[26] + " vs " + team[27] + ", "
                     + team[28] + " vs " + team[29] + "</p>"
*/
