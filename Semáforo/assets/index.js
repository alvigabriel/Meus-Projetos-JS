const Ver = document.getElementById('red')
const Ye = document.getElementById('yellow')
const Green = document.getElementById('green')
const Desl = document.getElementById('desl')
const Img = document.getElementById('sem-img')

const Red = () => {
    Img.src = './assets/img/vermelho.png'
}

const Yel = () => {
    Img.src = './assets/img/amarelo.png'
}

const Gre = () => {
    Img.src = './assets/img/verde.png'
}

const Desli = () => {
    Img.src = './assets/img/desligado.png'
}

Ver.addEventListener('click', Red)
Ye.addEventListener('click', Yel)
Green.addEventListener('click', Gre)
Desl.addEventListener('click', Desli)