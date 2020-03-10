const counter = document.getElementById("counter")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const submitComment = document.getElementById("submit")

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
    let number = 1

    if (likes.innerText.includes(`${counter.innerText}`)){
        const updateLike = document.getElementById(`${counter.innerText}`)
        updateLike.querySelector('span').innerText++
    } else {
        likes.appendChild(li)
        li.setAttribute("id", counter.innerText)
        li.innerHTML = `${counter.innerText} was liked <span> 1 </span> time(s)`
    }
})

submitComment.addEventListener('click', (event) => {
  event.preventDefault();  
})

function increment(){
    counter.innerText++
}





