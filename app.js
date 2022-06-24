const input = document.getElementById("input")
const useKey = document.getElementById("useKey")
const removeButton = document.getElementById("remove")
const keyPress = document.getElementById("keyPress")
const diceNumber = document.getElementById("diceNumber")
const diceImage = document.getElementById("diceImage")
const imageSource = ["./Dice/dice1.jpeg", "./Dice/dice2.jpeg", "./Dice/dice3.jpeg", "./Dice/dice4.jpeg", "./Dice/dice5.jpeg", "./Dice/dice6.jpeg"]


function rollDice(diceRoll)
{




    diceRoll = Math.ceil(Math.random() * 6)
        if (diceRoll == 1)
        {
            document.getElementById("diceImage").src = imageSource[0]
            // alert("You have rolled a 1, you lost")
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
        return diceRoll
  
    }



useKey.addEventListener("click", () => {
    let diceRoll = 0
    let diceTotal = 0
    // let failRoll = false
    // let targetRoll = 20

    diceNumber.textContent = rollDice(diceRoll)
    console.log(diceTotal)



    // if (diceTotal >= targetRoll)
    // {
    //     alert("You have won the game")
    // }
})









