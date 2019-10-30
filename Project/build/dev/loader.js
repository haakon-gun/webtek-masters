console.log("Loading...");


const template = document.createElement("template");
// modify the template's content
template.content.append(document.createElement("div"));
// add it to the document so it is parsed and ready to be used
document.head.append(template);



const header = document.querySelector("#header");

const documentOMParser = new DOMParser();

function load() {

    fetch("outer.html").then((response) => response.text()).then((html) => {
        const parsedDocument = documentOMParser.parseFromString(html, 'text/html');
        //template.content.append(parsedDocument.querySelector("#header"));

        document.head.appendChild(parsedDocument.querySelector("#css-link"));
        //document.styleSheets.prepend(parsedDocument.styleSheets[0]);
        //document.querySelector('head').innerHTML += '<link rel="stylesheet" href="context.css" type="text/css"/>';

        document.body.prepend(parsedDocument.querySelector("#website-header"));
        document.body.appendChild(parsedDocument.querySelector("#website-footer"));

    }).catch((error) => {
        console.warn(error);
    });
}
/*
console.log("WHAT?! 2");
function load2() {
    try {
        const fetchResult = await fetch("context.html");
        const contextHTML = await fetchResult.text();

        const parsedDocument = new DOMParser().parseFromString(html, 'text/html');

        document.querySelector("#header").replaceWith(parsedDocument.querySelector("#header"));
        document.querySelector("#footer").replaceWith(parsedDocument.querySelector("#footer"));
    } catch (error) {
        return error.message;
    }
}*/

load();



console.log("Loaded");
