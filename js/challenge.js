document.addEventListener('DOMContentLoaded', (event) => {
  const counter = document.getElementById("counter");
  const plusClick = document.getElementById("plus");
  const minusClick = document.getElementById("minus");
  const heartClick = document.getElementById("heart");
  const pauseClick = document.getElementById("pause");
  let interval = setInterval(increment, 1000);

  // Visually increment counter by 1
  function increment() {
    counter.innerText++
  }

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
    if (likes.innerText.includes(`${counter.innerText}`)){
      const updateLike = document.getElementById(`${counter.innerText}`)
      updateLike.querySelector('span').innerText++
  } else {
      likes.appendChild(li)
      li.setAttribute("id", counter.innerText)
      li.innerHTML = `${counter.innerText} was liked <span> 1 </span> time(s)`
  }
  })

  // Click pause
  pauseClick.addEventListener('click', (event) => {
    // If not paused, pause and update button text
    if (pauseClick.innerText === "pause"){
      pauseClick.innerText = "resume"
      // clears the interval to pause timer
      clearInterval(interval)
      // disables the +/- buttons while paused
      pauseAll();
  } else {
      // if paused already, resume and update button text
      pauseClick.innerText = "pause"
      // resets the interval
      interval = setInterval(increment, 1000);
      // reactivated the disabled buttons
      resumeAll();
  }   
  })

  submitComment.addEventListener('click', (event) => {
    // overrides the submit button
    event.preventDefault();  
    //adds the new comment to the page
    const form = document.getElementById('comment-form')
    const newComment = document.getElementById('comment-input')
    const p = document.createElement('p')
    form.appendChild(p)
    p.innerText = newComment.value 
    form.reset();
})

  function pauseAll(){
    // disables all buttons
    counter.disabled = true;
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submitComment.disabled = true;
  }

  function resumeAll(){ 
    // enables all buttons
      counter.disabled = false;
      plus.disabled = false;
      minus.disabled = false;
      heart.disabled = false;
      submitComment.disabled = false; 
  }

})


