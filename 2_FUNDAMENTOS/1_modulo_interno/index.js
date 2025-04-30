const meuModulo = require("./meu_modulo");
const soma = meuModulo.soma;//devo passar como uma propriedada
                            //se eu tentar passar "meuModulo.soma()" ele entende que quero chamar a função

soma(2, 5);

soma(4, 5);
