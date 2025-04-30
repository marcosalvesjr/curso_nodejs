const chalk = require("chalk");

const nota = 8;

if (nota >= 7) {
  console.log(chalk.green.bold("Parabéns você foi aprovado!"));
} else {
  console.log(chalk.red.bold("Não aprovado!"));
}
