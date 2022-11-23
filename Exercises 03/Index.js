
const inputBTN = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBTN = document.getElementById("delete-btn");
let myLeads = [];
let _tmp = JSON.parse(localStorage.getItem("myLeads"));

if(_tmp !== null) {
    myLeads = _tmp;
    _tmp = null;
    print();
} else {
    myLeads = [];
}

deleteBTN.addEventListener("dblclick", function() {
    localStorage.clear("myLeads");
    myLeads = [];
    print();
});

inputBTN.addEventListener("click", function() {
    // this is a function connection using a eventListener in JavaScript
    if(inputEl.value != "" && inputEl.value != null) {
        myLeads.push(inputEl.value);
        console.log(myLeads);
        print();
        inputEl.value = null;
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
    }
});

function print() {
    let list = "";
    for(let i=0;i<myLeads.length;++i) {
        //list += '<li><a target="_blank" href="'+myLeads[i]+'">'+myLeads[i]+'</li>';
        list += 
        `
            <li>
                <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
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


