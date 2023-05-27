const snake = document.getElementById("snake");
let moving = true;
let movingto = "down";
let positiony = 0;
let positionx = 0;
const speed = 15;
let once = true;
const text = document.getElementById("text");


function moveDown() {
  positiony = positiony + speed;
  snake.style.top = positiony + "px";
  if (moving && movingto === "down") {
    requestAnimationFrame(moveDown);
  }
} function moveUp() {
  positiony = positiony - speed;
  snake.style.top = positiony + "px";
  if (moving && movingto === "up") {
    requestAnimationFrame(moveUp);
  }
} function moveLeft() {
  positionx = positionx - speed;
  snake.style.left = positionx + "px";
  if (moving && movingto === "left") {
    requestAnimationFrame(moveLeft);
  }
} function moveRight() {
  positionx = positionx + speed;
  snake.style.left = positionx + "px";
  if (moving && movingto === "right") {
    requestAnimationFrame(moveRight);
  }
}
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown" && movingto !== "up" && once) {
    moving = false;
    window.requestAnimationFrame(moveDown);
    movingto = "down";
    moving = true;
  } else if (event.key === "ArrowUp" && movingto !== "down" && once) {
    moving = false;
    window.requestAnimationFrame(moveUp);
    movingto = "up";
    moving = true;
  } else if (event.key === "ArrowLeft" && movingto !== "right" && once) {
    moving = false;
    window.requestAnimationFrame(moveLeft);
    movingto = "left";
    moving = true;
  } else if (event.key === "ArrowRight" && movingto !== "left" && once) {
    moving = false;
    window.requestAnimationFrame(moveRight);
    movingto = "right";
    moving = true;
  }
  text.textContent = "going: " + movingto;
});
