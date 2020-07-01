document.addEventListener("DOMContentLoaded", function(){
    plus()
    minus()
    pause()
})
let count =  document.getElementById("counter")
let plusButton = document.getElementById("plus")
let minusButton = document.getElementById("minus")
let heartButton = document.getElementById("heart")
let timer = setInterval(counter, 1000)

function counter() {
  count.innerText = parseInt(count.innerText, 10) + 1
}

function plus() {
  plusButton.addEventListener("click", counter)
}

function minus() {
  minusButton.addEventListener("click", function(){
    count.innerText = parseInt(count.innerText, 10) - 1;
  })
}

function pause() {
  let pauseButton = document.getElementById("pause")
  pauseButton.addEventListener("click", function() {
    if(pauseButton.textContent === "Resume") {
      pauseButton.textContent = "Pause"
      minusButton.disabled = false;
      plusButton.disabled = false;
      heartButton.disabled = false;
      timer = setInterval(counter, 1000)
    }
    else {
      pauseButton.textContent = "Resume"
      plusButton.disabled = true;
      minusButton.disabled = true;
      heartButton.disabled = true;
      clearInterval(timer )
    }
  })
}

function heart() {
  heartButton.addEventListener("click", function(){
  })
}
