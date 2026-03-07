function atualizarContador() {

  const inicio = new Date(2021, 9, 17); 
  // mês começa do 0 → outubro = 9

  const hoje = new Date();

  const diff = hoje - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  const anos = Math.floor(dias / 365);
  const meses = Math.floor(dias / 30);

  document.getElementById("contador").innerHTML =
    anos + " anos ❤️<br>" +
    meses + " meses ❤️<br>" +
    dias + " dias ❤️";
}

setInterval(atualizarContador,1000);

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

function criarCoracao() {

  const heart = document.createElement("div");

  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(criarCoracao, 500);

function irParaHistoria(){
  document.querySelector("#conteudo").scrollIntoView({
    behavior: "smooth"
  });
}