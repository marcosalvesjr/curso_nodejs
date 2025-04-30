const x = 10;
const y = "Marcos";
const z = [10, 20];

console.log(x, y, z);

// cibtagen de impressões (interessante usar em loop)
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);

//variavel entre string
console.log("O nome é %s, ele é full stack", y);

//limpando console
setTimeout(() => {
  console.clear();
}, 2000);
