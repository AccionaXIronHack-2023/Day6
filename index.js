onload = () => {
    const normalButton = document.querySelector("#normal-difficulty")
    const difficultyButton = document.querySelector("#hard-difficulty")
    const canvas = document.querySelector("#canvas")
    const menu = document.querySelector("#difficulty-menu")
    normalButton.onclick = () => {
        console.log("LOS ELEMENTOS =>", canvas, menu)
        canvas.classList.toggle("non-display")
        menu.classList.toggle("non-display")
        game.init(false)
    }

    difficultyButton.onclick = () => {
        console.log("LOS ELEMENTOS =>", canvas, menu)
        canvas.classList.toggle("non-display")
        menu.classList.toggle("non-display")
        game.init(true)
    }


}
