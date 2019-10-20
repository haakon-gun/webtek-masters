

const contentContainer = document.querySelector("#content-container");

function setContent(sender) {
    console.log(sender.dataset.url);

    contentContainer.src = sender.dataset.url;
}
