

const images = [
   { 'id': '1', 'url':'./assets/img/L1.png'},
   { 'id': '2', 'url':'./assets/img/L2.png'},
   { 'id': '3', 'url':'./assets/img/L3.png'},
   { 'id': '4', 'url':'./assets/img/L4.png'},
   { 'id': '5', 'url':'./assets/img/L5.png'},
   { 'id': '6', 'url':'./assets/img/L6.png'},
   { 'id': '7', 'url':'./assets/img/L7.png'},
   { 'id': '8', 'url':'./assets/img/L8.png'},
]

const containerItems = document.querySelector('#container-items')


const loadImages = (images, container) => {
    images.forEach ( image => {
        container.innerHTML += `
        <div class="item">
            <img src="${image.url}"
        </div>
        `
    })
}




loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length -1]
    containerItems.insertBefore( lastItem, items[0]);
    items = document.querySelectorAll('.item');
}


document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)