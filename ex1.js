// ex1.js
// 1) converte argumento de linha de comando para número
//    Ex.: node ex1.js 7
const arg = process.argv[2];           // pega o 1º argumento após o nome do arquivo
const n = Number(arg);                  // converte string -> número

// 2) validação simples
if (Number.isNaN(n)) {
  console.log("Por favor, passe um número. Ex.: node ex1.js 10");
  process.exit(1);
}

// 3) lógica: resto da divisão por 2
function ehPar(numero) {
  return numero % 2 === 0;
}

// 4) saída
if (ehPar(n)) {
  console.log(`${n} é par`);
} else {
  console.log(`${n} é ímpar`);
}
