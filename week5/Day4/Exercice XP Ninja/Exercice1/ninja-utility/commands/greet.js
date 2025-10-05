import chalk from "chalk";
export function greet(name) {
    console.log(chalk.green(`Hello ${name} !`));
}
greet("Ikram");