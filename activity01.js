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

// change a global variable from a function in JavaScript
var changeGlobalVariable = 0;

function changeGlobalVariableTest(){
    changeGlobalVariable += 10;
}

console.log(changeGlobalVariable);
changeGlobalVariableTest();
console.log(changeGlobalVariable);
changeGlobalVariableTest();
console.log(changeGlobalVariable);
// ---------------------------------------------------------------------------

// strict equaliaty operator in JavaScript
if(3 == 3){
    console.log("3 == 3 is true");
}
else{
    console.log("3 == 3 is false");
}

if(3 == '3'){
    console.log("3 == '3' is true");
}
else{
    console.log("3 == '3' is false");
}

if(3 === 3){
    console.log("3 === 3 is true");
}
else{
    console.log("3 === 3 is false");
}

if(3 === '3'){
    console.log("3 === '3' is true");
}
else{
    console.log("3 === '3' is false");
}
// ---------------------------------------------------------------------------

// strict inequaliaty operator in JavaScript
if(3 != 3){
    console.log("3 != 3 is true");
}
else{
    console.log("3 != 3 is false");
}

if(3 != '3'){
    console.log("3 != '3' is true");
}
else{
    console.log("3 != '3' is false");
}

if(3 !== 3){
    console.log("3 !== 3 is true");
}
else{
    console.log("3 !== 3 is false");
}

if(3 !== '3'){
    console.log("3 !== '3' is true");
}
else{
    console.log("3 !== '3' is false");
}
// ---------------------------------------------------------------------------

// logical 'and' and 'or' operator in JavaScript
function logicalAndOrOperatorTest(value01){
    if(value01 > 10 && value01 <50){
        console.log("value01 = ",value01," and value01 > 10 && value01 <50 = true");
    }
    else{
        console.log("value01 = ",value01," and value01 > 10 && value01 <50 = false");
    }

    if(value01 < 10 || value01 > 50){
        console.log("value01 = ",value01," and value01 < 10 || value01 > 50 = true");
    }
    else{
        console.log("value01 = ",value01," and value01 < 10 || value01 > 50 = false");
    }
}

logicalAndOrOperatorTest(9);
logicalAndOrOperatorTest(65);
logicalAndOrOperatorTest(25);
logicalAndOrOperatorTest(34);
// ---------------------------------------------------------------------------

// chain if else statements in JavaScript
function chainIfElseStatements(chainValue01){
    if(chainValue01 >= 20){
        return chainValue01 + " is huge";
    }
    else{
        if(chainValue01 < 5){
            return chainValue01 + " is tiny";
        }
        else if(chainValue01 < 10){
            return chainValue01 + " is small";
        }
        else if(chainValue01 < 15){
            return chainValue01 + " is medium";
        }
        else if(chainValue01 < 20){
            return chainValue01 + " is large";
        }
    }
}

console.log(chainIfElseStatements(12));
console.log(chainIfElseStatements(33));
console.log(chainIfElseStatements(2));
console.log(chainIfElseStatements(17));
// ---------------------------------------------------------------------------

// switch statement in JavaScript
function switchStatementTest(valueSwitch01){
    var answer = "";
    switch (valueSwitch01){
        case 1:
            answer = "if "+ valueSwitch01 +" answer is alpha";
            break;
        case 2:
            answer = "if "+ valueSwitch01 +" answer is beta";
            break;
        case 3:
            answer = "if "+ valueSwitch01 +" answer is gamma";
            break;
        case 4:
            answer = "if "+ valueSwitch01 +" answer is delta";
            break;
    }
    return answer;
}

console.log(switchStatementTest(1));
console.log(switchStatementTest(2));
console.log(switchStatementTest(3));
console.log(switchStatementTest(4));
// ---------------------------------------------------------------------------

// check undefined value in JavaScript
function checkUndifined(num01){
    if(num01<0){
        return num01 +" is "+ undefined;
    }
    else{
        return num01 +" is not undefined";
    }
}

console.log(checkUndifined(-3));
console.log(checkUndifined(3));
console.log(checkUndifined(0));
console.log(checkUndifined(-10));
// --------------------------------------------------------------------------

// random number in JavaScript
function randomNumber(){
    console.log("random number using 'Math.random()' - "+ (Math.random()));
    console.log("random number using 'Math.floor(Math.random())' - "+ Math.floor(Math.random()));
    console.log("random number with 1 digits using 'Math.floor(Math.random()*10)' - "+ Math.floor(Math.random() * 10));
    console.log("random number with 2 digits using 'Math.floor(Math.random()*100)' - "+ Math.floor(Math.random()*100));
    console.log("random number withing max and min number using 'Math.floor(Math.random()*(max-min+1))+min' - "+ (Math.floor(Math.random()*(10-1+1))+1));
}

randomNumber();
// --------------------------------------------------------------------------

// convert into integers in JavaScript
console.log("convert a string to integer (256) - "+ parseInt("256"));
console.log("convert a string binary number to 10 base integer ('1011') - "+ parseInt("1011",2));
console.log("convert a binary number to 10 base integer (10010) - "+ parseInt(10010,2));
console.log("convert a 8 base number to 10 base number (20435) - "+ parseInt(20435,8));
// --------------------------------------------------------------------------

// ternary operator in JavaScript
var checkTernary01 = 13;
console.log("checkTernary01 = "+ checkTernary01 +', ternary operator (checkTernary01>0 ? "positive" : "negative") - '+ (checkTernary01>0 ? "positive" : "negative"));
console.log("checkTernary01 = "+ checkTernary01 +', ternary operator (checkTernary01 === 0 ? "zero" : checkTernary01<0 ? "negative": checkTernary01%2 === 0 ? "even number" : "odd number") - '+ (checkTernary01 === 0 ? "zero" : checkTernary01<0 ? "negative": checkTernary01%2 === 0 ? "even number" : "odd number"));
// --------------------------------------------------------------------------