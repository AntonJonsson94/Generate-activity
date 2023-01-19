const loadingImg = document.querySelector("img") as HTMLImageElement;
const body = document.querySelector("body") as HTMLBodyElement;
const recreationOption = document.querySelector("option") as HTMLOptionElement;
const socialOption = document.querySelector("option") as HTMLOptionElement;
const busyworkOption = document.querySelector("option") as HTMLOptionElement;
const displayActivity = document.querySelector(
    ".display-activity"
) as HTMLParagraphElement;
const submitButton = document.querySelector("button") as HTMLButtonElement;
const selectOption = document.querySelector("select") as HTMLSelectElement;

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
const urlType = "http://www.boredapi.com/api/activity?type=";

async function getType() {
    const selectedAcitivity = selectOption.value;
    const response = await fetch(urlType + selectedAcitivity);
    const data = await response.json();
    console.log(data.activity);
    console.log(data.type);
    displayActivity.innerHTML = data.activity;
}

function selectedAcitivity() {
    submitButton.addEventListener("click", () => {
        async function getType() {
            const selection = selectOption.value;
            const response = await fetch(urlType + selection);
            const data = await response.json();

            const generateActivity = data;
            console.log(generateActivity);
            displayActivity.innerHTML = generateActivity;
        }
        getType();
    });
}
loadingScreen();
// bodyDiv()
