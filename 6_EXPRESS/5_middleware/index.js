const express = require("express");
const app = express();
const port = 3000; //variavel ambiente
const path = require("path");

const basePath = path.join(__dirname, "templates");

const checkAuth = function (req, res, next) {
  req.authStatus = false;

  if (req.authStatus) {
    console.log("Prossiga!");
    next();
  } else {
    console.log("Faça o login para continuar");
    next();
  }
};

app.use(checkAuth);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
