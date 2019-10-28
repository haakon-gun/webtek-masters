
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
