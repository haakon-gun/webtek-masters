
import { hasValue, load, objectDOM, removeChildren, isDirectRelative } from "../scripts/utilities.js";


const navigationList = document.querySelector("#navigation-list");
const articleContent = document.querySelector("#content");


function loadArticle(url) {
    if (url === articleContent.src) {
        return; // To the user: rather refresh the whole page.
    }
    articleContent.src = url;
}


async function loadContent() {
    let articles = null

    try {
        articles = await load("JSON", "resources/treatments.json");
    } catch (error) {
        console.error(error);
        return;
    }

    articles = Object.entries(articles);

    let firstURL = null;

    for (let [title, url] of articles) {
        const entry = document.createElement("li");

        if (isDirectRelative(url)) {
            url = "articles/" + url;
        }

        firstURL = firstURL || url;

        const button = document.createElement("button");
        button.appendChild(document.createTextNode(title));
        button.onclick = () => { loadArticle(url); }

        entry.appendChild(button);
        navigationList.appendChild(entry);
    }

    if (articles.length > 0) {
        loadArticle(firstURL);
    } else {
        const statement = document.createElement("p");
        // OFF! Norwegian in source code! UEH!
        statement.appendChild(document.createTextNode("Det fins ingen artikler"));
        statement.classList.add("h-centered", "v-centered"); // TODO: add more.

        removeChildren(articleContent);
        articleContent.appendChild(statement);
    }
}

var iFrameEKS = document.createElement("style");
iFrameEKS.type = "text/css";

const iFrameEKeyFrames = "@keyframes page-treatments-iframe-expander {\
    0%   { height: {0}; }\
    100% { height: {1}; }\
}";

document.head.appendChild(iFrameEKS);


articleContent.addEventListener("load", (event) => {
    const previousHeight = event.target.scrollHeight;

    // Resets this so that the correct height can be gathered below.
    // If not, scrollHeight'll return "max(requiredHeight, previousHeight)".
    event.target.style.height = "0px";

    const height = articleContent.contentWindow.document.documentElement.scrollHeight;

    if (previousHeight == height) {
        event.target.style.height = height + "px";
        return;
    }

    iFrameEKS.innerHTML = iFrameEKeyFrames.format(previousHeight + "px", height + "px");
    console.log(iFrameEKS.innerHTML);

    event.target.addEventListener("animationend", () => {
        event.target.style.animation = "";
        event.target.style.height = height + "px";
    }, false);

    event.target.style.animation = "page-treatments-iframe-expander 0.4s";
});


loadContent();
