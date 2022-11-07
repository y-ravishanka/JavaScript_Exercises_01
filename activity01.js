console.log("hello world");

// variable test in JavaScript ----------------------------------------------
var name = "Yasas";
console.log(name);
name = 5;
console.log(name);
const pi = 3.14;
console.log(pi);
console.log(name,"\n",pi);
var d1 = 4.23;
var d2 = 12.542;
console.log(d1,"  ",d2);
var sum = d1*d2;
console.log(sum);
var min = d2/d1;
console.log(min);
var myStrin = "i am a \"int variable\" so am i";
console.log(myStrin);
myStrin = "firstLine\n\t\\secondLine\nthirdLine";
console.log(myStrin);
myStrin = "firstLine\n\\secondLine\nthirdLine";
console.log(myStrin);
var note = "fn200";
// ------------------------------------------------------------------------

// array test in JavaScript ---------------------------------------------------------------
var ar1 = ["hello",12323,213.34232];
console.log(ar1);
var ar2 = [["hello",12323,213.34232],["hello",12323,213.34232]];
console.log(ar2);
var ar2e1 = ar2[1];
console.log(ar2e1);
console.log(ar2[1][0]);
var ar3 = [[23,42,54],[23,43,62],[12,56,86],[[123,532,867],234,75,89]];
console.log(ar3);
console.log(ar3[3][0]);
console.log(ar3[3][0][0]);
var ar3 = ["dwad","dwaw",12321,45345,["dadwad",231231]];
console.log("array output 01 - ", ar3);
ar3.push(["push 01",02]);
console.log("array output 02 - ", ar3);
// -----------------------------------------------------------------------------

// function test in JavaScript
function testFunction01() {
    console.log("function test 01");
}
testFunction01();

function testFunction02(a, b) {
    var sum = a+b;
    console.log("sum of ",a," + ",b," is ",sum);
}
testFunction02(2,5);
// ----------------------------------------------------------------------------

// global variable test in JavaScript
var global01 = "hello";

function testGlobalVariable01() {
    var global02 = 5;
}

function testGlobalVariable02() {
    if(typeof global01 == "undefined"){
        console.log("global01 is undefined");
    }
    else{
        console.log("global01 is defined");
    }

    if(typeof global02 == "undefined"){
        console.log("global02 is undefined");
    }
    else{
        console.log("global02 is defined");
    }
}
//testGlobalVariable01();
testGlobalVariable02();
// don't know if this section working propaly or not
// ----------------------------------------------------------------------------

// function local varibale access from outside in JavaScript
function testLocalVariable(){
    var testLocalVariable01 = "i am a local variable";
    console.log(testLocalVariable01,", i run inside a function");
}
testLocalVariable();

if(typeof testLocalVariable01 == "undefined"){
    console.log("function local variables can't run outside of the function");
}
else{
    console.log("i can run outside of the function, something went wrong in your code");
}
// ---------------------------------------------------------------------------

// function return in JavaScript
function returnTest01(reNum01){
    return (reNum01 - 5);
}

console.log(returnTest01(20));
// ----------------------------------------------------------------------------