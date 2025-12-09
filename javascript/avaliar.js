

let op = Number(prompt( "Avaliação Renan : \n Escolha 3 opções: case 1 , case 2 , case 3"))

switch(op){

case 1:
//Peça o peso de 5 pessoas e calcule a média desses pesos.mostre resultado
alert("A média de 5 pesos :")
let soma = 0
for (let i = 1; i <= 5; i++) {
    let peso = Number(prompt("Digite o peso " + i + ":" ))
    soma= soma + peso
}
let media = soma / 5
alert("A média dos 5 pesos é: " + media.toFixed(2))
break

case 2:
// Peça dois números e uma operação matemática (+, -, *, /). Calcule e mostre o resultado da operação escolhida.
alert("Operação Matemética com dois números:")
const numero1 = Number(prompt ("Digitar um número:"))
const numero2 = Number(prompt("Digite outro número:"))
const opm = prompt("Digite qual operação matemática gostaria:   adição,   subtração,   multiplicação ou  divisão")
const adicao = (numero1 + numero2)
const subtracao = (numero1 - numero2)
const multiplicacao =(numero1* numero2)
const divisao = (numero1/numero2)

if( opm === "adição"){
  alert("Resultado de " + numero1 + " + " + numero2 + " = " + adicao )
}
else if(opm ==="subtração"){
 alert("Resultado de " + numero1 + " - " + numero2 + " = " + subtracao)
}
else if(opm === "multiplicação"){
 alert("Resultado de " + numero1 + " * " + numero2 + " = " + multiplicacao)
}
else if (opm=== "divisão"){
 alert("Resultado de " + numero1 + " ÷ " + numero2 + " = " + divisao)
}  
break

case 3:
// Peça 10 números e diga quantos deles são negativos.(Ultilize estrutura repetição)
alert(" Verificação se números são negativos ou positivos:")
let sinal = 0
for (let i = 1; i <= 10; i++) {
    let num = Number(prompt("Digite o número: " + i + ":"))
     if( num< 0){
        sinal --
   alert(" Quantidade de negativos é "+sinal)
}}

}