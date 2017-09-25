export default class Effects {

    fadeIn(el, time) {
        el.style.opacity = 0;
        el.style.display = "block";

        let last = +new Date();
        let tick = ()=> {
            el.style.opacity = +el.style.opacity + (new Date() - last) / time;
            last = +new Date();

            if (+el.style.opacity < 0.7) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
            }
        };

        tick();
    }

    getDistanceBetweenElements(a, b) {
        let aX = a.props.x + (a.props.size/2);
        let bX = b.props.x +(b.props.size/2);
        let aY = a.props.y + (b.props.size/2);
        let bY= b.props.y +(b.props.size/2);

        return Math.sqrt(
            Math.pow(aX - bX , 2) +
            Math.pow(aY - bY, 2)
        );
    };

    placeGrave(pos){
        let graveImg = document.createElement("img");
        graveImg.setAttribute('src', '../img/Grave.png');
        graveImg.setAttribute('class', 'img');
        graveImg.setAttribute("id", "grave");
        graveImg.style.left = pos.x - 45 + "px";
        graveImg.style.top = pos.y - 30 + "px";
        document.body.appendChild(graveImg);
        this.fadeIn(graveImg,5000);
        return pos;
    }
}
