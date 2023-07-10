const game = {
    author: "Acciona Bootcamp dev Squad",
    version: "1.0.0",
    title: "カップヘッド",
    description: "Best game in town",

    width: null,
    height: null,
    canvas: null,
    ctx: null,
    FPS: 60,

    player: null,
    boss: null,


    initCanvas() {
        this.canvas = document.querySelector("#canvas")
        this.ctx = this.canvas.getContext("2d")
    },

    setDimensions() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.canvas.width = window.innerWidth
        this.canvas.height = this.height
    },

    generateAll() {
        this.player = new Player(this.ctx, this.height)
        this.boss = new Boss(this.ctx, this.width, this.height)
    },

    drawAll() {
        this.player.draw()
        this.boss.draw()
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    start() {
        this.player.setEventListeners()
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 1000 / this.FPS) // 1000  / 60

    },

    init() {
        this.initCanvas()
        this.setDimensions()
        this.generateAll()
        this.start()
    }
}