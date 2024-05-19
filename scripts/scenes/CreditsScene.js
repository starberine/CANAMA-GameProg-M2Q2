class CreditsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'CreditsScene' });
    }

    preload(){
        this.load.image('sky3', 'assets/images/bg2.png');
    }

    create() {
        const controlsBg = this.add.image(0, 0, 'sky3').setOrigin(0, 0);
        controlsBg.setDisplaySize(this.sys.canvas.width, this.sys.canvas.height);

        const backButton = this.add.text(20, 20, 'Back', {
            fontSize: '24px',
            fontFamily: 'Mono',
            fill: '#000000'
        }).setInteractive();

        backButton.on('pointerup', () => {
            this.scene.start('MainMenuScene'); 
        });

       
    }
}

export default CreditsScene;
