export default class Bird extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y){
        super(scene, x, y, "bird"); 
        
        this.scene.add.existing(this)
        this.scene.physics.world.enable(this)
    }

    update(cursors){
        this.setVelocity(0)
        const velocity = 1000
        if(cursors.down.isDown){
            this.setVelocityY(velocity)
            this.setFrame(1)
        }else if(cursors.up.isDown){
            this.setVelocityY(-velocity)
            this.setFrame(2)
        }
        if(cursors.left.isDown){
            this.setVelocityX(-velocity)
            this.setFrame(1)
        }else if(cursors.right.isDown){
            this.setVelocityX(velocity)
            this.setFrame(2)
        }
    }
}