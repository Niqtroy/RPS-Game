/*Cash the DOM *, define global variables*/
/*setTimeOut(function(){console.log("hello")}) */

let youserScore = 0;
let compScore = 0;
const youserScore_span = document.getElementById("youser-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const res_div = document.querySelector(".res > p");
const roc_div = document.getElementById("r");
const pap_div = document.getElementById("p");
const scis_div = document.getElementById("s");

function getCompSelex() {
    const selex = ['r', 'p', 's'];
    const randomFig = Math.floor(Math.random() * 3);
    return selex [randomFig];
}

function ctw(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(youserSelec, compSelex){
  const s = "youser".fontsize(3).sup();
  const c = "comp".fontsize(3).sup();
  youserScore++; 
  youserScore_span.innerHTML = youserScore;
  compScore_span.innerHTML = compScore;
  const youserSelec_div = document.getElementById(youserSelec);
  res_div.innerHTML = `${ctw(youserSelec)}${s} Knocks ${ctw(compSelex)}${c} . U Win!!!`;
  youserSelec_div.classList.add('g-g');
  setTimeout(function() { youserSelec_div.classList.remove('g-g') }, 300);
}
function lose(youserSelec, compSelex) {
    const s = "youser".fontsize(3).sup();
    const c = "comp".fontsize(3).sup();
    compScore++;
    youserScore_span.innerHTML = youserScore;
    compScore_span.innerHTML = compScore;
    const youserSelec_div = document.getElementById(youserSelec);
    res_div.innerHTML = `${ctw(youserSelec)}${s} Got Knocked ${ctw(compSelex)}${c} . Sorry!!!`;
    youserSelec_div.classList.add('r-g');
    setTimeout(function() { youserSelec_div.classList.remove('r-g') }, 300);
}
function draw(youserSelec, compSelex) {
    const s = "youser".fontsize(3).sup();
    const c = "comp".fontsize(3).sup();
    youserScore_span.innerHTML = youserScore;
    compScore_span.innerHTML = compScore;
    const youserSelec_div = document.getElementById(youserSelec);
    res_div.innerHTML = `${ctw(youserSelec)}${s} pulled same as comp ${ctw(compSelex)}${c} . draw!!!`;
    youserSelec_div.classList.add('gy-g');
    setTimeout(function() { youserSelec_div.classList.remove('gy-g') }, 300);

}

function game(youserSelec){
    const compSelex = getCompSelex();
    switch (youserSelec + compSelex){
        case "rs":
        case "pr":
        case "sp":
           win(youserSelec, compSelex);
           break;
        case "rp":
        case "ps":
        case "sr":
            lose(youserSelec, compSelex);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(youserSelec, compSelex); 
            break;
    }
}

function main(){
    roc_div.addEventListener('click', function() {
        game("r");
    });
    pap_div.addEventListener('click', function () {
        game("p");
    });
    scis_div.addEventListener('click', function () {
        game("s");
    });
}
main();

