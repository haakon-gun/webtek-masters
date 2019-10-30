import { load } from "../scripts/utilities.js";

console.log("Loading...");


const template = document.createElement("template");
// modify the template's content
template.content.append(document.createElement("div"));
// add it to the document so it is parsed and ready to be used
document.head.append(template);



const header = document.querySelector("#header");


function insertHeaderAndFooter() {
    try {
        load("DOM", "outer.html", (dom) => {
            document.head.appendChild(dom.querySelector("#css-link"));

            document.body.prepend(dom.querySelector("#website-header"));
            document.body.appendChild(dom.querySelector("#website-footer"));
        });
    } catch (error) {
        console.warn(error);
    }
}

insertHeaderAndFooter();


console.log("Loaded");







/*
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
*/
