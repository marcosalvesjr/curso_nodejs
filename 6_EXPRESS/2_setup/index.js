const express = require("express");
const app = express();
const port = 3000; //variavel ambiente

app.get("/", (req, res) => {
  res.send("olá mundo!");
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
