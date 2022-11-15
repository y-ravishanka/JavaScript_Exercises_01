
// let firstCard = 5;
// let secoundCard = 6;
// let sum = firstCard+secoundCard;
let cards = [];
let sum = 0;
let message = "";
let cardMessage = "";
let isAlive = true;
let hasBlackJack = false;
let hasStartGame = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function startGame() {
    displayMessages();
    cards = [5,6];
    renderGame();
    hasStartGame = true;
}

function getSum() {
    sum = 0;
    for(let i=0;i<cards.length;++i) {
        sum += cards[i];
    }
}

function displayMessages() {
    cardEl.textContent = cardMessage;
    sumEl.textContent = sum;
    messageEl.textContent = message;
}

function newGame() {
    hasStartGame = false;
    hasBlackJack = false;
    isAlive = true;
    message = "Want to play a round ?";
    sum = 0;
    cards = [];
    cardMessage = "";
    displayMessages();
}

function renderGame() {
    getSum();
    cardMessage = "";
    if(isAlive === true && hasBlackJack === false) {
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
        for(let i=0;i<cards.length;++i) {
            cardMessage += cards[i]+ " ";
        }
        displayMessages();
    }
    
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        cards.push(10);
        renderGame();
    }
}

// importan remainder
// hove querySelector work -------------------------------------
console.log(document.querySelector("body"));
console.log(document.querySelector("head"));
// remainder is orver