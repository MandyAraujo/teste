// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.


const sp = 67826.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;
let total = 0;

total = sp+rj+mg+es+outros;


const array = [sp,rj,mg,es,outros]
const array2 = ["SP","RJ","MG","ES","outros estados"]

for(let i = 0; i<array.length; i++){
    
    console.log(`${array2[i]} obteve: ${parseFloat(((100*array[i])/total).toFixed(2))}% de representação no faturamento mensal da distribuidora`)

}

