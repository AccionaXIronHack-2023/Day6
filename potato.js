class Potato {
    constructor(ctx, bossPosX, canvasHeight) {
        this.ctx = ctx
        this.width = 100
        this.height = 100
        this.bossPosX = bossPosX
        this.canvasHeight = canvasHeight

        this.posX = this.bossPosX - this.width
        this.posY = this.canvasHeight - 50 - this.height

        this.image = new Image()
        this.image.src = "./assets/images/potatosprite.png"

        this.sX = 560
        this.sY = 0
        this.sWidth = 140
        this.sHeight = 145
    }

    draw() {
        this.ctx.drawImage(this.image, this.sX, this.sY, this.sWidth, this.sHeight, this.posX, this.posY, this.width, this.height)
    }

    move() {
        this.posX -= 10
    }

    update() {
        this.draw()
        this.move()
    }
}