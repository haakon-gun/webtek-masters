
import { load } from "../scripts/utilities.js";


const navigationList = document.querySelector("#navigation-list");



async function loadContent() {
    try {
        const json = await load("JSON", "resources/treatments.json");

        console.log(json)

        console.log(json[0]);
        console.log(json[1]);
        console.log(json[2]);

        console.log(json[1]["title"]);
        console.log(json[1]["text"]);

    } catch (error) {
        console.error(error);
    }
}


loadContent();

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
