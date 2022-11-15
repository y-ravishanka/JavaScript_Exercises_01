
let firstCard = 4;
let secoundCard = 3;
let sum = firstCard+secoundCard;
let message = "";
let isAlive = true;
let hasBlackJack = false;
let messageEl = document.getElementById("message-el");

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
    messageEl.textContent = message;
}