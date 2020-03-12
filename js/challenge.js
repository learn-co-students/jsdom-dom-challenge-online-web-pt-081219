 document.addEventListener('DOMContentLoaded', (event) => {
    const counter =       document.getElementById('counter');
    const plus =          document.getElementById('plus');
    const minus =         document.getElementById('minus');
    const heart =         document.getElementById('heart');
    const pause =         document.getElementById('pause');
    const submitComment = document.getElementById('submit');
    let isPaused =      false;
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
            // debugger
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
        likes.appendChild(li);
        li.innerText = `${counter.innerText}`;
    };
    // function like() {
    //     debugger
    //     likedNumber = counter.innerText;
    //     let li = document.createElement('li');
    //     if (likes.innnerText.includes(`${likedNumber}`)){
    //         let hasLike = document.getElementById(`${likedNumber}`)
    //         hasLike.querySelector('span').innerText++
    //     } else {
    //         li.setAttribute('id', likedNumber); 
    //         li.innerHTML = `${likedNumber} was liked <span>1</span> time(s)`;
    //         likes.appendChild(li);
    //     }
    // };

    startCounter();
    plus.onclick = incrementTimer;
    minus.onclick = decrementTimer;
    pause.onclick = pauseTimer;
    heart.onclick = like;

});
