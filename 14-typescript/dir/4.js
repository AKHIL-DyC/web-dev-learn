"use strict";
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["right"] = 2] = "right";
    direction[direction["left"] = 3] = "left";
})(direction || (direction = {}));
function mover(keystroke) {
    if (keystroke = direction.up) {
        console.log("jump");
    }
    else if (keystroke = direction.down) {
        console.log("crouch");
    }
    else if (keystroke = direction.right) {
        console.log("move forward");
    }
    else if (keystroke = direction.left) {
        console.log("move back");
    }
}
mover(direction.down);
