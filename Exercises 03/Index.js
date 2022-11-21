
const inputBTN = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLeads = [];


inputBTN.addEventListener("click", function() {
    // this is a function connection using a eventListener in JavaScript
    myLeads.push(inputEl.value);
    console.log(myLeads);
});