const fs = require("fs");

console.log("inicio");

fs.writeFile("file.txt", "hello", function (err) {
  setTimeout(function () {
    console.log("Arquivo criado");
  }, 1000);
});

console.log("fim");
