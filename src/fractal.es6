export default class Fractal {
    constructor(x,y,color,size){
        this.props = {
            x: x,
            y: y,
            color: color,
            strokeSize : size
        };
        const pos = [];
    }

    fractalize(len,context){
const angle = Math.PI / 4;
        line(0, 0, 0, -len);
        context.translate(0, -len);
        if (len > 4) {
            push();
        rotate(angle);
        this.fractalize(len * 0.67,context);
        pop();
        push();
        rotate(-angle);
            this.fractalize(len * 0.67,context);
        pop();
     }


    }

}
