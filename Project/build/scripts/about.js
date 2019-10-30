
employees = {
    mai: {
      name: "Mai Gunnarsli",
      title: "Tannlege",
      image: "resources/mai-kersten-gunnarsli.png",
    },
    kirsten: {
      name: "Kirsten Benedikte Aanesen",
      title: "Tannlege",
      image: "resources/kirsten-b-aanesen.png",},
    kari: {
      name: "Kari Nesse",
      title: "Tannlege",
      image: "resources/kari-nesse.png",},
    christine: {
      name: "Christine Aanesen",
      title: "Tannlege",
      image: "resources/christine-aanesen.png",},
    hanne: {
      name: "Hanne Hauge Hommedal",
      title: "Tannpleier",
      image: "resources/hanne-hommedal.png",},
    erna: {
      name: "Erna Oterholt Johnsen",
      title: "Tannhelsesekretær",
      image: "resources/erna-oterholt.png",},
    anne: {
      name: "Anne Kari Johansen",
      title: "Tannhelsesekretær",
      image: "resources/anne-kari-johansen.png",},
    marlene: {
      name: "Marlene Almli",
      title: "Tannhelsesekretær",
      image: "resources/marlene-S-Almli.png",},
    signe: {
      name: "Signe Lie",
      title: "Tannhelsesekretær",
      image: "resources/Signe-lie.png",}
}


gridContainer = document.querySelector(".grid-container");
console.log("hei")

for (employe in employees) {
  createEmployeDiv(employees[employe]);
  console.log("hei2");
}

function createEmployeDiv(employe){
  let node = document.createElement("div");
  node.className = "employees";
  let img = document.createElement("img");
  img.src = employe.image;
  img.className = "img";
  let name = document.createElement("p");
  name.className = "name";
  name.appendChild(document.createTextNode(employe.name));
  let title = document.createElement("p");
  title.className = "title";
  title.appendChild(document.createTextNode(employe.title))
  node.appendChild(img);
  node.appendChild(name);
  node.appendChild(title);
  gridContainer.appendChild(node);
}



/*
// Import error?
// HTML: <script type="module" src="scripts/about.js"></script>

import { load } from "../scripts/utilities.js";

try {
    load("JSON", "../dev/employees.json", (json) => {
        console.log(json);
    });
} catch (error) {
    console.warn(error);
}
*/
