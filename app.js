const input = document.getElementById("input")
const useKey = document.getElementById("useKey")
const removeButton = document.getElementById("remove")
const keyPress = document.getElementById("keyPress")
const diceNumber = document.getElementById("diceNumber")
const diceImage = document.getElementById("diceImage")
const imageSource = ["./Dice/dice1.jpeg", "./Dice/dice2.jpeg", "./Dice/dice3.jpeg", "./Dice/dice4.jpeg", "./Dice/dice5.jpeg", "./Dice/dice6.jpeg"]


function rollDice(diceRoll)
{

    let failRoll = false
    let targetRoll = 20


        diceRoll = Math.ceil(Math.random() * 6)

        if (diceRoll == 1)
        {
            document.getElementById("diceImage").src = imageSource[0]

        }
        if (diceRoll == 2)
        {
            document.getElementById("diceImage").src = imageSource[1]
        }
        if (diceRoll == 3)
        {
            document.getElementById("diceImage").src = imageSource[2]
        }
        if (diceRoll == 4)
        {
            document.getElementById("diceImage").src = imageSource[3]
        }
        if (diceRoll == 5)
        {
            document.getElementById("diceImage").src = imageSource[4]
        }
        if (diceRoll == 6)
        {
            document.getElementById("diceImage").src = imageSource[5]
        }

        // if (diceTotal >= targetRoll)
        // {
        //     failRoll = true
        //     alert("You have won the game")
        //     return diceRoll
        // }
        console.log(diceRoll)
        return diceRoll

}


let diceTotal = 0
let diceRoll = 0
let actualRoll = 0
const diceTarget = prompt("Please Enter how many points to win:")

useKey.addEventListener("click", () => {

    actualRoll = rollDice(diceRoll)


    if (diceTotal <= diceTarget)
    {
        diceTotal += actualRoll
        diceNumber.textContent = diceTotal
    }
    if (diceTotal > diceTarget)
    {
        alert(`You have ${diceTotal} points, you win`)
        diceTotal = 0
        diceNumber.textContent = diceTotal
    }
    else if (actualRoll == 1)
    {
        alert("You have rolled a 1, you lost")
        diceTotal = 0
        diceNumber.textContent = 0

    }


20
})