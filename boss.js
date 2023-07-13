class Boss {
    constructor(ctx, canvasWidth, canvasHeight) {
        this.ctx = ctx
        this.height = 420
        this.width = 578

        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.posX = this.canvasWidth - this.width - 50
        this.posY = this.canvasHeight - this.height - 50

        this.lives = 50

        this.potatoes = []

        this.image = new Image()
        this.image.src = "./assets/images/mrpotato.png"
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }


}