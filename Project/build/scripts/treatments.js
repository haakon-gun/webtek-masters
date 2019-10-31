/*
import { load } from "../scripts/utilities.js";





async function loadContent() {
    try {
        const json = await load("JSON", "resources/treatments.json");

        console.log(json)

        console.log(json[0]);
        console.log(json[1]);
        console.log(json[2]);

        console.log(json[1]["title"]);
        console.log(json[1]["text"]);

    } catch (error) {
        console.error(error);
    }
}


loadContent();
*/


wfewef

/*
for (const x of treatments) {
    createTitleDiv(treatments[x]);
}

function createTitleDiv (x) {
    var titleText = document.createElement("h2");
    titleText.className = "button";
    populateTreatmentTitle(treatments[x]);
    document.getElementById("titleName").appendChild(titleText);
}

function populateTreatmentTitle(x) {
  //treatmentsTitle.innerHTML = treatments.title;
}
*/



/* FUNKE DÅRLIG:

gridContainer = document.querySelector(".grid-container");

function createTitleDiv(title) {
  let node = document.createElement("div");
  node.className = "button";

  let titleText = document.createElement("h2");
  titleName.classname = "title";
  titleName.onclick = function() {populateTreatmentTitle(title);}
  titleName.appendChild(document.createTextNode(title.titleName));

  node.appendChild(titleName);
  gridContainer.appendChild(node);
}

function populateTreatmentTitle(title) {

  console.log("får ikke til detta her");
}






document.getElementById("en").addEventListener("click", function(){
  if (document.getElementById("infoEn").style.display = "none") {
    document.getElementById("infoEn").style.display = "block";
  }
}
);
document.getElementById("to").addEventListener("click", function(){
  document.getElementById("infoTo").style.display = "block";
  document.getElementById("infoTo").innerHTML += treatments.treatment1["text"];
}
);

document.getElementById("en").innerHTML += treatments.treatment0["title"];
document.getElementById("to").innerHTML += treatments.treatment1["title"];
document.getElementById("tre").innerHTML += treatments.treatment2["title"];

document.getElementById("infoEn").innerHTML += treatments.treatment0["text"];
*/


/*
gridContainer = document.querySelector(".grid-container");

for (treatment in treatments) {
  createTitleDiv(treatments[treatment]);
}

function createTitleDiv(treatment) {
  let node = document.createElement("div");
  node.className = "treatmentTitles";

  let titles = document.createElement("h2");
  titles.className = "titles";
  titles.onclick = function() {populateTreatmentTitle(treatment);}
  titles.appendChild(document.createTextNode(treatment.titles));
}
*/

/*
function createInfoDiv(treatment) {
  let node = document.createElement("div");
  node.className = "treatmentInfo";
  let text = document.createElement("p");
  text.className = "info";
  text.onclick = ;
}


function populateTreatmentTitle(treatment) {
  modal.style.display = "block";
  treatmentsTitle.innerHTML = infoAboutTreatments.title;
  console.log("får ikke til detta her");
}




/*
document.getElementById("1").addEventListener("click", function(){
  document.getElementById("hull").style.display = "block";
  document.getElementById("tann").style.display = "none";
}
);

document.getElementById("2").addEventListener("click", function(){
  document.getElementById("hull").style.display = "none";

  var x = document.getElementById("tann");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
);

var x = document.getElementById("hull");

if (document.getElementById("hull").style.display = "block") {
  return
}
else {
  if (x.style.display === "none") {
    x.style.display = "block";
    console.log("Trym ER KUL")
  } else {
    x.style.display = "none";
  }
}*/
