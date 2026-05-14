
let cards = []

let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector(".c")


let player = {
    name: "apuu",
    chips: 145
}
moneyEl = document.getElementById("money")
moneyEl.textContent = player.name + ": $" + player.chips

function startGame() {

    hasBlackJack = false
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()

}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + "  -  "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
        messageEl.textContent = message
    } else if (sum === 21) {
        message = "Whohoo! You've got Blackjack! "
        hasBlackJack = true
        messageEl.textContent = message
    } else {
        message = "You're out of the game! "
        isAlive = false
        messageEl.textContent = message

    }



}
function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)

        console.log("Drawing a new card from the deck")

        sumEl.textContent = "Sum: " + sum
        renderGame()
    }
    else {
        console.log("You cannot draw a new card!")
        message = "You cannot draw a new card!"
        messageEl.textContent = message
        isAlive = false

    }

}
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}



