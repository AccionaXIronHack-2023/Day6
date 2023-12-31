const game = {
    author: "Acciona Bootcamp dev Squad",
    version: "1.0.0",
    title: "カップヘッド",
    description: "Best game in town",

    width: null,
    height: null,
    canvas: null,
    ctx: null,
    interval: null,
    FPS: 60,
    frames: 0,
    isDifficult: null,

    player: null,
    boss: null,

    background: null,
    victoryScreen: null,
    defeatScreen: null,


    initCanvas() {
        this.canvas = document.querySelector("#canvas")
        this.ctx = this.canvas.getContext("2d")
    },

    loadImages() {
        this.victoryScreen = new Image()
        this.victoryScreen.src = "./assets/images/victory.png"
        this.defeatScreen = new Image()
        this.defeatScreen.src = "./assets/images/defeat.jpg"
        this.background = new Image()
        this.background.src = "./assets/images/background.jpg"
    },

    setDimensions() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.canvas.width = window.innerWidth
        this.canvas.height = this.height
    },

    generateAll() {
        let playerLives = 3
        let bossLives = 50
        if (this.isDifficult) {
            console.log("EL JUEGO ES DIFÍCIL")
            playerLives = 1
            bossLives = 100
        }
        this.player = new Player(this.ctx, this.height, this.width, playerLives)
        this.boss = new Boss(this.ctx, this.width, this.height, bossLives)
    },

    drawAll() {
        this.ctx.drawImage(this.background, 0, 0, this.width, this.height)
        this.player.update()
        this.boss.draw()
        this.player.bullets.forEach(bullet => {
            bullet.update()
        }) // [BALA1,BALA2,BALA3,BALA4...]
        this.boss.potatoes.forEach(potato => {
            potato.update()
        })
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    clearItems() {
        this.player.bullets = this.player.bullets.filter(bullet => bullet.posX < this.width)
        this.boss.potatoes = this.boss.potatoes.filter(potato => potato.posX + potato.width > 0)
    },

    checkCollisions() {
        this.player.bullets.forEach((bullet, index) => {
            if (bullet.posX + bullet.width > this.boss.posX + 150) {
                this.boss.lives--
                this.player.bullets.splice(index, 1)
                if (this.boss.lives === 0) this.gameFinished(this.victoryScreen)
            }
        })
        this.boss.potatoes.forEach((potato, index) => {
            if (this.player.posX + this.player.width > potato.posX
                && this.player.posX < potato.posX + potato.width
                && this.player.posY + this.player.height > potato.posY) {
                this.player.lives--
                this.boss.potatoes.splice(index, 1)
                if (this.player.lives === 0) this.gameFinished(this.defeatScreen)
            }
        })
    },

    gameFinished(image) {
        this.clearAll()
        clearInterval(this.interval)
        this.ctx.drawImage(image, 0, 0, this.width, this.height)
        setTimeout(() => {
            location.reload()
        }, 2000)
    },

    start() {
        this.player.setEventListeners()
        this.interval = setInterval(() => {
            this.frames++
            if (this.frames % 10 === 0) {
                this.player.canShoot = true
            }
            if (this.frames % 60 === 0) {
                this.boss.potatoes.push(new Potato(this.ctx, this.boss.posX, this.height))
            }
            if (this.frames % 12 === 0) {
                this.boss.potatoes.forEach(potato => {
                    if (potato.sX === 560) {
                        potato.sX = 0
                        return
                    }
                    potato.sX += 140
                })
            }
            this.clearAll()
            this.drawAll()
            this.clearItems()
            this.checkCollisions()
        }, 1000 / this.FPS) // 1000  / 60

    },

    init(isDifficult) {
        this.isDifficult = isDifficult
        this.initCanvas()
        this.loadImages()
        this.setDimensions()
        this.generateAll()
        this.start()
    }
}