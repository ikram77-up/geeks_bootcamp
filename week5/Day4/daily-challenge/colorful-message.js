import chalk from "chalk";

export function colorfulMessage() {
    return chalk.green(" good morning everyone!") + "\n" +
        chalk.blue(" Learning Node.js with Chalk!") + "\n" +
        chalk.red(" learning fs file system!");
}