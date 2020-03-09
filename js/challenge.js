let counter = document.getElementById('counter')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let pause = document.getElementById('pause')
let heart = document.getElementById('heart')
let likes = {}
let interval = setInterval(incrementCounterOverTime, 1000)

document.addEventListener("DOMContentLoaded", () => {
  plus.addEventListener("click", incrementCounterWithButton)
  minus.addEventListener("click", decrementCounterWithButton)
  heart.addEventListener("click", likeNumber)
  pause.addEventListener("click", pauseCounter)
  incrementCounterOverTime()
})

const isRunning = () => {
  return pause.innerText === "pause" ? true : false
}

function incrementCounterOverTime() {
  counter.innerText = parseInt(counter.innerText) + 1
}

function incrementCounterWithButton() {
  counter.innerText = parseInt(counter.innerText) + 1
}

function decrementCounterWithButton() {
  counter.innerText = parseInt(counter.innerText) - 1
}

function likeNumber() {
  const key = parseInt(counter.innerText)
  likes[key] ? likes[key] += 1 : likes[key] = 1
  alert(`You liked ${counter.innerText} ${likes[key]} times`)
}

function pauseCounter() {
  pause.innerText = isRunning() ? "resume" : "pause"
  plus.disabled = isRunning() ? false : true
  minus.disabled = isRunning() ? false : true
  heart.disabled = isRunning() ? false :true
  }
