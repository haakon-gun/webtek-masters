
// No reason keeping this for the final version
export function waste(milliseconds) {
    const now = new Date().getTime();
    while (new Date().getTime() < now + milliseconds) {}
}


export function withFragmentID(url, id) {
    if (id === null) {
        return url;
    }

    const i1 = url.indexOf("#");

    if (id === "") {
        return (i1 != -1) ? url.slice(0, i1) : url;
    }

    if (i1 != -1) {
        return url.slice(0, i1 + 1) + id;
    } else {
        return url + "#" + id;
    }

    return url;
}

export function elementExists(selector) {
    if (selector === null || typeof selector !== "string" || selector === "") {
        return false;
    }

    return document.querySelector(selector) != null;
}

export function filename(url) {
    const components = url.split("#")[0].split("?")[0].split("/");

    return components[components.length() - 1];
}


export class Bounds {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    contains(...values) {
        for (const value of values) {
            if (value < this.x || value > this.y) { return false; }
        }
        return true;
    }
}


const documentOMParser = new DOMParser();

/**
 * @param {string} urlString - "DOM" or "JSON"
 * @param {string} urlString - URL string to the given location
 * @param {(DOM) => ()} receiver
 * @param {} errorResponse
 */
export async function load(type, urlString, receiver) {
    load.requestECBounds = load.requestECBounds || new Bounds(400, 599);

    const response = await fetch(urlString, {method: "GET"});

    if (load.requestECBounds.contains(response.status)) {
        throw new Error(response.status);
    }

    let object = null;

    switch (type) {
        case "DOM":
        case "txt":
            object = await response.text();
            /* Fallthrough */
        case "DOM":
            object = documentOMParser.parseFromString(object, 'text/html');
            break;
        case "JSON":
            object = await response.json();
            break;
        default:
            throw new Error("Unexpected argument value: type = " + type);
    }

    receiver(object);
}
