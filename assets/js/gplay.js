/**
* Template Name: GhostKNA
* Updated: 24 07 2023 with Bootstrap v5.3.0
* Author: GhostKNA
*/


function enter(x) {
    document.getElementById("bxlps").style.color = "#e21221";
    document.getElementById("iconsvg").style.fill = "#fff";
    document.getElementById("bxlps").style.transition = "0.5s";
    document.getElementById("iconsvg").style.transition = "0.5s";
  
}

function leave(x) {
    document.getElementById("bxlps").style.color = "#fff";
    document.getElementById("iconsvg").style.fill = "#e21221"; 
    document.getElementById("bxlps").style.transition = "0.5s";
    document.getElementById("iconsvg").style.transition = "0.5s";
    
}
function enter2(x) {
    document.getElementById("bxlps").style.color = "#e21221";
    document.getElementById("iconsvg").style.fill = "#fff";
    document.getElementById("bxlps").style.transition = "0.5s";
    document.getElementById("iconsvg").style.transition = "0.5s";
  
}

function leave2(x) {
    document.getElementById("bxlps").style.color = "#fff";
    document.getElementById("iconsvg").style.fill = "#e21221";
    document.getElementById("bxlps").style.transition = "0.5s";
    document.getElementById("iconsvg").style.transition = "0.5s";
}

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
