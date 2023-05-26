const s = document.getElementById("snake");
// const test = document.getElementById("test");

document.addEventListener("keydown", function (event) {
  var a = event.key;
  // if (event.key === 'e' || event.key === 'E') {
  //     var py = parseInt(s.style.top) ;
  //     s.style.top = py  + 1 + 'px';
  // }
});
setInterval(() => {
  if (a === "e" || a === "E") {
    var py = parseInt(s.style.top);
    s.style.top = py + 1 + "px";
  }
}, 1000);
