
const inputBTN = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];


inputBTN.addEventListener("click", function() {
    // this is a function connection using a eventListener in JavaScript
    myLeads.push(inputEl.value);
    console.log(myLeads);
    print();
});


function print() {
    ulEl.innerHTML = null;
    for(let i=0;i<myLeads.length;++i) {
        ulEl.innerHTML += "<li>"+myLeads[i]+"</li>";     
    }
}
