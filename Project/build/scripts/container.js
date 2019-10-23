
import { elementExists, withFragmentID, filename } from "./utilities.js";

const contentContainer = document.querySelector("#content-container");
const header = document.querySelector("#main-header");
const footer = document.querySelector("#main-footer");

function setURLQueryParameter(name, value) {
    const urlParameters = new URLSearchParams(window.location.search);

    if (urlParameters.get(name) == value) {
        return;
    }
    urlParameters.set(name, value);

    window.history.replaceState({content: window.location.href}, "", decodeURIComponent(`${location.pathname}?${urlParameters}`));
}

/// requires same-origin of the IFrame content. Local file access is considered cross-origin. Deactivate local file restrictions for debugging purposes.
function scaleIFrame() {
    var height = contentContainer.contentWindow.document.documentElement.offsetHeight
    height = Math.max(height, window.innerHeight - header.offsetHeight - footer.offsetHeight);

    contentContainer.style.height = height + "px";

    /*
    const cssLink = document.createElement("link");
    cssLink.href = "styles/common.css";
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.media = "screen"
    contentContainer.contentWindow.document.head.appendChild(cssLink);
    */
}

function setContentSource(url) {
    contentContainer.src = url;

    setURLQueryParameter("content", filename(url));
}

function setContent() {
    setContentSource(this.href);
}

function contentDidLoad() {
    document.body.scrollTo(0, 0);
    scaleIFrame();
}

/*
function setFooterOffset() {
    footer.style.paddingTop = Math.min() + "px";
}
*/

function setContentContainerOffset() {
    contentContainer.style.paddingTop = header.offsetHeight + "px";
}


contentContainer.addEventListener("load", contentDidLoad);

document.querySelectorAll(".header-link").forEach(button => {
    button.addEventListener("click", setContent);
});

const contentSpecifier = new URLSearchParams(window.location.search).get("content");

if (contentSpecifier) {
    setContentSource(contentSpecifier);
}

setContentContainerOffset();
