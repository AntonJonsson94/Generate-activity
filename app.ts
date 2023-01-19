const loadingImg = document.querySelector("img") as HTMLImageElement;
const body = document.querySelector("body") as HTMLBodyElement;
const recreationOption = document.querySelector("option") as HTMLOptionElement;
const socialOption = document.querySelector("option") as HTMLOptionElement;
const busyworkOption = document.querySelector("option") as HTMLOptionElement;
const displayActivity = document.querySelector("p") as HTMLParagraphElement;
const submitButton = document.querySelector("button") as HTMLButtonElement;

function loadingScreen() {
    setTimeout(() => {
        loadingImg.style.display = "none";
    }, 3200);
}
function bodyDiv() {
    const container = document.createElement("div") as HTMLDivElement;
    container.setAttribute("id", "container");
    body.appendChild(container);
}
const url = "https://www.boredapi.com/api/activity/";
const urlType = "https://www.boredapi.com/api/activity?type=";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayActivity.innerHTML = data.activity;
    console.log(data.activity);
    console.log(data.type);
}
async function chooseActivity() {}
getData();
loadingScreen();
bodyDiv();
