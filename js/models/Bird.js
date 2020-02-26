export default class Bird extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y){
        super(scene, x, y, "bird"); 
        
        this.scene.add.existing(this)
        this.scene.physics.world.enable(this)

        this.timeToShoot = 0
        this.fireRate    = 250
        this.velocity    = 150

        this.bullets = this.scene.physics.add.group({
            maxSize:5,
        })
    }

    update(cursors, time){
        this.setVelocity(0)

        if(cursors.down.isDown){
            this.setVelocityY(this.velocity)
        }else if(cursors.up.isDown){
            this.setVelocityY(-this.velocity)
        }
        if(cursors.left.isDown){
            this.setVelocityX(-this.velocity)
        }else if(cursors.right.isDown){
            this.setVelocityX(this.velocity)
        }

        if(cursors.space.isDown && this.timeToShoot < time)
        {  
            let bullet = this.bullets.getFirstDead(true, this.x, this.y, "bullet")
            if(bullet)
            {
                bullet.setVelocityX(200)
                bullet.active = true
                bullet.visible = true
            }
            this.timeToShoot = time + this.fireRate
        }
        this.bullets.children.iterate(function(bullet){
            if(bullet.x > this.scene.game.config.width)
            {
                this.bullets.killAndHide(bullet)
            }
        }, this)  
    }
}