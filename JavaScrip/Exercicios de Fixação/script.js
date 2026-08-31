//EX 001
var parImparInput = document.querySelector("#parImpar")
var parImparBt = document.querySelector("#parImparBt")
var respostaParImpar = document.querySelector("#respostaParImpar")

parImparBt.addEventListener("click", ()=>{
    var parImpar = Number(parImparInput.value)

    if (parImpar % 2 == 0){
    respostaParImpar.innerText = "Numero Par"
} else{
    respostaParImpar.innerText = "Numero Impar"
}
})

//Ex 002
var numeroMais = document.querySelector("#numeroMais")
var numeroMenos = document.querySelector("#numeroMenos")
var nMaisMenos = document.querySelector("#nMaisMenos")
var respostaNMN = document.querySelector("#respostaNMN")

nMaisMenos.addEventListener("click", ()=>{
    var n1 = Number(numeroMais.value)
    var n2 = Number(numeroMenos.value)

    if (n1 > n2){
        respostaNMN.innerText = `${n1} é maior que ${n2}`
    } else{
        respostaNMN.innerText = `${n2} é maior que ${n1}`
    }
})

//Ex 003
var firstNumber = document.getElementById("firstNumber")
var secondNumber = document.getElementById("secondNumber")
var checkMedia = document.getElementById("checkMedia")
var respostaMedia = document.getElementById("respostaMedia")

checkMedia.addEventListener("click", ()=> {
    var resultado = (Number(firstNumber.value) + Number(secondNumber.value) )/ 2


    if (resultado >= 7){
        respostaMedia.innerText= "Aprovado"
    } else if (resultado >= 5){
        respostaMedia.innerText= "Recuperação"
    } else{
        respostaMedia.innerText= "Reprovado"
    }
})

//Ex 004

var nPartida = document.querySelector("#nPartida")
var nChegada = document.querySelector("#nChegada")
var checkRquatro = document.querySelector("#checkRquatro")
var resultadoRquatro = document.querySelector("#resultadoRquatro")

checkRquatro.addEventListener("click", ()=> {
    resultadoRquatro.innerText = ""

    var n1 = nPartida.value
    var n2 = nChegada.value

    while (n1 <= n2){
    resultadoRquatro.innerText += `=> ${n1}` 
    n1++
    }
    resultadoRquatro.innerText += " FIM!"

})




