export default class Enemy  extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, "enemy",1);

        this.scene.add.existing(this);

        this.scene.physics.world.enable(this);

        this.setGravityY(-10);
    }
}