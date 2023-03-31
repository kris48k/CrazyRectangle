// https://github.com/bobboteck/JoyStick
// three.js https://codepen.io/ogames/pen/rNmYpdo

const isMobile = navigator.userAgentData.mobile;
const square = document.querySelector('#square');
let X = 200;
let Y = 200;

console.log("is mobile", isMobile);
let isMoveStarted = false;

if (isMobile) {
    var joy = new JoyStick('joyDiv', {}, (e)=>{
        console.log('JoyStick', e);
        X += e.x/10;
        Y += e.y/10;
        square.style.top = Y + "px";
        square.style.left = X + "px";
    });
    
} else {
    square.addEventListener('mousedown', function(e){
        isMoveStarted = true;
        console.log('mousedown', e);
    });
    window.addEventListener('mouseup', function(e){
        isMoveStarted = false;
        console.log('mouseup', e);
    });
    square.addEventListener('mousemove', function(e){
        if (isMoveStarted) {
            X += e.movementX;
            Y += e.movementY;
            square.style.top = Y + "px";
            square.style.left = X + "px";
            
        }
    })
}