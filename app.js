const input = document.getElementById("input")
const useKey = document.getElementById("useKey")
const removeButton = document.getElementById("remove")
const keyPress = document.getElementById("keyPress")
const diceNumber = document.getElementById("diceNumber")
const diceImage = document.getElementById("diceImage")
const imageSource = ["./Dice/dice1.jpeg", "./Dice/dice2.jpeg", "./Dice/dice3.jpeg", "./Dice/dice4.jpeg", "./Dice/dice5.jpeg", "./Dice/dice6.jpeg"]


function rollDice()
{
    let diceRoll = 0
    let failRoll = false
    let targetRoll = 20
    let diceTotal = 0
    console.log(diceRoll)


    while (failRoll == false && diceTotal < targetRoll)
    {
        diceRoll = Math.ceil(Math.random() * 6)
        console.log(diceRoll)

        if (diceRoll == 1)
        {
            document.getElementById("diceImage").src = imageSource[0]
            // alert("You have rolled a 1, you lost")
            diceTotal += diceRoll
        }
        if (diceRoll == 2)
        {
            document.getElementById("diceImage").src = imageSource[1]
            alert(`You rolled a ${diceRoll}, press Ok to continue`)
            diceTotal += diceRoll
        }
        if (diceRoll == 3)
        {
            document.getElementById("diceImage").src = imageSource[2]
            alert(`You rolled a ${diceRoll}, press Ok to continue`)
            diceTotal += diceRoll
        }
        if (diceRoll == 4)
        {
            document.getElementById("diceImage").src = imageSource[3]
            alert(`You rolled a ${diceRoll}, press Ok to continue`)
            diceTotal += diceRoll
        }
        if (diceRoll == 5)
        {
            document.getElementById("diceImage").src = imageSource[4]
            alert(`You rolled a ${diceRoll}, press Ok to continue`)
            diceTotal += diceRoll
        }
        if (diceRoll == 6)
        {
            document.getElementById("diceImage").src = imageSource[5]
            alert(`You rolled a ${diceRoll}, press Ok to continue`)
            diceTotal += diceRoll
        }

        if (diceTotal >= targetRoll)
        {
            failRoll = true
            alert("You have won the game")
            return diceRoll
        }
    }


}



useKey.addEventListener("click", () => {
    
    diceNumber.textContent = rollDice()

})









