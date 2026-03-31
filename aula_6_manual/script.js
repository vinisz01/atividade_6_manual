function exemploVar(){
var numero = 10
document.getElementById("saida").textContent = numero
}

function exemploLet(){
let cidade = "São Paulo"
document.getElementById("saida").textContent = cidade
}

function exemploConst(){
const pi = 3.14
document.getElementById("saida").textContent = pi
}

function comparacoes(){
let texto =
"5 == '5' : " + (5 == "5") + "\n" +
"5 === '5' : " + (5 === "5") + "\n" +
"5 != '5' : " + (5 != "5") + "\n" +
"5 !== '5' : " + (5 !== "5")
alert(texto)
}

function exemploIf(){
let idade = 18
if(idade >= 18){
document.getElementById("saida").textContent = "Maior de idade"
}
}

function exemploIfElse(){
let nota = 5
if(nota >= 6){
document.getElementById("saida").textContent = "Aprovado"
}else{
document.getElementById("saida").textContent = "Reprovado"
}
}

function exemploSwitch(){
let dia = 2
switch(dia){
case 1:
alert("Domingo")
break
case 2:
alert("Segunda-feira")
break
default:
alert("Outro dia")
}
}

function exemploFor(){
let texto = ""
for(let i=1;i<=5;i++){
texto += i + " "
}
document.getElementById("saida").textContent = texto
}

function exemploWhile(){
let contador = 1
let texto = ""
while(contador <= 5){
texto += contador + " "
contador++
}
document.getElementById("saida").textContent = texto
}

function cumprimentar(nome){
document.getElementById("saida").textContent = "Olá " + nome
}

function soma(a,b){
return a + b
}

document.addEventListener("DOMContentLoaded", function(){
document.getElementById("botaoEvento").addEventListener("click", function(){
alert("Botão clicado")
})
})