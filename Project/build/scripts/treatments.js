
import { hasValue, load, objectDOM, removeChildren } from "../scripts/utilities.js";


const navigationList = document.querySelector("#navigation-list");
const articleContent = document.querySelector("#content");


// IMPORTANT: TODO: refactor!
// TODO: add more validations.
function setArticle(article, allowCustomHTML = false) {
    console.log(article);

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

                content.appendChild(linebreak);
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

    removeChildren(articleContent);
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

    for (const article of articles) {
        const entry = document.createElement("li");

        const button = document.createElement("button");
        button.appendChild(document.createTextNode(article["title"]));
        button.onclick = () => { setArticle(article, true); }

        entry.appendChild(button);
        navigationList.appendChild(entry);
    }

    if (articles.length > 0) {
        setArticle(articles[0], true);
    } else {
        const statement = document.createElement("p");
        // OFF! Norwegian in source code! UEH!
        statement.appendChild(document.createTextNode("Det fins ingen artikler"));
        statement.classList.add("h-centered", "v-centered"); // TODO: add more.

        removeChildren(articleContent);
        articleContent.appendChild(statement);
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
