var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
//Basic configuration for the games initial state

var game = new Phaser.Game(config);
//starts a new instance of the game object with the given config above

function preload(){
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/sky1.png');
    this.load.image('ground', 'assets/sets/tiles/14.png');
    this.load.image('morty', 'assets/pics/morty.png');
    this.load.image('cactuar', 'assets/pics/cactuar.png');
    this.load.spritesheet('dude',
            'assets/sprites/dude.png',
            { frameWidth: 32, frameHeight: 48 }
    );
}

var platforms;

function create(){
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
}

function update(){

}
