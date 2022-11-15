
let firstCard = 4;
let secoundCard = 3;
let sum = firstCard+secoundCard;
let message = "";
let isAlive = true;
let hasBlackJack = false;

function startGame() {
    if(sum>21) {
        message = "you are out of the game !!!";
        isAlive = false;
    }
    else {
        if(sum === 21) {
            message = "wohoo! you have got blackjack !!!";
            hasBlackJack = true;
        }
        else {
            message = "do you want to daw a new card ?";
        }
    }
}