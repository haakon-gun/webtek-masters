import { load, UnexpectedArgumentError } from "../scripts/utilities.js";

console.log("Loading...");


const template = document.createElement("template");
// modify the template's content
template.content.append(document.createElement("div"));
// add it to the document so it is parsed and ready to be used
document.head.append(template);



const header = document.querySelector("#header");


async function insertHeaderAndFooter() {
    let dom = null;

    try {
        dom = await load("DOM", "outer.html");
    } catch (error) {
        console.warn(error);
        return;
    }

    document.title = dom.title + "s " + document.title.toLowerCase();

    document.head.appendChild(dom.querySelector("#css-link"));
    document.head.appendChild(dom.querySelector("#favicon"));

    const header = dom.querySelector("#website-header");

    const headerSpacer = document.createElement("div");
    headerSpacer.id = "website-header-spacer";
    headerSpacer.style.padding = "0";
    headerSpacer.style.margin = "0";

    // Inspector input:
    // document.querySelector("#website-header").style.height = 200 + "px";

    const spacerSetter = (mutations, observer) => {
        for (const mutation of mutations) {
            console.log(mutation);

            if (mutation.type === "attributes" && mutation.attributeName == "style") {
                if (headerSpacer.offsetHeight == header.offsetHeight) {
                    return;
                }
                headerSpacer.style.height = header.offsetHeight + "px";
            }
        }
    };

    const observer = new MutationObserver(spacerSetter);
    observer.observe(header, { attributes: true });

    document.body.prepend(headerSpacer);
    document.body.prepend(header);
    document.body.appendChild(dom.querySelector("#website-footer"));

    headerSpacer.style.height = 80/*header.offsetHeight*/ + "px";
}

insertHeaderAndFooter();

console.log("Loaded");
