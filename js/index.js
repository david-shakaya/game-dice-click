// import * as basicLightbox from '../node_modules/basiclightbox/src/scripts/main.js'
// const basicLightbox = require('.basiclightbox')
// console.log(basicLightbox);

// const buttonRef = document.querySelector('.button-js');
const divGameAreaRef = document.querySelector('.wrapper-game-area');
const btnStartRef = document.querySelector('.menu-btn-start');
const btnNewGameRef =document.querySelector('.menu-btn-newGame');
// const box = document.querySelector('.box-red-js');
const spanPoints = document.querySelector('.header-text-points');
const spanTaimerRef = document.querySelector('.timer');
const ilListPlayersRef = document.querySelector('.list-players');
const bodyRef = document.querySelector('body');

var audio = new Audio();
audio.preload = 'auto';
audio.src = './images/frog-sound.mp3';

//     var audio = new Audio();
// audio.preload = 'auto';
// audio.src = './images/frog-sound.mp3';
// audio.play();

let caunter = 0;
let saveCaunter = 0;
let string = ''
btnNewGameRef.addEventListener('click', startGame)
btnStartRef.addEventListener('click', startGame)

const randomNumbersX = [
     Math.floor(Math.random() * 780),
    Math.floor(Math.random() * 780),
    Math.floor(Math.random() * 780),
    Math.floor(Math.random() * 780),
    Math.floor(Math.random() * 780),
    Math.floor(Math.random() * 780),
    Math.floor(Math.random() * 780)
]

 if (localStorage.getItem('nameUser')) {
        const nameUser = localStorage.getItem('nameUser');
        addNameInTable(nameUser, saveCaunter) 
    }
// console.log(Math.floor(Math.random() * arrRandomX.length.map((el => el))));
const randomNumber = randomNumbersX[Math.floor(Math.random() * randomNumbersX.length)];
console.log(randomNumber);

const obj = {
    x: Math.floor(Math.random() * 780),
    y: Math.floor(Math.random() * 280)
}
const objA = {
    x: Math.floor(Math.random() * 780),
    y: Math.floor(Math.random() * 280)
}
const objB = {
    x: Math.floor(Math.random() * 780),
    y: Math.floor(Math.random() * 280)
}
const objC = {
    x: Math.floor(Math.random() * 780),
    y: Math.floor(Math.random() * 280)
}
//масив других жаб
const arrFrogs = [
    `<div class="box-rasta" style="transform: translate(${randomNumber}px, ${objC.y}px);" ></div>`,
    // `<div class="box-danger" style="transform: translate(${objA.x}px, ${objA.y}px);"></div>`,
    `<div class="box-orang" style="transform: translate(${randomNumber}px, ${objB.y}px);"></div>`
];


// arrFrogs[Math.floor(Math.random() * arrFrogs.length)]



// function z() {
    
//     console.log('dd')
// }
// setInterval(z, 3000);
// console.log(z());
   
// console.log(frog);

function startGame() {

    btnStartRef.removeEventListener('click', startGame)
    btnNewGameRef.removeEventListener('click', startGame)

    divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-red-js" ></div>');
  
    
    // setInterval(generateFrog, 2000);// другие жабы


    

    btnStartRef.setAttribute('disabled', 'disabled')
    const boxOrangRef = document.querySelector('.box-orang')
    // const boxDangerRef = document.querySelector('.box-danger')
    const boxRastaRef = document.querySelector('.box-rasta')// другие жабы
  

    const box = document.querySelector('.box-red-js'); //ДУБЛИРОВАНИЕ НАДО ЧТОТО ПРИДУМАТЬ!!!
    box.style.transform = `translate(${obj.x}px, ${obj.y}px)`;
    getTaimer()
//     spanTaimerRef.addEventListener('change', getNumber)

// function getNumber(e) {
//     console.log(e.value);
// }
    // const spanTaimerRef = document.querySelector('.timer');
   
    box.addEventListener('click', () => {
 
       //При клике приплюсовует к спану очки
   
        caunter += 2;
        saveCaunter += 2;
        spanPoints.textContent = caunter
         audio.play();

        const x = Math.floor(Math.random() * 780);
        const y = Math.floor(Math.random() * 380);
        box.style.transform = `translate(${x}px, ${y}px)`;
    })

    // if(boxOrangRef){
    //  boxOrangRef.addEventListener('click', () => {
    //     const x = Math.floor(Math.random() * 780);
    //     const y = Math.floor(Math.random() * 380);
    //     boxOrangRef.style.transform = `translate(${x}px, ${y}px)`;
    //  })
    // }
    // if(boxDangerRef){
    //   boxDangerRef.addEventListener('click', () => {
    //     const x = Math.floor(Math.random() * 780);
    //     const y = Math.floor(Math.random() * 380);
    //     boxDangerRef.style.transform = `translate(${x}px, ${y}px)`;
    //   })
    // }

//     if (string === '2 сек.') {
//         divGameAreaRef.insertAdjacentHTML('afterbegin', arrFrogs[Math.floor(Math.random() * arrFrogs.length)])
// const parent = document.querySelectorAll('.wrapper-game-area > div');
//     if (boxRastaRef) {
//         console.log('yes');
//       }
//     }

    //  boxRastaRef.addEventListener('click', randomPlace)
    

}// событие старт

// function randomPlace() {
//     const boxRastaRef = document.querySelector('.box-rasta')
//     boxRastaRef.removeEventListener('click', randomPlace)
//     boxRastaRef.remove()
//      const x = Math.floor(Math.random() * 780);
//         const y = Math.floor(Math.random() * 380);
//          boxRastaRef.style.transform = `translate(${x}px, ${y}px)`;
// }

// function removeBoxFrog() {
//     if()
// }


// function addAllBoxFrog(orang, danger, rasta) {
//     if (orang) {
//     orang.style.transform = `translate(${objA.y}px, ${obj.x}px)`    
//     }
//     if (danger) {
//     danger.style.transform = `translate(${obj.y}px, ${objA.x}px)`    
//     }
//     if (rasta) {
//     rasta.style.transform = `translate(${objA.x}px, ${objA.y}px)`
//     }
// }


// Таймер через сраку(улучшаем)
let t = 0;
let timer

 const x = Math.floor(Math.random() * 780);
 const y = Math.floor(Math.random() * 380);

function getTaimer() {
   
    if (t === 3) {
        return (
            spanTaimerRef.textContent = `30 сек.`,
            onOpenModal(),
            t=0
        )
    }
     t +=1
    setTimeout(getTaimer, 1000) 
    spanTaimerRef.textContent = `${t} сек.`

    
    if (t === 2 || t === 4 || t === 6 || t === 8||t===11 || t ===14 || t===16 || t===20 || t===23 ||t===25||t===28) {
       
        divGameAreaRef.insertAdjacentHTML('afterbegin', arrFrogs[Math.floor(Math.random() * arrFrogs.length)])
        const boxRastaRef = divGameAreaRef.querySelector('.box-rasta');
        const boxOrangRef = divGameAreaRef.querySelector('.box-orang');
        if (boxRastaRef) {

 const x = Math.floor(Math.random() * 780);
 const y = Math.floor(Math.random() * 380);

            boxRastaRef.style.transform = `translate(${x}px, ${y}px)`;
// boxRastaRef.style.transform = `translate(${randomNumber}px, ${objB.y}px)`;
            boxRastaRef.addEventListener('click', handleRemoveRasta)
        } else {
             const x = Math.floor(Math.random() * 780);
             const y = Math.floor(Math.random() * 380);
               boxOrangRef.style.transform = `translate(${x}px, ${y}px)`;
            //  boxOrangRef.style.transform = `translate(${randomNumber}px, ${y}px)`;
            boxOrangRef.addEventListener('click', handleRemoveOrange)
        }
    }
    if (t === 3|| t===5|| t=== 7|| t ===9||t ===12|| t=== 15|| t===18||t===21|| t===24|| t ===26||t===29) {
      const boxRastaRef = divGameAreaRef.querySelector('.box-rasta');
        const boxOrangRef = divGameAreaRef.querySelector('.box-orang');
        
        if (boxRastaRef) {
            // boxRastaRef.removeEventListener('click', handleRemoveRasta)
            boxRastaRef.remove()
        } else {
         boxOrangRef.removeEventListener('click', handleRemoveOrange)
            boxOrangRef.remove()
        }
    }
}


function handleRemoveRasta(e) {

    if (e) {
        caunter += 3;
        saveCaunter += 3;
        spanPoints.textContent = caunter
        
        const boxRastaRef = divGameAreaRef.querySelector('.box-rasta');
        // boxRastaRef.style.transform = `translate(${x}px, ${y}px)`;
          audio.play();
        boxRastaRef.removeEventListener('click', handleRemoveRasta)
        boxRastaRef.remove()
    }
}
function handleRemoveOrange(e) {
        
    
    if (e) {
        caunter -= 5;
        saveCaunter -= 5;
        spanPoints.textContent = caunter
        const boxOrangRef = divGameAreaRef.querySelector('.box-orang');
        boxOrangRef.removeEventListener('click', handleRemoveOrange)
        boxOrangRef.remove()
        audio.play();

        // boxOrangRef.style.transform = `translate(${randomNumber}px, ${y}px)`;
    }
}

function getRandomInt() {
  Math.random() * Math.floor(780)
    // Math.random() * Math.floor(380)
    
}



// Модалка
// const buttonOpenRef = document.querySelector('.open');

// buttonOpenRef.addEventListener('click',openModal)
function onOpenModal() {
  window.addEventListener('keydown', onPressEscape)
  bodyRef.classList.add('show-modal')
    console.log(bodyRef.classList);
    
    if (bodyRef.classList) {
        const textPointsResultRef =document.querySelector('.points-result-js');
        const box = document.querySelector('.box-red-js');
        box.remove()
        addText(textPointsResultRef)
        const formRef = document.querySelector('.form-action');
        const inputRef = document.querySelector('.input-js');
        const btnSubmitRef = document.querySelector('.btn-submit');
        
        formRef.addEventListener('submit', handleSubmit)

        function handleSubmit(e) {
            e.preventDefault();
            const inputName = inputRef.value
            if (inputName === '') {
                console.log('Неправильно!');
            } else {
            formRef.removeEventListener('submit', handleSubmit)
            formRef.reset()
            removes()
               onCloseModal()
                console.log(`Спасибо ${inputName}`);
                saveLocalStorage(inputName)
            }
           
        }
      
// function onCloseModal() {
//   window.removeEventListener('keydown', onPressEscape)
//   bodyRef.classList.remove('show-modal')
// }


        const close = document.querySelector('.close-btn');
        
        close.addEventListener('click', () => {
            window.removeEventListener('keydown', onCloseModal)
              bodyRef.classList.remove('show-modal')
                         //Просто вызываем встроееный метод и не нужно снимать слушатель
            removes()
        })
    }
}


//>>>>>>  НОВАЯ МОДАЛКА <<<<
/* НАХОДИМ КЛАССЫ*/
// Находим кнопку с дата атрибутом  
// const buttonOpenModalRef = document.querySelector('button[data-action="open-modal"]');
// const buttonCloseModalRef = document.querySelector('button[data-action="close-modal"]');
// // находим боди , в сss повешан класс со стилями на боди 

// const backdropRef = document.querySelector('.js-backdrop')


// /*  СЛУШАТЕЛИ*/
// Добавляем слушатель на клик и в функии добавляем клас боди(открыть модалку)
// buttonOpenModalRef.addEventListener('click', onOpenModal)
// Добавляем слушатель на клик и в функии УДАЛЯЕМ клас с боди(закрыть модалку)
// buttonCloseModalRef.addEventListener('click', onCloseModal)
// Добавляем слушатель на клик что бы при нажатии на серую область backdrop  (закрыть модалку)
// backdropRef.addEventListener('click', onBackdropClick)


// /*  ФУНКЦИИ */
//Закрывает модалку при нажатии esc. На window вешаем слушатель keydown.
// На место колбека передаем функцию onPressEscape которая и закрівает модалку.


function onCloseModal() {
  window.removeEventListener('keydown', onPressEscape)
  bodyRef.classList.remove('show-modal')
}

// function onBackdropClick(event) {
//   if (event.target === event.currentTarget) {
//    onCloseModal()
//   }
// }


function onPressEscape (event) {
  if (event.code === 'Escape') {
      console.log('Потом=)');
    }
  }




// >>>>>>>>>>>>>>>
function saveLocalStorage(inputName) { //сохраня в локал стораж
    localStorage.setItem('nameUser', inputName)
    if (localStorage.getItem('nameUser')) {
        const nameUser = localStorage.getItem('nameUser');
        addNameInTable(nameUser, saveCaunter) 
    }
}

function addNameInTable(nameUser, caunt) {
     
    ilListPlayersRef.insertAdjacentHTML('beforeend', `<li class="list-item-players">${nameUser}: ${caunt} очков</li>`)
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
    btnNewGameRef.addEventListener('click', startGame)
     
}


// ТАЙМЕР

// const FULL_DASH_ARRAY = 283;
// const WARNING_THRESHOLD = 10;
// const ALERT_THRESHOLD = 5;

// const COLOR_CODES = {
//   info: {
//     color: "green"
//   },
//   warning: {
//     color: "orange",
//     threshold: WARNING_THRESHOLD
//   },
//   alert: {
//     color: "red",
//     threshold: ALERT_THRESHOLD
//   }
// };

// const TIME_LIMIT = 20;
// let timePassed = 0;
// let timeLeft = TIME_LIMIT;
// let timerInterval = null;
// let remainingPathColor = COLOR_CODES.info.color;

// document.getElementById("app").innerHTML = `
// <div class="base-timer">
//   <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//     <g class="base-timer__circle">
//       <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
//       <path
//         id="base-timer-path-remaining"
//         stroke-dasharray="283"
//         class="base-timer__path-remaining ${remainingPathColor}"
//         d="
//           M 50, 50
//           m -45, 0
//           a 45,45 0 1,0 90,0
//           a 45,45 0 1,0 -90,0
//         "
//       ></path>
//     </g>
//   </svg>
//   <span id="base-timer-label" class="base-timer__label">${formatTime(
//     timeLeft
//   )}</span>
// </div>
// `;

// startTimer();

// function onTimesUp() {
//   clearInterval(timerInterval);
// }

// function startTimer() {
//   timerInterval = setInterval(() => {
//     timePassed = timePassed += 1;
//     timeLeft = TIME_LIMIT - timePassed;
//     document.getElementById("base-timer-label").innerHTML = formatTime(
//       timeLeft
//     );
//     setCircleDasharray();
//     setRemainingPathColor(timeLeft);

//     if (timeLeft === 0) {
//       onTimesUp();
//     }
//   }, 1000);
// }

// function formatTime(time) {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   if (seconds < 10) {
//     seconds = `0${seconds}`;
//   }

//   return `${minutes}:${seconds}`;
// }

// function setRemainingPathColor(timeLeft) {
//   const { alert, warning, info } = COLOR_CODES;
//   if (timeLeft <= alert.threshold) {
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.remove(warning.color);
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.add(alert.color);
//   } else if (timeLeft <= warning.threshold) {
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.remove(info.color);
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.add(warning.color);
//   }
// }

// function calculateTimeFraction() {
//   const rawTimeFraction = timeLeft / TIME_LIMIT;
//   return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
// }

// function setCircleDasharray() {
//   const circleDasharray = `${(
//     calculateTimeFraction() * FULL_DASH_ARRAY
//   ).toFixed(0)} 283`;
//   document
//     .getElementById("base-timer-path-remaining")
//     .setAttribute("stroke-dasharray", circleDasharray);
// }
