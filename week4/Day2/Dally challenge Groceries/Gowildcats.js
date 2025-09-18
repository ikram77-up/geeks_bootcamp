const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
const usernames = [];
gameInfo.forEach(user => {
  usernames.push(user.username + "!");
});
console.log(usernames);

const winers = [];
gameInfo.forEach(user => {
  if (user.score > 5) {
    winers.push(user.username);
  }
});
console.log(winers);


const combineScores = gameInfo.reduce((acc, u) => acc + u.score, 0);
console.log("total score:", combineScores);