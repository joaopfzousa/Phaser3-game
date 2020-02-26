export default class bootGame extends Phaser.Scene{
    constructor(){
        super("BootGame");
    }
    preload() {
        this.load.spritesheet("bird", "assets/bird.png", {
            frameWidth:34,
            frameHeight:24,
        })

        this.load.spritesheet("enemies", "assets/enemies.png", {
            frameWidth:96,
            frameHeight:90,
        })

        this.load.image("bullet", "assets/bullet.png")
        
    }
    create(){
        this.scene.start("PlayGame");
    }
}