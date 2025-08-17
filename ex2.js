// ex2.js

// --- Versão A: array "fixo" para testar rapidamente ---
// Troque os números para testar
// const arr = [5, 2, 9, 1, 7];

// --- Versão B: passar os números pela linha de comando ---
// Ex.: node ex2.js 5 2 9 1 7
const args = process.argv.slice(2);
const arr = args.map(Number); // converte tudo para número

if (arr.length === 0 || arr.some(Number.isNaN)) {
  console.log('Use: node ex5.js 5 2 9 1 7  (somente números)');
  process.exit(1);
}

function maiorDoArray(numeros) {
  // Implementação "na unha" pra treinar lógica
  if (numeros.length === 0) return null;
  let max = numeros[0];
  for (const n of numeros) {
    if (n > max) {
      max = n;
    }
  }
  return max;

  // (Alternativa pronta de JS: Math.max(...numeros))
  // return Math.max(...numeros);
}

const resultado = maiorDoArray(arr);
console.log(`Maior número: ${resultado}`);
