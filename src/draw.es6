export default class Canvas{
    constructor() {
        this.screenSize = {
            x: window.innerWidth,
            y:window.innerHeight
        };
        this.canvas = document.querySelector("#myCanvas");
        this.context = this.canvas.getContext("2d");
        this.font ="30px Arial";
        this.canvas.width =this.screenSize.x;
        this.canvas.height = this.screenSize.y;
    }

    clearScreen() {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        // this.context.fillStyle = "rgb(0,255,0)";
        // this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
    }

    draw(props){
        this.context.beginPath();
        this.context.arc(props.x,props.y,props.size,0,2*Math.PI);
        this.context.fillStyle= props.color;
        this.context.stroke();
        this.context.fill();

    }

    drawImage(x,y,imgsrc){
        let img=document.getElementById("grave");
        this.context.drawImage(img,x-45,y-30,90,60);
    }

}