import * as basicLightbox from '../node_modules/basiclightbox/src/scripts/main.js'


// const buttonRef = document.querySelector('.button-js');
const divGameAreaRef = document.querySelector('.wrapper-game-area');
const btnStartRef = document.querySelector('.menu-btn-start');
const btnNewGameRef =document.querySelector('.menu-btn-newGame');
// const box = document.querySelector('.box-red-js');
const spanPoints = document.querySelector('.header-text-points');
const spanTaimerRef = document.querySelector('.timer');
const ilListPlayersRef =document.querySelector('.list-players');


let caunter = 0;

btnNewGameRef.addEventListener('click', startGame)
btnStartRef.addEventListener('click', startGame)

const obj = {
    x: Math.floor(Math.random() * 780),
    y: Math.floor(Math.random() * 280)
}

function startGame() {

    btnStartRef.removeEventListener('click', startGame)
    btnNewGameRef.removeEventListener('click', startGame)

    divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-red-js" ></div>');
    btnStartRef.setAttribute('disabled', 'disabled')
    const box = document.querySelector('.box-red-js'); //ДУБЛИРОВАНИЕ НАДО ЧТОТО ПРИДУМАТЬ!!!
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
            instance.close()                 
                console.log(`Спасибо ${inputName}`);
                saveLocalStorage(inputName)
            }
           
        }
      

        const close = document.querySelector('.close-btn');
        
        close.addEventListener('click', () => {
            instance.close()                 //Просто вызываем встроееный метод и не нужно снимать слушатель
            removes()
        })
    }

}


function saveLocalStorage(inputName) { //сохраня в локал стораж
    localStorage.setItem('nameUser', inputName)
    if (localStorage.getItem('nameUser')) {
        const nameUser = localStorage.getItem('nameUser');
        addNameInTable(nameUser, caunter) 
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
