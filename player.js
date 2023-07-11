class Player {
    constructor(ctx, canvasHeight, canvasWidth) {
        this.ctx = ctx
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.height = 100
        this.width = 50
        this.posX = 50
        this.posY = this.canvasHeight - this.height - 50

        this.lives = 1

        this.bullets = []
    }

    draw() {
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    setEventListeners() {
        document.addEventListener("keydown", (event) => {
            const key = event.key
            console.log(key)
            if (key === "ArrowLeft" && this.posX > 0) this.posX -= 10
            if (key === "ArrowRight" && this.posX + this.width < this.canvasWidth) this.posX += 10
            if (key === "e") this.bullets.push(new Bullet(this.ctx, this.posX, this.posY, this.width, this.height))
        })
    }

}