const input = document.getElementById("input")
const useKey = document.getElementById("useKey")
const removeButton = document.getElementById("remove")
const keyPress = document.getElementById("keyPress")
const keyCode = document.getElementById("keyCode")
const keyWhich = document.getElementById("keyWhich")
const boomSound = document.getElementById("boom")
const clapSound = document.getElementById("clap")
const hiHatSound = document.getElementById("hiHat")
const kickSound = document.getElementById("kick")
const openHatSound = document.getElementById("openHat")
const rideSound = document.getElementById("ride")
const snareSound = document.getElementById("snare")
const tinkSound = document.getElementById("tink")
const tomSound = document.getElementById("tom")


function playSound(event)
{
    if (event.key == "q")
    {
        boomSound.play()
    }

    if (event.key == "w")
    {
        clapSound.play()
    }

    if (event.key == "e")
    {
        hiHatSound.play()
    }

    if (event.key == "r")
    {
        kickSound.play()
    }

    if (event.key == "t")
    {
        openHatSound.play()
    }

    if (event.key == "y")
    {
        rideSound.play()
    }

    if (event.key == "u")
    {
        snareSound.play()
    }

    if (event.key == "i")
    {
        tinkSound.play()
    }

    if (event.key == "o")
    {
        tomSound.play()
    }
}


useKey.addEventListener("keypress", (event) => {
    playSound(event)
})

boomButton.addEventListener("click", () => {
    boomSound.play()
})

clapButton.addEventListener("click", () => {
    clapSound.play()
})

hiHatButton.addEventListener("click", () => {
    hiHatSound.play()
})

kickButton.addEventListener("click", () => {
    kickSound.play()
})

openHatButton.addEventListener("click", () => {
    openHatSound.play()
})

rideButton.addEventListener("click", () => {
    rideSound.play()
})

snareButton.addEventListener("click", () => {
    snareSound.play()
})

tinkButton.addEventListener("click", () => {
    tinkSound.play()
})

tomButton.addEventListener("click", () => {
    tomSound.play()
})



// button.addEventListener("keypress", (event) => {
//     keyPress.textContent = event.key
//     keyCode.textContent = event.code
//     keyWhich.textContent = event.which
// })


