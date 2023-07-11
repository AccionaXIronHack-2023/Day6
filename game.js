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

    player: null,
    boss: null,

    victoryScreen: null,


    initCanvas() {
        this.canvas = document.querySelector("#canvas")
        this.ctx = this.canvas.getContext("2d")
    },

    loadImages() {
        this.victoryScreen = new Image()
        this.victoryScreen.src = "./assets/images/victory.png"
    },

    setDimensions() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.canvas.width = window.innerWidth
        this.canvas.height = this.height
    },

    generateAll() {
        this.player = new Player(this.ctx, this.height, this.width)
        this.boss = new Boss(this.ctx, this.width, this.height)
    },

    drawAll() {
        this.player.draw()
        this.boss.draw()
        this.player.bullets.forEach(bullet => {
            bullet.update()
        }) // [BALA1,BALA2,BALA3,BALA4...]
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    clearItems() {
        this.player.bullets = this.player.bullets.filter(bullet => bullet.posX < this.width)
    },

    checkCollisions() {
        this.player.bullets.forEach((bullet, index) => {
            if (bullet.posX + bullet.width > this.boss.posX) {
                this.boss.lives--
                this.player.bullets.splice(index, 1)
                console.log("VIDAS  =>", this.boss.lives)
                if (this.boss.lives === 0) this.winGame()
            }
        })
    },

    winGame() {
        this.clearAll()
        clearInterval(this.interval)
        this.ctx.drawImage(this.victoryScreen, 0, 0, this.width, this.height)
        setTimeout(() => {
            location.reload()
        }, 2000)
    },

    start() {
        this.player.setEventListeners()
        this.interval = setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.clearItems()
            this.checkCollisions()
        }, 1000 / this.FPS) // 1000  / 60

    },

    init() {
        this.initCanvas()
        this.loadImages()
        this.setDimensions()
        this.generateAll()
        this.start()
    }
}