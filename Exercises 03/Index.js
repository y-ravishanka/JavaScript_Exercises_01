
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
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
        addLead(tabs[0].url);
    });
});

deleteBTN.addEventListener("dblclick", function() {
    localStorage.clear("myLeads");
    myLeads = [];
    print(myLeads);
});

inputBTN.addEventListener("click", function() {
    // this is a function connection using a eventListener in JavaScript
    if(inputEl.value != "" && inputEl.value != null) {
        addLead(inputEl.value);
        console.log(myLeads);
        inputEl.value = null;
    }
});

function addLead(lead) {
    myLeads.push(lead);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    print(myLeads);
}

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


