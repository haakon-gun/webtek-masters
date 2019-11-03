
import { hasValue, load, objectDOM } from "../scripts/utilities.js";


const navigationList = document.querySelector("#navigation-list");
const articleContent = document.querySelector("#content");


// IMPORTANT: TODO: refactor!
function setArticle(article, allowCustomHTML = false) {
    console.log(article);

    articleContent.innerText = null;

    const content = document.createElement("div");

    for (const component of article["content"]) {
        let element = null;

        if (hasValue(element = component["paragraph"])) {

            const paragraph = document.createElement("p");
            paragraph.appendChild(document.createTextNode(element));

            let style = null;
            if (hasValue(style = component["style"])) {
                paragraph.style = style;
            }

            content.appendChild(paragraph);

        } else if (hasValue(element = component["linebreak"])) {

            for (let i = 0; i < element; ++i) {
                const linebreak = document.createElement("br");

                let style = null;
                if (hasValue(style = component["style"])) {
                    linebreak.style = style;
                }

                content.appendChild(document.createElement("br"));
            }

        } else if (hasValue(element = component["header"])) {

            const header = document.createElement("h1");
            header.appendChild(document.createTextNode(element));

            let style = null;
            if (hasValue(style = component["style"])) {
                header.style = style;
            }

            content.appendChild(header);

        } else if (hasValue(element = component["image"])) {

            const image = document.createElement("img");
            image.src = element;

            let style = null;
            if (hasValue(style = component["style"])) {
                image.style = style;
            }

            content.appendChild(image);

        } else if (hasValue(element = component["HTML"])) {
            if (!allowCustomHTML) { continue; /* Silently ignore it */ }

            content.appendChild(objectDOM(element));

        } else {
            console.warning("Invalid content type encountered while loading an article");
            continue;
        }
    }

    articleContent.appendChild(content);
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
            setArticle(article, true);
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
