function atualizarContador(){

let inicio = new Date("2021-10-17")
let hoje = new Date()

let anos = hoje.getFullYear() - inicio.getFullYear()
let meses = hoje.getMonth() - inicio.getMonth()
let dias = hoje.getDate() - inicio.getDate()

if(dias < 0){
meses--
dias += 30
}

if(meses < 0){
anos--
meses += 12
}

document.getElementById("anos").innerText = anos + " anos"
document.getElementById("meses").innerText = meses + " meses"
document.getElementById("dias").innerText = dias + " dias"
}

setInterval(atualizarContador,1000)
const musicas = [

"musica/musica1.mp3",
"musica/musica2.mp3",
"musica/musica3.mp3",
"musica/musica4.mp3",
"musica/musica5.mp3",
"musica/musica6.mp3",
"musica/musica7.mp3",
"musica/musica8.mp3",
"musica/musica9.mp3",
]

let indice = 0
const player = document.getElementById("player")
function tocarMusica(){
player.src = musicas[indice]
player.play()
indice++
if(indice >= musicas.length){
indice = 0
}}

player.addEventListener("ended", tocarMusica)
tocarMusica()