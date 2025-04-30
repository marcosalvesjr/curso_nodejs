const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual sua linguagem preferida?", (language) => {
  if (language === "python") {
    console.log(`${language} não é linguagem.`);
  } else {
    console.log(`minha linguagem preferida é ${language}`);
  }
  readline.close();
});
