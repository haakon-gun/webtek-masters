
import { hasValue, load, objectDOM, removeChildren, isDirectRelative } from "../scripts/utilities.js";


const navigationList = document.querySelector("#navigation-list");
const articleContent = document.querySelector("#content");


function loadArticle(url) {
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

articleContent.addEventListener("load", (event) => {
    // Resets this so that the correct height can be gathered below.
    // If not, scrollHeight'll return "max(requiredHeight, previousHeight)".
    event.target.style.height = "0px";

    const height = articleContent.contentWindow.document.documentElement.scrollHeight;

    event.target.style.height = height + "px";
});


loadContent();

/*
const titles = [
    "Hva er karies/hull i tannen?",
    "Kirurgi og tanntrekking",
    "Kroner/Bro/Fasett",
    "Rotfylling",
    "Søvnapnéskinner/snorkeskinner",
    "Tannimplantater",
    "Tannkjøttbetennelse",
    "Tannproteser",
];

for (let i = 0; i < titles.length; ++i) {
    const entry = document.createElement("li");

    const link = document.createElement("a");
    link.appendChild(document.createTextNode(titles[i]));

    entry.appendChild(link);
    navigationList.appendChild(entry);
}
*/



// MERK: Jeg la til "\n" i tredje artikkel! Få dette til å virke!
// TODO: revurder om ikke det skal byttes til en 'iframe', og la verdiene i JSON-filen være URLer til til HTML-filer.
