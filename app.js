"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const loadingImg = document.querySelector("img");
const body = document.querySelector("body");
const recreationOption = document.querySelector("option");
const socialOption = document.querySelector("option");
const busyworkOption = document.querySelector("option");
const displayActivity = document.querySelector("p");
const submitButton = document.querySelector("button");
function loadingScreen() {
    setTimeout(() => {
        loadingImg.style.display = "none";
    }, 3200);
}
function bodyDiv() {
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    body.appendChild(container);
}
const url = "https://www.boredapi.com/api/activity/";
const urlType = "https://www.boredapi.com/api/activity?type=";
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        displayActivity.innerHTML = data.activity;
        console.log(data.activity);
        console.log(data.type);
    });
}
function chooseActivity() {
    return __awaiter(this, void 0, void 0, function* () { });
}
getData();
loadingScreen();
bodyDiv();
