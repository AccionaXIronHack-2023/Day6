class Player {
    constructor(ctx, canvasHeight, canvasWidth) {
        this.ctx = ctx
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight

        this.width = 129
        this.height = 152
        this.posX = 50
        this.posY = this.canvasHeight - this.height - 50
        this.velY = 0
        this.gravity = 0.9

        this.canJump = true
        this.canMoveLeft = false
        this.canMoveRight = false
        this.canShoot = true

        this.lives = 3

        this.bullets = []

        this.image = new Image()
        this.image.src = "./assets/images/mainPlayer.png"

        this.audio = new Audio("./assets/sounds/shoot_sound.mp3")
    }

    update() {
        this.draw()
        this.move()
        this.activateGravity()
        this.checkFloor()
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    activateGravity() {
        this.velY += this.gravity
    }

    checkFloor() {
        if (this.posY + this.height + this.velY >= this.canvasHeight - 50) {
            this.velY = 0
            this.canJump = true
        }
    }

    move() {
        this.posY += this.velY
        if (this.canMoveLeft && this.posX > 0) this.posX -= 15
        if (this.canMoveRight && this.posX + this.width < this.canvasWidth) this.posX += 15
    }

    setEventListeners() {
        document.addEventListener("keydown", (event) => {
            const key = event.key
            if (key === "ArrowLeft") this.canMoveLeft = true
            if (key === "ArrowRight") this.canMoveRight = true
            if (key === "ArrowUp" && this.canJump) {
                this.velY -= 20
                this.canJump = false
            }
            if (key === "e" && this.canShoot) {
                this.audio.pause()
                this.audio.play()
                this.bullets.push(new Bullet(this.ctx, this.posX, this.posY, this.width, this.height))
                this.canShoot = false
            }
        })
        document.addEventListener("keyup", (event) => {
            const key = event.key
            if (key === "ArrowLeft") this.canMoveLeft = false
            if (key === "ArrowRight") this.canMoveRight = false
        })
    }
}