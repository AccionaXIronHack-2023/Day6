class Boss {
    constructor(ctx, canvasWidth, canvasHeight) {
        this.ctx = ctx
        this.height = 450
        this.width = 250

        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.posX = this.canvasWidth - this.width - 100
        this.posY = this.canvasHeight - this.height - 50

        this.lives = 50
    }

    draw() {
        this.ctx.fillStyle = "yellow"
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }


}