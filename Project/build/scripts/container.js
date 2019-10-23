
function waste(milliseconds){
    var now = new Date().getTime();
    while(new Date().getTime() < now + milliseconds) {}
}


const contentContainer = document.querySelector("#content-container");
const header = document.querySelector("#main-header");
const footer = document.querySelector("#main-footer");

/// requires same-origin of the IFrame content. Local file access is considered cross-origin. Deactivate local file restrictions for debugging purposes.
function scaleIFrame() {
    height = contentContainer.contentWindow.document.documentElement.offsetHeight
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
    document.body.scrollTo(0, 0);
    contentContainer.src = url;

    // url = new URL(sender.dataset.url, document.URL);
    //url = document.URL + "#" + sender.dataset.url.slice(0, -4);

    window.location.hash = url.slice(0, -5);

    //window.history.pushState("", "", url);
}

function setContent(sender) {
    setContentSource(sender.dataset.url);
}

function contentDidLoad() {
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

fragmentID = window.location.hash;

if (fragmentID.length !== 0) {
    setContentSource(fragmentID.slice(1) + ".html");
}

setContentContainerOffset();
