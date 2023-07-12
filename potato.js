class Potato {
    constructor(ctx, bossPosX, canvasHeight) {
        this.ctx = ctx
        this.width = 100
        this.height = 100
        this.bossPosX = bossPosX
        this.canvasHeight = canvasHeight

        this.posX = this.bossPosX - this.width
        this.posY = this.canvasHeight - 50 - this.height
    }

    draw() {
        this.ctx.fillStyle = "brown"
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    move() {
        this.posX -= 10
    }

    update() {
        this.draw()
        this.move()
    }
}