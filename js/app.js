let increaseBtn = document.querySelector('.increaseBtn')
let counterInput = document.querySelector('.counter input')
function increase () {
let value = Number(counterInput.value)
counterInput.value = value + 1


}

increaseBtn.addEventListener('click' , increase)

let decreaseBtn = document.querySelector('.decreaseBtn')

function decrease () {
    let value = Number(counterInput.value)
    if(value > 1){

        counterInput.value = value - 1
    }
}

decreaseBtn.addEventListener('click' , decrease)

function  resetToPositive () {
    let PNum = Math.abs(counterInput.value)
    counterInput.value = PNum
}

counterInput.addEventListener('keyup' , resetToPositive)