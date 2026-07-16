var area= document.getElementById("area")

function clicar (){
    area.innerText= "clicou!";
}

function entry(){
    area.style.backgroundColor = "darkgray";
}

function exit(){
    area.style.backgroundColor = "green";
}

var exemplo = document.getElementById("exemploDois");
exemplo.addEventListener ("click", click);
exemplo.addEventListener ("mouseenter", entrar);
exemplo.addEventListener ("mouseout", sair);

function click(){
    exemplo.innerText = "Clicou!";
    exemplo.style.backgroundColor = "red";
}

function entrar (){
    exemplo.innerText = "Entrou!";
}

function sair(){
    exemplo.innerText = "Saiu!";
    exemplo.style.backgroundColor = "green"
}

function error(){
    var erro = document.getElementById ("erro");

    erro.Style.backgroundColor = "blue"
}

//Criando as variaveis
var bTazul = document.getElementById("azul");
var bTamarelo = document.getElementById("amarelo");
var bTbranco = document.getElementById("branco");
var bTroxo = document.getElementById("roxo");
var bTmarrom = document.getElementById("marrom");
var bTpreto = document.getElementById("preto");

//fazendo a escuta
bTazul.addEventListener("click", azul);
bTamarelo.addEventListener("click", amarelo);
bTbranco.addEventListener("click", branco);
bTroxo.addEventListener("click", roxo);
bTmarrom.addEventListener("click", marrom);
bTpreto.addEventListener("click", preto);

function azul (){
    document.body.style.backgroundColor = "blue"
}
function amarelo (){
    document.body.style.backgroundColor = "yellow"
}
function branco (){
    document.body.style.backgroundColor = "white"
}
function roxo (){
    document.body.style.backgroundColor = "purple"
}
function marrom (){
    document.body.style.backgroundColor = "brown"
}
function preto (){
    document.body.style.backgroundColor = "black"
}