const fs = require("fs");

const oldFile = "velho";
const newFile = "novoarquivo";

fs.rename(`${oldFile}.txt`, `${newFile}.txt`, function (err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(`O arquivo ${oldFile} foi renomeado para ${newFile}`);
  }
});
