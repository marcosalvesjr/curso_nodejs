const path = require("path");

//path absoluto
console.log("-=-=-=-=-=-=-=-path absoluto=-=-=-=-=-=--");
console.log(path.resolve("teste.txt"));

//formar path
console.log("-=-=-=-=-=-formar path=-=-=-=-=-=-");
const midFolder = "relatorios";
const fileName = "marcos.txt";

const finalPath = path.join("/", "arquivos", midFolder, fileName);
console.log(finalPath);
