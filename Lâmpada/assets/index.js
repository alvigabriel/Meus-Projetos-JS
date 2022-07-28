console.log('Olá, mundo')

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


function isBroken()  {
    return lamp.src.indexOf ('quebrada') > -1
}

const lampOn = () => {
    if ( !isBroken () ){
        lamp.src = './assets/img/ligada.jpg';
    }
}

const lampOff = () => {
    if ( !isBroken () ){
        lamp.src ='./assets/img/desligada.jpg'
    }    
}

const lampB = () => {
    lamp.src = './assets/img/quebrada.jpg'
}



turnOn.addEventListener ('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampB)