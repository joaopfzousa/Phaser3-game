import Bird from "../models/Bird.js";
import Enemy from "../models/Enemy.js";


export default class playGame extends Phaser.Scene {
    constructor() {
        super("PlayGame");
    }
    create() {
        console.log("Starting game");

        //this.bird = this.physics.add.sprite(100, 100, "bird", 2);

        const width = this.game.config.width;
        const height = this.game.config.height;

        //this.add.image(width / 2, height / 2, "bg");
        this.add.image(0, 0, "bg").setDisplayOrigin(0, 0).setDisplaySize(width, height);


        this.bird = new Bird(this, 100, 100);

        //this.bird.setGravityY(-10);
        //this.bird.setVelocityY(10)

        this.cursors = this.input.keyboard.createCursorKeys()

        //this.enemy = this.physics.add.sprite(400, 400, "enemy");
        //this.enemy = new Enemy(this,400,400);

        this.enemies = this.physics.add.group({
            classType: Enemy
        });
        this.enemy = this.enemies.getFirstDead(true, 400,400);
        
        this.enemy.setScale(0.5);

        this.physics.add.collider(this.bird, this.enemy, (bird, enemy) => {
            console.log("crash!");
        });

        this.physics.add.overlap(this.bird.bullets, this.enemies, (bullet, enemy) => {
            bullet.destroy();
            enemy.destroy();
        });

        this.time.addEvent({
            delay:1000,
            repeat:-1,
            callback: () => {
                let enemy = this.enemies.getFirstDead(true, 400,400);
                enemy.setScale(0.5);
                enemy.setVelocityX(-100);
            }
        });
    }

    update(time, delta) {
        //console.log(time + " " + delta);
        this.bird.update(this.cursors, time);

    }
}