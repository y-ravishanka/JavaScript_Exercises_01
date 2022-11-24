
const inputBTN = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBTN = document.getElementById("delete-btn");
const tabBTN = document.getElementById("tab-btn");
let myLeads = [];
let _tmp = JSON.parse(localStorage.getItem("myLeads"));

if(_tmp !== null) {
    myLeads = _tmp;
    _tmp = null;
    print(myLeads);
} else {
    myLeads = [];
}

tabBTN.addEventListener("click", function() {

});

deleteBTN.addEventListener("dblclick", function() {
    localStorage.clear("myLeads");
    myLeads = [];
    print(myLeads);
});

inputBTN.addEventListener("click", function() {
    // this is a function connection using a eventListener in JavaScript
    if(inputEl.value != "" && inputEl.value != null) {
        myLeads.push(inputEl.value);
        console.log(myLeads);
        print(myLeads);
        inputEl.value = null;
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
    }
});

function print(leads) {
    let list = "";
    for(let i=0;i<leads.length;++i) {
        //list += '<li><a target="_blank" href="'+myLeads[i]+'">'+myLeads[i]+'</li>';
        list += 
        `
            <li>
                <a target="_blank" href="${leads[i]}">${leads[i]}</a>
            </li>
        `;
    }
    ulEl.innerHTML = list;
    
    //another way to print the leads to interface
    /* 
    const li = document.createElement("li");
    li.textContent = myLeads[i];
    ulEl.append(li);
    */
}


