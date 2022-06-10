// SOME VARIABLES *****
let box = document.querySelector("#my_bouncing_box");
// let viewHeight = window.innerHeight + 'px';
// let viewWidth = window.innerWidth + 'px';

// INITIAL CONDITIONS *****
// global variables
let xPos = 0;
let yPos = 0;
let xMoving = 5;
let yMoving = 5;

setInterval (moveBox, 50); // Every 50 ms, run the function moveBox.

function moveBox(){  
    xPos += xMoving;  // Increment x-coordinate value
    yPos += yMoving;  // Increment y-coordinate value
    box.style.left = xPos + 'px';  // Update x-coordinate in the dom
    box.style.top = yPos + 'px';  // Update y-coordinate in the dom

    // If the box hits the right edge or left edge, will reverse its x movement.
    // If the box hits the bottom edge or top edge, will reverse its y movement.
    if (xPos >= window.innerWidth-100 || xPos<=0) {
        xMoving = -xMoving;
    } else if (yPos >= window.innerHeight-100 || yPos<=0){
        yMoving = -yMoving;
    }
}
