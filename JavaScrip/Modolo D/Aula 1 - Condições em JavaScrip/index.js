//Criando variaveis que buscam o objeto na pagina
var velocidade = document.querySelector("#velocidade")
var btConfirma = document.querySelector("#btConfirma")
var resultado = document.querySelector("#resultado")

//faz o Js escutar quando o botão for clicado e chama a função mostrarResultado()
btConfirma.addEventListener("click", mostrarResultado)

//Cria a função
function mostrarResultado(){

    //pega o numero que foi digitado pelo usuario
    var valorVelocidade = Number(velocidade.value) 

    //verifica se a velocidade esta a cima de 60
    //se sim printa voce passou do limite e deixa cor vermelha
    if (valorVelocidade > 60){
        resultado.innerText = "Você passou do Limite"
        resultado.style.border = "3px dashed red"

    //se não diz parabens e deixa cor verde
    } else{
        resultado.innerText = "Parabens, continue assim!"
        resultado.style.border = "3px dashed green"
    }

}


// var fome = window.prompt("Esta com fome? Sim ou Não")

// if (fome == "Sim") {
//     var buscaComida = window.prompt("Tem comida")

//     if(buscaComida === "Sim"){
//         window.alert("Comendo")
//     }else{
//         window.alert("Comprando Comida")
//     }

// }else{
//     window.alert("Sem Fome")
// }
