
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


export class UnexpectedArgumentError extends Error {

    constructor(argument, value, message) {
        super((message || "Unexpected argument value: '{0}' = '{1}'").format(argument, value));

        this.name = "UnexpectedArgumentError";
        this.argument = argument;
        this.value = value;
    }

    toString() {
        return this.message;
    }
}

export class RequestError extends Error {

    constructor(code, message) {
        super((message || "An error has occured during a data request: {0}").format(code));

        this.name = "RequestError";
        this.code = code;
    }

    toString() {
        return this.message;
    }
}

export class AssertionError extends Error {

    constructor(message) {
        super(message || "AssertionError");

        this.name = "AssertionError";
    }

    toString() {
        return this.message;
    }
}


var assert = (test, message) => {
    if (test) { return; }

    throw AssertionError(message);
}


export function argProvided(argument) {
    return typeof argument !== "undefined";
}

export function argHasValue(argument) {
    return typeof argument !== "undefined" || argument === null;
}

export function hasValue(variable) {
    return argHasValue(variable);
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
 * @param {string} urlString - "DOM", "JSON" or "txt"
 * @param {string} urlString - URL string to the given location
 * @param {(DOM) => ()} receiver
 * @param {string} sendingMethod - "GET" or "POST" or more?
 */
export async function load(type, urlString, receiver, sendingMethod) {
    load.requestECBounds = load.requestECBounds || new Bounds(400, 599);

    const response = await fetch(urlString, {
        method: sendingMethod || "GET",
        credentials: "omit"
    });

    if (/*!response.ok || */load.requestECBounds.contains(response.status)) {
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

    if (argHasValue(receiver)) {
        return receiver(object);
    }

    return object;
}


function rgbString(...values) {
    assert(values.length == 3);

    return "rgb(" + values[0] + ", " + values[1] + ", " + values[2] + ")";
}

function rgbaString(...values) {
    let alpha = null;

    if (values.length == 4) {
        alpha = values[3];
    } else {
        assert(values.length == 3);

        alpha = 1;
    }

    return "rgb(" + values[0] + ", " + values[1] + ", " + values[2] + ", " + values[3] + ")";
}

function colorString(...values) {
    if (values.length == 1) {
        return values[0];
    }

    switch (values.length) {
        case 1: return values[0];
        case 3: return rgbString(...values);
        case 4: return rgbaString(...values);
        default:
            throw UnexpectedArgumentError("values", values);
    }
}


// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// EXAMPLES:
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––

/*
load("txt", "outer.html", (txt) => {
    console.log(txt);
}).catch((error) => {
    console.error(error);
});
*/
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––
/*
async function f() {
    try {
        await load("JSON", "file.json", (json) => {
            console.log(json);
        })

        txt = await load("txt", "file.txt");
        console.log(txt);

        dom = await load("DOM", "file.html", (result) => {
            return result;
        })
        console.log(dom);

    } catch (error) {
        console.error(error);
    }
}
*/
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––
