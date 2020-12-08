import * as basicLightbox from '../node_modules/basiclightbox/src/scripts/main.js'

const buttonRef = document.querySelector('.button-js');
const divGameAreaRef = document.querySelector('.wrapper-game-area');


const x = Math.floor(Math.random() * 780)
const y = Math.floor(Math.random() * 290)

divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-red-js"></div>');
const box = document.querySelector('.box-red-js');
box.style.transform = `translate(${x}px, ${y}px)`;
// const newDiv = document.createElement('div')
// newDiv.setAttribute('width', '10px')
// newDiv.setAttribute('heigth', '10px')


divGameAreaRef.append(newDiv)
console.log(newDiv);


// Модалка
const buttonOpenRef = document.querySelector('.open');
const instance = basicLightbox.create(  
    document.querySelector('#modal')
)
buttonOpenRef.addEventListener('click',openModal)

function openModal() {
    instance.show()

    if (instance.visible()) {
        const close =document.querySelector('.close');
        close.addEventListener('click', () => {
            instance.close()                 //Просто вызываем встроееный метод и не нужно снимать слушатель
        })
    }
     console.log(instance.visible());
}
