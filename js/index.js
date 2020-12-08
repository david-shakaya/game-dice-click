import * as basicLightbox from '../node_modules/basiclightbox/src/scripts/main.js'

const buttonRef = document.querySelector('.button-js');
const divGameAreaRef = document.querySelector('.wrapper-game-area');
const btnStartRef = document.querySelector('.menu-btn-start');
const box = document.querySelector('.box-red-js');
const spanPoints = document.querySelector('.header-text-points');
let caunter = 0;

btnStartRef.addEventListener('click', startGame)

const obj = {
    x: Math.floor(Math.random() * 780),
    y: Math.floor(Math.random() * 280)
}


function startGame() {

    divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-red-js" ></div>');
    btnStartRef.setAttribute('disabled', 'disabled' )
    const box = document.querySelector('.box-red-js');
    box.style.transform = `translate(${obj.x}px, ${obj.y}px)`;
    
    box.addEventListener('click', () => {
       //При клике приплюсовует к спану очки
        caunter += 2;
        spanPoints.textContent = caunter

        const x = Math.floor(Math.random() * 780);
        const y = Math.floor(Math.random() * 380);
    box.style.transform = `translate(${x}px, ${y}px)`;
    
})
}

// Таймер через сраку(улучшаем)
let t = 0;
let timer;
dfs()

function dfs() {
    t +=1
    timer = setTimeout(dfs, 1000) 
    console.log(t);
}




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
