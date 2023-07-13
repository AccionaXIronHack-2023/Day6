class Bullet {
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx

        this.width = 74
        this.height = 21

        this.posX = playerPosX + playerWidth - 10
        this.posY = playerPosY + (playerHeight / 2) - 20

        this.image = new Image()
        this.image.src = "./assets/images/bullet.png"
    }

    update() {
        this.draw()
        this.move()
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    move() {
        this.posX += 20
    }
}