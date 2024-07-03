enum direction{
    up,down,right,left
}
function mover(keystroke:direction){
    if(keystroke=direction.up){
        console.log("jump");
    }
    else if(keystroke=direction.down){
        console.log("crouch");
    }
    else if(keystroke=direction.right){
        console.log("move forward");
    }
    else if(keystroke=direction.left){
        console.log("move back")
    }
}

mover(direction.down)