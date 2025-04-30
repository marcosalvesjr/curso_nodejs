//nome

console.log(process.argv);

const args = process.argv.slice(2);

console.log(args);

const nome = args[0].split("=")[1];
console.log(nome);

const age = args[1].split("=")[1];
console.log(age);

console.log(`o nome é ${nome} e a idade é ${age}`);
