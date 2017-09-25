/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyView = function () {
    function KeyView() {
        var _this = this;

        _classCallCheck(this, KeyView);

        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        document.addEventListener("keydown", function (keyBoardDown) {
            if (keyBoardDown.keyCode === 39) {
                _this.right = true;
            }
            if (keyBoardDown.keyCode === 37) {
                _this.left = true;
            }
            if (keyBoardDown.keyCode === 38) {
                _this.up = true;
            }
            if (keyBoardDown.keyCode === 40) {
                _this.down = true;
            }
        });

        document.addEventListener("keyup", function (keyBoardUp) {

            if (keyBoardUp.keyCode === 39) {
                _this.right = false;
            }
            if (keyBoardUp.keyCode === 37) {
                _this.left = false;
            }
            if (keyBoardUp.keyCode === 38) {
                _this.up = false;
            }
            if (keyBoardUp.keyCode === 40) {
                _this.down = false;
            }
        });
    }

    _createClass(KeyView, [{
        key: "location",
        get: function get() {
            return {
                left: this.left,
                right: this.right,
                up: this.up,
                down: this.down
            };
        }
    }]);

    return KeyView;
}();

module.exports = KeyView;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyview = __webpack_require__(0);

var _keyview2 = _interopRequireDefault(_keyview);

var _player = __webpack_require__(2);

var _player2 = _interopRequireDefault(_player);

var _draw = __webpack_require__(3);

var _draw2 = _interopRequireDefault(_draw);

var _blob = __webpack_require__(4);

var _blob2 = _interopRequireDefault(_blob);

var _effects = __webpack_require__(5);

var _effects2 = _interopRequireDefault(_effects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
    function Controller() {
        var _this = this;

        _classCallCheck(this, Controller);

        this.mousePos = {
            x: 0,
            y: 0
        };
        this.canvas = new _draw2.default();
        this.player = new _player2.default();
        this.key = new _keyview2.default();
        this.effects = new _effects2.default();
        this.blobs = [];
        window.addEventListener("mousemove", function (e) {
            _this.mousePos.x = e.clientX;
            _this.mousePos.y = e.clientY;
        });
        this.graves = [];
        this.loop();
    }

    _createClass(Controller, [{
        key: "loop",
        value: function loop() {
            var _this2 = this;

            this.canvas.clearScreen();
            // this.canvas.showHp(this.player.checkHp());
            if (this.player.checkHp() > 0) {
                this.player.move(this.key.location);
                this.canvas.draw(this.player.props);
                if (this.blobs.length < 50) {
                    // this.blobs.push(new Blob(100,100));

                    this.blobs.push(new _blob2.default(Math.random() * this.canvas.screenSize.x, Math.random() * this.canvas.screenSize.y));
                }

                this.blobs.forEach(function (blob) {
                    var distPlayer = _this2.effects.getDistanceBetweenElements(_this2.player, blob);
                    if (distPlayer < Math.floor(Math.random() * 300)) {
                        blob.move(_this2.key.location);
                    }
                    if (blob.props.x > _this2.canvas.screenSize.x || blob.props.x < 0 || blob.props.y > _this2.canvas.screenSize.y || blob.props.y < 0) {
                        blob.props.isDead = true;
                    }
                    _this2.canvas.draw(blob.props);
                    var dead = _this2.player.collision(blob);
                    if (dead) {
                        // this.effects.placeGrave(blob.props);
                        _this2.graves.push(blob);
                        _this2.player.props.score++;
                        _this2.player.props.size += blob.props.size * 0.1;
                        _this2.player.props.color = blob.props.color;
                        blob.props.isDead = true;
                    }
                });

                this.graves.forEach(function (grave) {
                    _this2.canvas.drawImage(grave.props.x, grave.props.y, "grave");
                });

                this.blobs = this.blobs.filter(function (blob) {
                    return !blob.props.isDead;
                });

                window.requestAnimationFrame(function () {
                    _this2.loop();
                });
            } // inside Loop But player dead.
            else {// if player is dead.


                }
        }
    }]);

    return Controller;
}();

var c = new Controller();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyview = __webpack_require__(0);

var _keyview2 = _interopRequireDefault(_keyview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player() {
        _classCallCheck(this, Player);

        this.props = {
            x: 10,
            y: 10,
            size: 20,
            score: 3,
            color: "rgb(255,0,0)",
            uniqueID: new Date().valueOf() + Math.random()
        };
        this.key = new _keyview2.default();
    }

    _createClass(Player, [{
        key: "move",
        value: function move(movement) {
            if (movement.left && this.props.x <= window.innerWidth - window.innerWidth) {
                this.props.x === 0;
            } else if (movement.left) {
                this.props.x -= 10;
            }

            if (movement.right && this.props.xPos >= window.innerWidth - 10) {
                this.props.x === window.innerWidth;
            } else if (movement.right === true) {
                this.props.x += 10;
            }

            if (movement.down && this.props.y >= window.innerHeight - 10) {
                this.props.y === window.innerHeight;
            } else if (movement.down) {
                this.props.y += 10;
            }

            if (movement.up && this.props.y <= window.innerHeight - window.innerHeight) {
                this.props.y === 0;
            } else if (movement.up) {
                this.props.y -= 10;
            }
            this.collision();
        }
    }, {
        key: "collision",
        value: function collision(collider) {
            if (!collider) return;
            if (collider.props.x + collider.props.size >= this.props.x && collider.props.x <= this.props.x + this.props.size && collider.props.y + collider.props.size >= this.props.y && collider.props.y <= this.props.y + this.props.size) {
                return true;
            }
            return false;
        }
    }, {
        key: "checkHp",
        value: function checkHp() {
            return this.props.score;
        }
    }, {
        key: "pLocation",
        get: function get() {
            return {
                x: this.props.x + "",
                y: this.props.y + "",
                size: this.props.size
            };
        }
    }]);

    return Player;
}();

module.exports = Player;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
    function Canvas() {
        _classCallCheck(this, Canvas);

        this.screenSize = {
            x: window.innerWidth,
            y: window.innerHeight
        };
        this.canvas = document.querySelector("#myCanvas");
        this.context = this.canvas.getContext("2d");
        this.font = "30px Arial";
        this.canvas.width = this.screenSize.x;
        this.canvas.height = this.screenSize.y;
    }

    _createClass(Canvas, [{
        key: "clearScreen",
        value: function clearScreen() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            // this.context.fillStyle = "rgb(0,255,0)";
            // this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
        }
    }, {
        key: "draw",
        value: function draw(props) {
            this.context.beginPath();
            this.context.arc(props.x, props.y, props.size, 0, 2 * Math.PI);
            this.context.fillStyle = props.color;
            this.context.stroke();
            this.context.fill();
        }
    }, {
        key: "drawImage",
        value: function drawImage(x, y, imgsrc) {
            var img = document.getElementById("grave");
            this.context.drawImage(img, x - 45, y - 30, 90, 60);
        }
    }]);

    return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Blob = function () {
    function Blob(x, y) {
        _classCallCheck(this, Blob);

        this.props = {
            x: x,
            y: y,
            color: this.randomColor(),
            size: this.randomSize(),
            isDead: false,
            vel: {
                x: 0.1,
                y: 0.1
            },
            acceleration: 0.75

        };
    }

    _createClass(Blob, [{
        key: 'move',
        value: function move(movement) {

            if (movement.left) {
                this.props.x -= this.props.vel.x;
                this.props.vel.x -= this.props.acceleration;
            }

            if (movement.right) {
                this.props.x += this.props.vel.x;
                this.props.vel.x += this.props.acceleration;
            }

            if (movement.down) {
                this.props.y -= this.props.vel.y;
                this.props.vel.y -= this.props.acceleration;
            }

            if (movement.up) {
                this.props.y += this.props.vel.y;
                this.props.vel.y += this.props.acceleration;
            }
        }
    }, {
        key: 'randomColor',
        value: function randomColor() {
            return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        }
    }, {
        key: 'randomSize',
        value: function randomSize() {
            return Math.floor(Math.random() * 10 + 5);
        }
    }]);

    return Blob;
}();

exports.default = Blob;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Effects = function () {
    function Effects() {
        _classCallCheck(this, Effects);
    }

    _createClass(Effects, [{
        key: "fadeIn",
        value: function fadeIn(el, time) {
            el.style.opacity = 0;
            el.style.display = "block";

            var last = +new Date();
            var tick = function tick() {
                el.style.opacity = +el.style.opacity + (new Date() - last) / time;
                last = +new Date();

                if (+el.style.opacity < 0.7) {
                    window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
                }
            };

            tick();
        }
    }, {
        key: "getDistanceBetweenElements",
        value: function getDistanceBetweenElements(a, b) {
            var aX = a.props.x + a.props.size / 2;
            var bX = b.props.x + b.props.size / 2;
            var aY = a.props.y + b.props.size / 2;
            var bY = b.props.y + b.props.size / 2;

            return Math.sqrt(Math.pow(aX - bX, 2) + Math.pow(aY - bY, 2));
        }
    }, {
        key: "placeGrave",
        value: function placeGrave(pos) {
            var graveImg = document.createElement("img");
            graveImg.setAttribute('src', '../img/Grave.png');
            graveImg.setAttribute('class', 'img');
            graveImg.setAttribute("id", "grave");
            graveImg.style.left = pos.x - 45 + "px";
            graveImg.style.top = pos.y - 30 + "px";
            document.body.appendChild(graveImg);
            this.fadeIn(graveImg, 5000);
            return pos;
        }
    }]);

    return Effects;
}();

exports.default = Effects;

/***/ })
/******/ ]);