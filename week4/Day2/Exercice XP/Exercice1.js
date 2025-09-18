const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((color, index) => console.log(`${index} #choice is ${color}`));
let check = colors.some(function(color) {
  return color === "Violet";
});
if (check) {
  console.log("yes Violet color is present");
} else {
  console.log("No Violet color is not present");
}
