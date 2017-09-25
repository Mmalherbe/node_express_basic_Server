import Keyview from "./keyview.es6"

class Player {
    constructor() {
        this.props = {
            x: 10,
            y  : 10,
            size: 20,
            score: 3,
            color: "rgb(255,0,0)",
            uniqueID : new Date().valueOf()+Math.random()
        };
        this.key = new Keyview;
    }


    move(movement) {
        if (movement.left && this.props.x <= window.innerWidth - window.innerWidth) {
            this.props.x === 0;
        } else if (movement.left) {
            this.props.x -= 10;
        }

        if(movement.right && this.props.xPos >= window.innerWidth - 10) {
            this.props.x === window.innerWidth;
        } else if (movement.right ===true ) {
            this.props.x += 10;
        }

        if(movement.down && this.props.y >= window.innerHeight - 10) {
            this.props.y === window.innerHeight;
        } else if(movement.down){
            this.props.y += 10;
        }

        if(movement.up && this.props.y <= window.innerHeight - window.innerHeight) {
            this.props.y === 0;
        } else if(movement.up) {
            this.props.y -= 10;
        }
        this.collision();
    }

    collision(collider){
        if (!collider) return;
        if ((collider.props.x + collider.props.size >= this.props.x)
            && (collider.props.x <= this.props.x + this.props.size)
            && (collider.props.y + collider.props.size >= this.props.y)
            && (collider.props.y <= this.props.y + this.props.size)
        ) {
            return true;
        }
        return false;
    }
    checkHp() {
        return this.props.score;

    }
    get pLocation (){
        return{
            x:this.props.x+"",
            y:this.props.y+"",
            size:this.props.size
        }
    }
}

module.exports = Player;