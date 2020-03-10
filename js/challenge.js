const counter = document.getElementById("counter")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const number = {}

document.addEventListener('DOMContentLoaded', (event) => {
    let interval = setInterval(increment, 1000);
})

plus.addEventListener('click', (event) => {
    increment();
})

minus.addEventListener('click', (event) => {
    counter.innerText--;
})

heart.addEventListener('click', (event) => {
    const likes = document.querySelector('.likes')
    const li = document.createElement('li')
    likes.appendChild()
    li.innerText = `${counter.innerText} was liked ${number} times`
})

function increment(){
    counter.innerText++
}




