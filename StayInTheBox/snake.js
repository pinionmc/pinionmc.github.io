const snake = document.getElementById("snake");
const text = document.getElementById("text");
const s = document.getElementById("speed");
const speedup = document.getElementById("speedup");
const speeddown = document.getElementById("speeddown");
const ligit = document.getElementById("ligit");
let moving = true;
let movingto = "No Were";
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

setInterval(() => {
  if (movingto !== "No Were") {
    speed[0] += 1;
    s.textContent = "Current Speed: " + speed[0];

  }
}, 1000);

function txt() {
  text.innerHTML =
    "going: " +
    movingto +
    "<br> X-Coordinate: " +
    (positionx - 637.5) +
    "<br> Y-Coordinate: " +
    (positiony - 307.5);
}
txt();

setInterval(() => {
  if (positionx > 925 || positiony > 595 || positionx < 350 || positiony < 20) {
    positionx = 637.5;
    positiony = 307.5;
    snake.style.left = positionx + "px";
    snake.style.top = positiony + "px";
    ligit.textContent = "Its a ligit run";


    setTimeout(() => {
      s.textContent = "Current Speed: " + speed[0];
      location.reload();
      alert("Your Score Is: " + speed[0]);
      ligit.textContent = "Its a ligit run";
    }, 100);
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
  } else if (
    event.key === "ArrowUp" &&
    movingto !== "down" &&
    once &&
    x2 === 0
  ) {
    window.requestAnimationFrame(moveUp);
    movingto = "up";
    moving = true;
    x2 = 1;
    x3 = 0;
    x4 = 0;
  } else if (
    event.key === "ArrowLeft" &&
    movingto !== "right" &&
    once &&
    x3 === 0
  ) {
    window.requestAnimationFrame(moveLeft);
    movingto = "left";
    moving = true;
    x3 = 1;
    x1 = 0;
    x2 = 0;
  } else if (
    event.key === "ArrowRight" &&
    movingto !== "left" &&
    once &&
    x4 === 0
  ) {
    window.requestAnimationFrame(moveRight);
    movingto = "right";
    moving = true;
    x4 = 1;
    x1 = 0;
    x2 = 0;
  }
  if (event.key === "s" && movingto !== "up" && once && x1 === 0) {
    window.requestAnimationFrame(moveDown);
    movingto = "down";
    moving = true;
    x1 = 1;
    x3 = 0;
    x4 = 0;
  } else if (event.key === "w" && movingto !== "down" && once && x2 === 0) {
    window.requestAnimationFrame(moveUp);
    movingto = "up";
    moving = true;
    x2 = 1;
    x3 = 0;
    x4 = 0;
  } else if (event.key === "a" && movingto !== "right" && once && x3 === 0) {
    window.requestAnimationFrame(moveLeft);
    movingto = "left";
    moving = true;
    x3 = 1;
    x1 = 0;
    x2 = 0;
  } else if (event.key === "d" && movingto !== "left" && once && x4 === 0) {
    window.requestAnimationFrame(moveRight);
    movingto = "right";
    moving = true;
    x4 = 1;
    x1 = 0;
    x2 = 0;
  }

  txt();
});

setInterval(() => {
  text.innerHTML =
    "going: " +
    movingto +
    "<br> X-Coordinate: " +
    (positionx - 637.5) +
    "<br> Y-Coordinate: " +
    (positiony - 307.5);
    
}, 200);

s.textContent = "Current Speed: " + speed[0];
