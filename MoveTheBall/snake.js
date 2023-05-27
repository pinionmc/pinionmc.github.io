const snake = document.getElementById("snake");
let moving = true;
let movingto = "down";
let positiony = 307.5;
let positionx = 637.5;
const speed = 1;
let once = true;
const text = document.getElementById("text");
snake.style.left = positionx + "px";
snake.style.top = positiony + "px"; // Added a semicolon at the end of this line

setInterval(() => {
  if (positionx > 925 || positiony > 595 || positionx < 350 || positiony < 20) {
    // alert("youaredead");
    // positionx = 325;
    // positiony = 5;
    moving = false;
    snake.style.left = positionx + "px";
    snake.style.top = positiony + "px";
  }
}, 1);

function moveDown() {
  positiony = positiony + speed;
  snake.style.top = positiony + "px";
  if (moving && movingto === "down") {
    requestAnimationFrame(moveDown);
  }
}

function moveUp() {
  positiony = positiony - speed;
  snake.style.top = positiony + "px";
  if (moving && movingto === "up") {
    requestAnimationFrame(moveUp);
  }
}

function moveLeft() {
  positionx = positionx - speed;
  snake.style.left = positionx + "px";
  if (moving && movingto === "left") {
    requestAnimationFrame(moveLeft);
  }
}

function moveRight() {
  positionx = positionx + speed;
  snake.style.left = positionx + "px";
  if (moving && movingto === "right") {
    requestAnimationFrame(moveRight);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown" && movingto !== "up" && once) {
    window.requestAnimationFrame(moveDown);
    movingto = "down";
    moving = true;
  } else if (event.key === "ArrowUp" && movingto !== "down" && once) {
    window.requestAnimationFrame(moveUp);
    movingto = "up";
    moving = true;
  } else if (event.key === "ArrowLeft" && movingto !== "right" && once) {
    window.requestAnimationFrame(moveLeft);
    movingto = "left";
    moving = true;
  } else if (event.key === "ArrowRight" && movingto !== "left" && once) {
    window.requestAnimationFrame(moveRight);
    movingto = "right";
    moving = true;
  }
  
  setInterval(() => {
    text.innerHTML =
      "going: " +
      movingto +
      "<br> X-Coordinate: " +
      (positionx-637.5) +
      "<br> Y-Coordinate: " +
      (positiony-307.5);
  }, 2000);
});
