
import KeyView from "./keyview.es6";
import Player from "./player.es6";
import Canvas from "./draw.es6";
import Blob from "./blob.es6";
import Effects from "./effects.es6";
class Controller {
    constructor() {

        this.mousePos = {
            x: 0,
            y: 0
        };
        this.canvas = new Canvas();
        this.player = new Player();
        this.key = new KeyView();
        this.effects = new Effects();
        this.blobs = [];
        window.addEventListener("mousemove", e => {
            this.mousePos.x = e.clientX;
            this.mousePos.y = e.clientY;
        });
        this.graves = [];
         this.loop();

    }

    loop() {
        this.canvas.clearScreen();
        // this.canvas.showHp(this.player.checkHp());
        if(this.player.checkHp() > 0){
            this.player.move(this.key.location);
            this.canvas.draw(this.player.props);
            if (this.blobs.length < 50){
                // this.blobs.push(new Blob(100,100));

                this.blobs.push(new Blob(Math.random() * this.canvas.screenSize.x, Math.random() * this.canvas.screenSize.y))
            }

            this.blobs.forEach(blob=>{
                let distPlayer = this.effects.getDistanceBetweenElements(this.player,blob);
                if(distPlayer < Math.floor((Math.random()*300))) {
                    blob.move(this.key.location);
                }
                if(blob.props.x > this.canvas.screenSize.x || blob.props.x < 0 || blob.props.y > this.canvas.screenSize.y || blob.props.y< 0){
                    blob.props.isDead = true;
                }
                this.canvas.draw(blob.props);
                let dead = this.player.collision(blob);
                if (dead) {
                    // this.effects.placeGrave(blob.props);
                    this.graves.push(blob);
                    this.player.props.score ++;
                    this.player.props.size += (blob.props.size * 0.1);
                    this.player.props.color = blob.props.color;
                    blob.props.isDead = true;

                }
            });

            this.graves.forEach(grave=>{
                this.canvas.drawImage(grave.props.x,grave.props.y,"grave");

            });


            this.blobs = this.blobs.filter( blob => {
                return !blob.props.isDead;
            });


            window.requestAnimationFrame(() => {
                this.loop();
            });
        }// inside Loop But player dead.
        else{ // if player is dead.


        }
    }
}

var c = new Controller();