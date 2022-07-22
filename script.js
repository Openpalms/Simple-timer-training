// Time 
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondsElement = document.querySelector('.second')
const milisecElement = document.querySelector('.milisec')


//buttons
const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const loopBtn = document.querySelector('.loop')

//EventListeners
startBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval =setInterval(startTimer, 10)
})

pauseBtn.addEventListener('click', () => {
    clearInterval(interval)
})
stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    clearAll()
})

loopBtn.addEventListener('click', () => {
    i++
    clearInterval(interval)
    const results = document.querySelector('.results')
    const block = document.createElement('div')
    block.classList.add('results__info')
    block.setAttribute('id', 'child')
    block.innerText = `Result ${i}: ${hour}:${minute}:${second}:${milisecond}`
    results.append(block)
    clearAll();
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})
// loopBtn.addEventListener('contextmenu', (e) => {
// e.preventDefault();
// // const parent = document.querySelector('.results__block')
// // const childs = document.querySelectorAll('#child')
// // parent.remove(childs)
// const results = document.querySelector('.results')
//     const block = document.createElement('div')
//     results.remove(block)


// })

//Variables time
let hour = 00,
    minute = 00,
    second = 00,
    milisecond =00,
    interval,
    i =0,
    inactiveBtn = true;


function startTimer(){
    milisecond++

    //Ms
    if(milisecond < 9){
        milisecElement.innerText = '0' + milisecond
    }
    if(milisecond > 9){
        milisecElement.innerText = milisecond
    }
    if(milisecond > 99){
        second++
        secondsElement.innerText = '0' + second
        milisecond = 0;
        milisecElement.innerText = '0' + milisecond
    }

    //Sec
    if(second < 9){
        secondsElement.innerText = '0' + second
    }
    if(second > 9){
        secondsElement.innerText = second
    }
    if(second > 59){
        minute++
        minuteElement.innerText = '0' + minute
        second = 0;
        secondsElement.innerText = '0' + second
    }

    //minute
    if(minute < 9){
        minuteElement.innerText = '0' + minute
    }
    if(minute > 9){
        minuteElement.innerText = minute
    }
    if(minute > 59){
        hour++
        hourElement.innerText = '0' + hour
        minute = 0;
        minuteElement.innerText = '0' + minute
    }
    //Hour 
    if(hour < 9){
        hourElement.innerText = '0' + hour
    }
    if(hour > 9){
        hourElementElement.innerText = hour
    }
   
}
function inactive(){
    if(inactiveBtn){
        loopBtn.inactiveBtn = true;
    }
}


function clearAll(){
    hour = 00
    minute = 00
    second = 00
    milisecond =00
    hourElement.textContent='00'
    minuteElement.textContent='00'
    secondsElement.textContent='00'
    milisecElement.textContent='00'
}
inactive();