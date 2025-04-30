const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

console.log(args);

const name = args["name"];
const profession = args["profissao"];

console.log(name);
console.log(profession);

console.log(`o nome dele é ${name} e a profissão é ${profession}`);
