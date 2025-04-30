const x = "10";

// checar se x é itneiro
if (!Number.isInteger(x)) {
  throw new Error("O valor de x não é inteiro!");
}

console.log("continuando o código");
