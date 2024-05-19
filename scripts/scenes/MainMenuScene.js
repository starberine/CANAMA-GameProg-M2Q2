class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }

    preload() {
        this.load.image('mainmenu', 'assets/images/mainmenu/mainmenu_bg.png');
        this.load.image('playButton', 'assets/images/buttons/play_button.png');
        this.load.image('creditsButton', 'assets/images/buttons/credits_button.png');
        this.load.image('quitButton', 'assets/images/buttons/quit_button.png');
        this.load.audio('bgMusic', 'assets/bgm/mm_bgm.mp3');
    }

    create() {
        
        const mainMenuBg = this.add.image(0, 0, 'mainmenu').setOrigin(0, 0);
    mainMenuBg.setDisplaySize(this.sys.canvas.width, this.sys.canvas.height);

   if (!this.backgroundMusic || !this.backgroundMusic.isPlaying) {
    this.backgroundMusic = this.sound.add('bgMusic', { loop: true, volume: 0.02 });
    this.backgroundMusic.play();
}
        const centerX = this.sys.game.config.width / 2;
        const centerY = this.sys.game.config.height / 2;

        const playButton = this.add.image(centerX, centerY - 10, 'playButton').setInteractive();
        playButton.setScale(1);
        playButton.on('pointerdown', () => {

            this.backgroundMusic.stop();

            this.scene.start('GameScene');
        });


        const creditsButton = this.add.image(centerX, centerY + 85, 'creditsButton').setInteractive();
        creditsButton.setScale(1);
        creditsButton.on('pointerdown', () => {

            this.scene.start('CreditsScene');
        });


        const quitButton = this.add.image(centerX, centerY + 175, 'quitButton').setInteractive();
        quitButton.setScale(1);
        quitButton.on('pointerdown', () => {

            alert('You exited the game! Have a froggy day 🐸');
        });
    }
}

export default MainMenuScene;
