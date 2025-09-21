
function myMove() {
let div2 = document.getElementById("animate");
let pos = 0;
  let id = setInterval(function() {
    if (pos == 350) {
      clearInterval(id);
    }
    else {
      pos++;
      div2.style.left = pos + "px";
    }
  }, 1);
}

