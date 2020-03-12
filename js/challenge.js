 document.addEventListener('DOMContentLoaded', (event) => {
    const counter =       document.getElementById('counter');
    const plus =          document.getElementById('plus');
    const minus =         document.getElementById('minus');
    const heart =         document.getElementById('heart');
    const pause =         document.getElementById('pause');
    const submitComment = document.getElementById('submit');
    let isPaused =        false;
    let intervalID;

    function startCounter() {
        intervalID = setInterval(incrementTimer, 1000);
    };

    function stopCounter() {
        clearInterval(intervalID);
    };

    function incrementTimer(){
        counter.innerText++;
    };

    function decrementTimer() {
        counter.innerText--;
    };

    function pauseTimer() {
        if (isPaused === false) {
            stopCounter();
            isPaused = true;
            pause.innerText = 'resume';
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            submitComment.disabled = true;
        } else {
            startCounter();
            isPaused = false;
            pause.innerText = 'pause';
            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            submitComment.disabled = false;
        }
    };

    function like() {
        const likes = document.querySelector('.likes');
        let li = document.createElement('li');
        if (likes.innerText.includes(`${counter.innerText}`)){
            alreadyLiked = document.getElementById(`${counter.innerText}`);
            alreadyLiked.querySelector('span').innerText++;
        } else {
            likes.appendChild(li);
            li.setAttribute('id', `${counter.innerText}`)
            li.innerHTML = `${counter.innerText} has <span>1</span> like(s)`;
        }
    };
    
    function addComment(event = false){
        if (event){
            event.preventDefault();
        }
        let div = document.getElementById('list');
        let ul = document.createElement('ul');
        div.appendChild(ul);
        let li = document.createElement('li');
        ul.appendChild(li);
        let comment = document.getElementById('comment-input');
        li.innerText = comment.value;
    };

    startCounter();
    plus.onclick = incrementTimer;
    minus.onclick = decrementTimer;
    pause.onclick = pauseTimer;
    heart.onclick = like;
    submitComment.onclick = addComment;
});
