const counter = document.getElementById("counter");
const plusClick = document.getElementById("plus");
const minusClick = document.getElementById("minus");
const heartClick = document.getElementById("heart");
const pauseClick = document.getElementById("pause");
let number = {};

// Visually increment counter by 1
function increment() {
  counter.innerText++
}

// Create a timer
document.addEventListener('DOMContentLoaded', (event) => {
  let interval = setInterval(increment, 1000);
})

// Clicking Plus call increment
plusClick.addEventListener('click', (event) => {
  increment();
})

// Click minus decrements
minusClick.addEventListener('click', (event) => {
  counter.innerText--
})

// Click heart 
heartClick.addEventListener('click', (event) => {
  // We do stuff here
  const likes = document.querySelector('.likes')

  // Create a new li on click
  const li = document.createElement('li')

  // Appends the li, and updates the innerText
  likes.appendChild(li)
  li.innerText = `${counter.innerText} was liked`
})

// Click pause
pauseClick.addEventListener('click', (event) => {

  // pause the counter

  // Disable all buttons except pause

  // Rename pause to "resume"
})
