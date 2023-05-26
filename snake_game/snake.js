const s = document.getElementById("snake");
const test = document.getElementById("test");

document.addEventListener("keydown", function (event) {
  const key = event.key;
  let rect = s.getBoundingClientRect();

  test.textContent = key;

  if (key === "ArrowDown") {
    console.log(rect.y);

    s.setAttribute("style", "top: 30px")
  }
});
