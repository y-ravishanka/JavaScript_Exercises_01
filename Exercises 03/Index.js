
const inputBTN = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

inputBTN.addEventListener("click", function() {
    // this is a function connection using a eventListener in JavaScript
    myLeads.push(inputEl.value);
    console.log(myLeads);
    print();
    inputEl.value = null;
});

function print() {
    let list = "";
    for(let i=0;i<myLeads.length;++i) {
        list += "<li>"+myLeads[i]+"</li>";
    }
    ulEl.innerHTML = list;
    
    //another way to print the leads to interface
    /* 
    const li = document.createElement("li");
    li.textContent = myLeads[i];
    ulEl.append(li);
    */
}


