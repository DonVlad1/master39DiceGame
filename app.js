const input = document.getElementById("input")
const useKey = document.getElementById("useKey")
const removeButton = document.getElementById("remove")
const keyPress = document.getElementById("keyPress")
const diceNumber = document.getElementById("diceNumber")
const diceImage = document.getElementById("diceImage")
const imageSource = "./Dice/dice2.jpeg"


function rollDice()
{
    diceRoll = Math.round(Math.random())
    console.log(diceRoll)

    // if (diceRoll == 1)
    // {
    //     document.getElementById("diceImage").src = "./Dice/dice1.jpeg"
    // }
    return [diceRoll, diceImage]
}



useKey.addEventListener("click", () => {
    let diceRoll = 0
    diceNumber.textContent = rollDice(0)
    document.getElementById("diceImage").src = imageSource
})









