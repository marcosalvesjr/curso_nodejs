const inquirer = require("inquirer");
const chalk = require("chalk");

//recebendo dados do usuário

inquirer
  .prompt([
    { name: "name", message: "Qual seu nome?" },
    { name: "age", message: "Qual sua idade?" },
  ])
  .then((answers) => {
    if (!answers.name || !answers.age) {
      throw new Error("O nome e a idade são obrigatorios");
    }

    const response = `O nome do usuario é ${answers.name} e a idade é ${answers.age}`;
    console.log(chalk.bgYellow.black(response));
  })
  .catch((err) => console.log(err));
