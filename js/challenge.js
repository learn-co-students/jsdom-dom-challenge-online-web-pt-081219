let counter = document.querySelector('#counter');
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let heart = document.querySelector('#heart')
let comment = document.querySelector('#submit')
let pause = document.querySelector('#pause')

// document.addEventListener('DOMContentLoaded', () => {})
let interval = setInterval(increment, 1000);

function increment() {
  counter.innerText++;
}

function pauseEverything() {
  counter.disabled = true;
  plus.disabled = true;
  minus.disabled = true;
  heart.disabled = true;
  comment.disabled = true;
}

function resumeEverything() {
  counter.disabled = false;
  plus.disabled = false;
  minus.disabled = false;
  heart.disabled = false;
  comment.disabled = false;
}

pause.addEventListener('click', () => {
  if (pause.innerText === "pause") {
    pause.innerText = "resume"
    clearInterval(interval)
    pauseEverything()
  } else {
    pause.innerText = "pause"
    interval = setInterval(increment, 1000);
    resumeEverything()
  }
})


plus.addEventListener('click', () => {
  increment();
})

minus.addEventListener('click', () => {
  counter.innerText--;
})

heart.addEventListener('click', () => {
  const likes = document.querySelector('.likes')
  let li = document.createElement('li')

  if (likes.innerText.includes(`${counter.innerText}`)) {
    let alreadyLiked = document.getElementById(`${counter.innerText}`)
    alreadyLiked.querySelector('span').innerText++
  } else {
    likes.appendChild(li)
    li.setAttribute("id", counter.innerText)
    li.innerHTML = `${counter.innerText} was liked <span>1</span> time(s)`
  }
})

comment.addEventListener('click', () => {
  event.preventDefault()

  let div = document.querySelector('#list')
  let ul = document.createElement('ul')
  let li = document.createElement('li')
  let newComment = document.querySelector('#comment-input')
  li.innerText = newComment.value
  newComment.form.reset()

  div.appendChild(ul).appendChild(li)

})