
import { hasValue, load } from "../scripts/utilities.js";


const navigationList = document.querySelector("#navigation-list");
const articleContent = document.querySelector("#content");


function setArticle(article) {
    console.log(article);

    for (const component of article["content"]) {
        let element = null;

        if (hasValue(element = component["paragraph"])) {
            console.log("paragraph");

        } else if (hasValue(element = component["header"])) {
            console.log("header");

        } else if (hasValue(element = component["image"])) {
            console.log("image");

        } else {
            continue;
        }
    }
}


async function loadContent() {
    let articles = null
    try {
        articles = await load("JSON", "resources/treatments.json");
        console.log(articles)
    } catch (error) {
        console.error(error);
    }

    console.log(articles[0]["shit"]);

    for (let i = 0; i < articles.length; ++i) {

        const article = articles[i];

        const entry = document.createElement("li");

        const button = document.createElement("button");
        button.appendChild(document.createTextNode(article["title"]));
        button.onclick = () => {
            setArticle(article);
            return false;
        }

        entry.appendChild(button);
        navigationList.appendChild(entry);
    }
}


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
