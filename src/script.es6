
import KeyView from "./keyview.es6";
class Controller {
    constructor() {


    }

    loop() {


            window.requestAnimationFrame(() => {
                this.loop();
            });
        }// inside Loop But player dead.

}

var c = new Controller();