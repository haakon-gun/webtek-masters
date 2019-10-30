import { load, UnexpectedArgumentError } from "../scripts/utilities.js";

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
