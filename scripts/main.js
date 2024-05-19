import CreditsScene from './scenes/CreditsScene.js';
import GameScene from './scenes/GameScene.js';
import MainMenuScene from './scenes/MainMenuScene.js';
import GameOverScene from './scenes/GameOverScene.js';

const PHONE_SCREEN_WIDTH = 375;
const PHONE_SCREEN_HEIGHT = 812;

const config = {
    type: Phaser.AUTO,
    width: PHONE_SCREEN_WIDTH,
    height: PHONE_SCREEN_HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [MainMenuScene, GameScene, GameOverScene, CreditsScene]
};

var game = new Phaser.Game(config);
