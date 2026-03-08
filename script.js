
const musicas = [

"musica/musica_02.mp3",
"musica/musica2.mp3",
"musica/musica_05.mp3",
"musica/musica4.mp3",
"musica/musica5.mp3",
"musica/musica6.mp3",
"musica/musica_07.mp3",
"musica/musica8.mp3",
"musica/musica9.mp3",
"musica/musica_01.mp3",
"musica/musica1.mp3",
"musica/musica_03.mp3",
"musica/musica_04.mp3",
"musica/musica3.mp3",
"musica/musica_06.mp3",
"musica/musica7.mp3"

]

let indice = 0
const player = document.getElementById("player")
player.volume = 0.8

function tocarMusica(){

player.src = musicas[indice]

player.play().catch(() => {
console.log("Autoplay bloqueado pelo navegador")
})

indice++

if(indice >= musicas.length){
indice = 0
}

}

player.addEventListener("ended", tocarMusica)


function criarCoracao(){

const heart = document.createElement("div")

heart.classList.add("heart")
heart.innerHTML = "❤️"

heart.style.left = Math.random()*100+"vw"
heart.style.fontSize = (Math.random()*20+10)+"px"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},6000)

}

setInterval(criarCoracao,500)



window.irParaHistoria = function(){

const conteudo = document.getElementById("conteudo")
const botao = document.getElementById("botao")
const frase = document.getElementById("frase")

botao.style.display = "none"
frase.style.display = "none"

conteudo.style.display = "block"

conteudo.scrollIntoView({
behavior:"smooth"
})

tocarMusica()

}

function abrirFoto(img, frase){

const modal = document.getElementById("modalFoto")
const foto = document.getElementById("fotoGrande")
const texto = document.getElementById("fraseFoto")

foto.src = img.src
texto.innerText = frase

modal.style.display = "flex"

}

function fecharFoto(){
document.getElementById("modalFoto").style.display = "none"
}

