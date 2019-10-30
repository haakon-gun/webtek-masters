
// No reason keeping this for the final version
export function waste(milliseconds) {
    const now = new Date().getTime();
    while (new Date().getTime() < now + milliseconds) {}
}


// https://stackoverflow.com/a/4673436
if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;

        return this.replace(/{(\d+)}/g, (match, number) => {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
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


export class UnexpectedArgumentError extends Error {

    constructor(argument, value, message) {
        super((message || "Unexpected argument value: '{0}' = '{1}'").format(argument, value));

        this.name = "UnexpectedArgumentError";
        this.argument = argument;
        this.value = value;
    }

    toString() {
        return this.message
    }
}


export class RequestError extends Error {

    constructor(code, message) {
        super((message || "An error has occured during a data request: {0}").format(code));

        this.name = "RequestError";
        this.code = code;
    }

    toString() {
        return this.message
    }
}


const documentOMParser = new DOMParser();

/**
 * @param {string} urlString - "DOM" or "JSON"
 * @param {string} urlString - URL string to the given location
 * @param {(DOM) => ()} receiver
 * @param {string} sendingMethod - "GET" or "POST" or more?
 */
export async function load(type, urlString, receiver, sendingMethod) {
    const response = await fetch(urlString, {
        method: sendingMethod || "GET",
        credentials: "omit"
    });

    if (!response.ok) {
        throw new RequestError(response.status);
    }

    let object = null;

    switch (type) {
        case "DOM":
        case "txt":
            object = await response.text();
            /* Fallthrough */
        case "DOM":
            object = documentOMParser.parseFromString(object, "text/html");
            break;
        case "JSON":
            object = await response.json();
            break;
        default:
            throw new UnexpectedArgumentError("type", type);
    }

    receiver(object);
}
