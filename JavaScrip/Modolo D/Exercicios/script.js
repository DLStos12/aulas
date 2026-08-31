var mainBackground = document.querySelector("#mainBackground")
var horario = document.querySelector("#horario")
var imgHorario = document.querySelector("#imgHorario")
var titleHora = document.querySelector("#titleHora")
var buscaHorario = new Date()
var horas = buscaHorario.getHours()

if (horas >= 18){
    horario.innerText = `Agora são ${horas} Horas`
    mainBackground.style.backgroundColor = "darkblue"
    imgHorario.src = "noite.jpg"
    titleHora.innerText = "Noite"
    
} else if (horas >= 12){
    horario.innerText = `Agora são ${horas} Horas`
    mainBackground.style.backgroundColor = "orange"
    imgHorario.src = "tarde.jpg"
    titleHora.innerText = "Tarde"

}else if (horas >= 6){

    horario.innerText = `Agora são ${horas} Horas`
    mainBackground.style.backgroundColor = "lightyellow"
    imgHorario.src = "manhã.jpg"
    titleHora.innerText = "Manhã"
    
} else{
    horario.innerText = `Agora são ${horas} Horas`
    mainBackground.style.backgroundColor = "darkblue"
    imgHorario.src = "noite.jpg"
    titleHora.innerText = "Madrugada"
}