document.addEventListener("DOMContentLoaded", () => {

  //set variables
  const counter = document.getElementById('counter');
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');
  const formButton = document.getElementById('submit');
  const pauseButton = document.getElementById('pause');
  let pause = false 

  //counter
  setInterval(addSeconds, 1000);

  function addSeconds() {
    if (pause === false) {
      counter.innerText++;
    }
  };

  plus.onclick = addSeconds

  minus.onclick = function subtractCount() {
    counter.innerText--;
  };

  pauseButton.onclick = function pauseAll() {
    const buttons = [heartButton, plus, minus, formButton]
    if (pause === true ) {
      pause = false 
      pauseButton.innerText = "pause"
      buttons.forEach(function(item) {
        item.disabled = false
      });
    } 
    else {
      pause = true 
      pauseButton.innerText = "resume"
      buttons.forEach(function(item) {
        item.disabled = true
      });
    }
  };


  //likes
  const heartButton = document.getElementById('heart');
  const likes = document.querySelector('ul');

  heartButton.addEventListener("click", () => {
    let like = document.createElement("li");
    if (likes.innerHTML.includes(`${counter.innerText}`)) {
      let updteLike = document.getElementById(`${counter.innerText}`);
      updteLike.querySelector('span').innerText++;
      if (!updteLike.innerText.includes(`times`)) {
        let multiLikes = updteLike.innerHTML.replace("time", "times");
        updteLike.innerHTML = multiLikes;
      };
    }
    else {
      like.setAttribute("id", counter.innerText);
      like.innerHTML = `${counter.innerText} was liked <span> 1 </span> time.`
      likes.appendChild(like)
    }
  });


  //comments
  const commentForm = document.querySelector('form')
  const input = document.getElementById('comment-input')
  const commentList = document.getElementById('list')

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let comment = document.createElement('p');
    comment.innerText = input.value;
    commentList.appendChild(comment);
    input.value = " ";
  });

});