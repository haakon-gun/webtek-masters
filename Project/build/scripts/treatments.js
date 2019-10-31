
import { load } from "../scripts/utilities.js";





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
