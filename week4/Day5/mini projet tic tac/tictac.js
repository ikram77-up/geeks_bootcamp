let div = document.getElementById("board");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]


btn1.addEventListener("click", function (event) {
    event.preventDefault();
    board.style.display = "none";

})

btn2.addEventListener("click", function (event) {
    event.preventDefault();
    board.style.display = "none";
})