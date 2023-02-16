let number = 5;
document.forms['inputForm'].onsubmit = function (event){
    resetNum();
    event.preventDefault();
    number = document.forms['inputForm']['input'].value;
    addBox(number);
    document.forms['inputForm'].reset();
}

function resetNum() {
    const container = document.getElementById("container");
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
function addBox(number) {
    for(let i = 0; i < number; i++) {
        const randomHex = hexGenerator();
        createBox(randomHex);
    }
}
function createBox(hexValue) {
    const container = document.getElementById("container");
    const li = document.createElement("li");
    li.className = "color";
    const div = document.createElement("div");
    div.className = "rect-box";
    div.style.backgroundColor = hexValue;
    const span = document.createElement("span");
    span.className  = "hex-value";
    span.textContent = hexValue;
    li.appendChild(div);
    li.appendChild(span);
    container.appendChild(li);
}

function hexGenerator() {
    let randomHex = Math.floor(Math.random() * 10000000).toString(16).toUpperCase();
    randomHex = `#${randomHex.padStart(6, "0")}`;
    return randomHex;
}

const submit = document.getElementById("submit");
submit.addEventListener("click", refresh);

function refresh() {
    const li = document.getElementsByClassName("color");
    for (const it of li) {
        const hex = hexGenerator();
        it.firstChild.style.backgroundColor = hex;
        it.lastChild.textContent = hex;
    }
}
addBox(number);