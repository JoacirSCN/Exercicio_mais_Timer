/* MUITO VERBOSO */
function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

console.log(max(10, 2));


/* MELHOROU 1.0 */
function max2(x, y) {
  if (x > y) return x;
  return y;
}

console.log(max2(10, 2));


/* MELHOROU 2.0 */
function max3(x, y) {
  return x > y ? x : y;
}
console.log(max3(10, 2));



/* Ideal*/
const max4 = (x, y) => {
  return x > y ? x : y
}



/* PERFEITO */
const max5 = (x, y) =>  x > y ? x : y;



const ePaisagem = (width, height) => Number(width) > Number(height) ? true : false;


const ePaisagem2 = (width, height) => Number(width) > Number(height);


// Escreva uma função que recebe um número
// retorne o seguinte:
// número é divisível por 3 = Fizz
// número é divisível por 5 = Buzz
// número é divisível por 3 e 5 = FizzBuzz
// número não é divisível por 3 e 5 = Retorne o próprio número
// checar se o número é realmente um número, se não for, então NaN
// use a função com números de 0 a 100

function fizzBuzz(number) {
  if (typeof number !== 'number') return NaN;
  if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';
  return number;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
