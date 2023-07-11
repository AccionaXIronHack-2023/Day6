class Bullet {
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx

        this.width = 50
        this.height = 10

        this.posX = playerPosX + playerWidth
        this.posY = playerPosY + playerHeight / 2
    }

    update() {
        this.draw()
        this.move()
    }

    draw() {
        this.ctx.fillStyle = "blue"
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    move() {
        this.posX += 10
    }
}