// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

let num = 20;  // numero informado

let pertence = false;

for (var i = 2; i < num; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];               //formando a sequencia de fibonacci
}

for (var j = 0; j < fibonacci.length; j++){
    if(fibonacci[j] == num){                            //validando se o numero informado pertence a sequencia de fibonacci
        pertence = true;
    }
    
}


console.log(fibonacci);
console.log(pertence == true ? "Número informado pertence a sequencia " : "Número informado não pertence a sequencia");