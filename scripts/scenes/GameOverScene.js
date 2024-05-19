export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    init(data) {
        this.timeAlive = data.timeAlive || 0;
        this.score = data.score || 0;
    }

    preload() {
        this.load.image('sky1', 'assets/images/bg1.png');
    }

    create() {
        const background = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'sky1');
        const gameOverText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'Game Over', {
            fontSize: '48px',
            fill: '#FF0000',
            fontFamily: 'Mono',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000',
                blur: 1,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        const timeText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 50, `Survival Time: ${this.timeAlive} seconds`, {
            fontSize: '20px',
            fill: '#FFF',
            fontFamily: 'Mono',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000',
                blur: 1,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        const scoreText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, `Score: ${this.score}`, {
            fontSize: '32px',
            fill: '#FFF',
            fontFamily: 'Mono',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000',
                blur: 1,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        const restartButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 150, 'Restart', {
            fontSize: '32px',
            fill: '#FFF',
            fontFamily: 'Mono',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000',
                blur: 1,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        const mainMenuButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 200, 'Main Menu', {
            fontSize: '32px',
            fill: '#FFF',
            fontFamily: 'Mono',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000',
                blur: 1,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        restartButton.setInteractive();
        restartButton.on('pointerdown', () => {
            this.scene.start('GameScene', { timeAlive: 0, score: 0 });
        });

        mainMenuButton.setInteractive();
        mainMenuButton.on('pointerdown', () => {
            this.scene.start('MainMenuScene');
        });
    }
}
