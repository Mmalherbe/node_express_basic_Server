export default class Blob {
    constructor(x,y){
        this.props = {
            x: x,
            y: y,
            color: this.randomColor(),
            size:this.randomSize(),
            isDead : false,
            vel :{
                x: 0.1,
                y: 0.1
            },
            acceleration : 0.75

        };
    }

    move(movement) {

        if (movement.left) {
            this.props.x -= this.props.vel.x;
            this.props.vel.x-=this.props.acceleration;
        }

        if (movement.right) {
            this.props.x += this.props.vel.x;
            this.props.vel.x+=this.props.acceleration;
        }

        if (movement.down) {
            this.props.y -= this.props.vel.y;
            this.props.vel.y-=this.props.acceleration;
        }

        if (movement.up) {
            this.props.y += this.props.vel.y;
            this.props.vel.y +=this.props.acceleration;
        }


    }

    randomColor() {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
    randomSize(){
        return Math.floor((Math.random()*10)+5);
    }

}