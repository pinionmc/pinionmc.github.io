const snake = document.getElementById("snake");
const text = document.getElementById("text");
const s = document.getElementById("speed");
const speedup = document.getElementById("speedup");
const speeddown = document.getElementById("speeddown");
let moving = true;
let movingto = "down";
let positiony = 307.5;
let positionx = 637.5;
const speed = [1];
let once = true;
let x1 = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;
snake.style.left = positionx + "px";
snake.style.top = positiony + "px";

function up() {
  speed[0] = speed[0] + 1
  s.textContent = "Current Speed: " + speed[0]
}

function down() {
  if (speed[0] !== 1) {
    speed[0] = speed[0] - 1
    s.textContent = "Current Speed: " + speed[0]
  }
}

function txt() {
  text.innerHTML ="going: " + movingto + "<br> X-Coordinate: " + (positionx-637.5) + "<br> Y-Coordinate: " + (positiony-307.5);
}
txt()

setInterval(() => {
  if (positionx > 925 || positiony > 595 || positionx < 350 || positiony < 20) {
    positionx = 637.5;
    positiony = 307.5;
    moving = false;
    snake.style.left = positionx + "px";
    snake.style.top = positiony + "px";
    alert("youaredead");
  }
}, 1);

function moveDown() {
  positiony = positiony + speed[0];
  snake.style.top = positiony + "px";
  if (moving && movingto === "down") {
    requestAnimationFrame(moveDown);
  }
}

function moveUp() {
  positiony = positiony - speed[0];
  snake.style.top = positiony + "px";
  if (moving && movingto === "up") {
    requestAnimationFrame(moveUp);
  }
}

function moveLeft() {
  positionx = positionx - speed[0];
  snake.style.left = positionx + "px";
  if (moving && movingto === "left") {
    requestAnimationFrame(moveLeft);
  }
}

function moveRight() {
  positionx = positionx + speed[0];
  snake.style.left = positionx + "px";
  if (moving && movingto === "right") {
    requestAnimationFrame(moveRight);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown" && movingto !== "up" && once && x1 === 0) {
    window.requestAnimationFrame(moveDown);
    movingto = "down";
    moving = true;
    x1 = 1;
    x3 = 0;
    x4 = 0;
  } else if (event.key === "ArrowUp" && movingto !== "down" && once && x2 === 0) {
    window.requestAnimationFrame(moveUp);
    movingto = "up";
    moving = true;
    x2 = 1;
    x3 = 0;
    x4 = 0;
  } else if (event.key === "ArrowLeft" && movingto !== "right" && once && x3 === 0) {
    window.requestAnimationFrame(moveLeft);
    movingto = "left";
    moving = true;
    x3 = 1;
    x1 = 0;
    x2 = 0;
  } else if (event.key === "ArrowRight" && movingto !== "left" && once && x4 === 0) {
    window.requestAnimationFrame(moveRight);
    movingto = "right";
    moving = true;
    x4 = 1;
    x1 = 0;
    x2 = 0;
  }

txt()
});

setInterval(() => {
  text.innerHTML = "going: " + movingto + "<br> X-Coordinate: " + (positionx - 637.5) + "<br> Y-Coordinate: " + (positiony - 307.5);
}, 200);

s.textContent = "Current Speed: " + speed[0]