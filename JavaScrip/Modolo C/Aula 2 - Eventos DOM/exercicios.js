//Criando variaveis buscando os objetos
//Dos Leds
var ledRed = document.querySelector("#ledVermelho")
var ledYellow = document.querySelector("#ledAmarelo")
var ledGreen = document.querySelector("#ledVerde")
var ledNome = document.querySelector("#ledName")

//Dos Botões
var btred = document.querySelector ("#btvermelho")
var btyellow = document.querySelector ("#btamarelo")
var btgreen = document.querySelector ("#btverde")

//Faz a escuta dos clicks e chama a função ao clicar
btred.addEventListener("click", vermelho)
btyellow.addEventListener("click", amarelo)
btgreen.addEventListener("click", verde)

//Cria a função de apagar cor, para ser usada pra zerar a cor do led sempre na hora que for trocar
function apagarLuzes(){
    ledRed.style.backgroundColor = "transparent"
    ledYellow.style.backgroundColor = "transparent"
    ledGreen.style.backgroundColor = "transparent"
}
//Cria as funções que colore o respectivo led e descolore os outros
function vermelho(){
    apagarLuzes()
    ledRed.style.backgroundColor = "rgb(182, 19, 19)"
    ledNome.innerHTML = "Vermelho"
    ledNome.style.backgroundColor = "rgb(182, 19, 19)"
}
function amarelo(){
    apagarLuzes()
    ledYellow.style.backgroundColor = "rgb(179, 179, 13)"
    ledNome.innerHTML = "Amarelo"
    ledNome.style.backgroundColor = "rgb(179, 179, 13)"
}
function verde(){
    apagarLuzes()
    ledGreen.style.backgroundColor = "green"
    ledNome.innerHTML = "Verde"
    ledNome.style.backgroundColor = "green"
}

//Exercicio do nome
//Criando as variaveis
var nome = document.querySelector("#nomeInput")
var btnome = document.querySelector("#btConfirmaNome")
var resultadoName = document.querySelector("#resultadoNome")

btnome.addEventListener("click", mostraNome)

function mostraNome(){
    //Cria uma variavel dentro da função que pega o valor passado no input do nome
    var mostraname = nome.value

    //Inserindo o nome no p referenciado pela variavel resultadoName e insere o nome obtido no input
    resultadoName.innerText = `Olá ${mostraname}`
}

//Exercicio da calculadora
var tela = document.querySelector ("#tela")
var numeroUm = document.querySelector("#numeroUm")
var sinal = document.querySelector("#sinal")
var numeroDois = document.querySelector("#numeroDois")
var soma = document.querySelector("#mais")
var menos = document.querySelector("#menos")
var dividido = document.querySelector("#dividido")
var multiplicado = document.querySelector("#multiplicado")



soma.addEventListener("click", adicao)
menos.addEventListener("click", subtrair)
dividido.addEventListener("click", dividir)
multiplicado.addEventListener("click", multiplicar)

//Função pra tornar os numeros em Number
function pegaNumero(){
    var n1 = Number(numeroUm.value)
    var n2 = Number(numeroDois.value)

    return{n1, n2}
}

function adicao(){
    var {n1, n2} = pegaNumero()
    sinal.innerText= "+"
    tela.innerText = n1 + n2
}

function subtrair(){
    var {n1, n2} = pegaNumero()
    sinal.innerText= "-"
    tela.innerText = n1 - n2
}

function dividir(){
    var {n1, n2} = pegaNumero()
    sinal.innerText= "/"
    tela.innerText = n1 / n2
}

function multiplicar(){
    var {n1, n2} = pegaNumero()
    sinal.innerText= "X"
    tela.innerText = n1 * n2
}