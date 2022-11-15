
let firstCard = 4;
let secoundCard = 3;
let sum = firstCard+secoundCard;
let message = "";
let isAlive = true;
let hasBlackJack = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function startGame() {
    if(sum>21) {
        message = "you are out of the game !!!";
        isAlive = false;
    }
    else {
        if(sum === 21) {
            message = "you have got blackjack !!!";
            hasBlackJack = true;
        }
        else {
            message = "do you want to daw a new card ?";
        }
    }
    cardEl.textContent = firstCard+" "+secoundCard;
    sumEl.textContent = sum;
    messageEl.textContent = message;
}

function newCard() {
    let newCard = 7;
    sum +=newCard;
    startGame();
    cardEl.textContent = firstCard+" "+secoundCard+" "+newCard;
}

// importan remainder
// hove querySelector work -------------------------------------
console.log(document.querySelector("body"));
console.log(document.querySelector("head"));
// remainder is orver