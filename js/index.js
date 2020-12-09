import * as basicLightbox from '../node_modules/basiclightbox/src/scripts/main.js'


// const buttonRef = document.querySelector('.button-js');
const divGameAreaRef = document.querySelector('.wrapper-game-area');
const btnStartRef = document.querySelector('.menu-btn-start');
// const box = document.querySelector('.box-red-js');
const spanPoints = document.querySelector('.header-text-points');
const spanTaimerRef = document.querySelector('.timer');


let caunter = 0;

btnStartRef.addEventListener('click', startGame)

const obj = {
    x: Math.floor(Math.random() * 780),
    y: Math.floor(Math.random() * 280)
}

function startGame() {
    btnStartRef.removeEventListener('click', startGame)
    divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-red-js" ></div>');
    btnStartRef.setAttribute('disabled', 'disabled' )
    const box = document.querySelector('.box-red-js');
    box.style.transform = `translate(${obj.x}px, ${obj.y}px)`;
    getTaimer()
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
let timer


function getTaimer() {
   
    if (t === 3) {
        return (
            spanTaimerRef.textContent = `30 сек.`,
            openModal(),
            t=0
        )
    }
     t +=1
    setTimeout(getTaimer, 1000) 
   spanTaimerRef.textContent = `${t} сек.`
}



// Модалка
// const buttonOpenRef = document.querySelector('.open');
const instance = basicLightbox.create(  
    document.querySelector('#modal'),
   {closable: false}
)
// buttonOpenRef.addEventListener('click',openModal)

function openModal() {
    
    instance.show()
    if (instance.visible()) {
        const textPointsResultRef =document.querySelector('.points-result-js');
       
        addText(textPointsResultRef)

        const close = document.querySelector('.close-btn');
        
        close.addEventListener('click', () => {
            instance.close()                 //Просто вызываем встроееный метод и не нужно снимать слушатель
            removes()
        })
    }

}


function addText(point) {
          point.textContent = `Количество очков: ${caunter}`  
}

function removes() {
    spanTaimerRef.textContent = '00.00'
    spanPoints.textContent = 0
    caunter = 0
    btnStartRef.removeAttribute('disabled', 'disabled')
    btnStartRef.addEventListener('click', startGame)
}