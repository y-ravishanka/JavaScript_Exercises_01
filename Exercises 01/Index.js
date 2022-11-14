
const countEl = document.getElementById("count-el");
let count = 0;
let saveCount = [];

function printCount() {
    countEl.innerText = count;
}

printCount();

function increment() {
    count++;
    printCount();
}

function save() {
    saveCount.push(count);
    count = 0;
    printCount();
    document.getElementById("save-el").innerText = saveCount;
}