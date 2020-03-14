document.addEventListener("DOMContentLoaded", function(){
    const counter = document.getElementById("counter");
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const heart = document.getElementById("heart");
    const pause = document.getElementById("pause");
    const likes = document.getElementsByClassName("likes")[0];
    const commentInput = document.getElementById("comment-input");
    const submit = document.getElementById("submit");
    const likeAmount = {};
    let paused = false;

    // timer start
    let timer = setInterval( incrementTimer, 1000 );

    function incrementTimer() {
        if (!paused) {
            counter.innerText++;
        }
    }
    
    // minus timer
    function minusTimer() {
        counter.innerText--;
    }

    minus.addEventListener("click", function(){
        minusTimer();
        console.log(counter.innerText);
    });
    
    // plus timer
    function plusTimer() {
        counter.innerText++;
    }

    plus.addEventListener("click", function(){
        plusTimer();
        console.log(counter.innerText);
    });
    
    // heart
    heart.addEventListener("click", function(){
        let seconds = parseInt(counter.innerText);
        if (!likeAmount[seconds]) {
            likeAmount[seconds] = 1;
            let thisLi = document.createElement("li");
            thisLi.id = `${seconds} seconds`;
            likes.appendChild(thisLi);
            thisLi.innerText = `Heart count for ${seconds} seconds is ${likeAmount[seconds]}`;
        }
        else {
            likeAmount[seconds]++;
            let thisLi = document.getElementById(`${seconds} seconds`)
            console.log(thisLi);
            thisLi.innerText = `Heart count for ${seconds} seconds is ${likeAmount[seconds]}`;

        }
        
    });
    
    // pause/resume
    console.log(pause.innerText);
    pause.addEventListener("click", function(){
        if (pause.innerText === "pause") {
            pause.innerText = "resume"
            paused = true;
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
        }
        else {
            pause.innerText = "pause"
            paused = false;
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
        }
    });

    // comment
    let thisUl = document.createElement("ul");
    const thisDiv = document.getElementsByTagName("div")[0];
    thisDiv.appendChild(thisUl);
    submit.addEventListener("click", function(event){
        event.preventDefault()
        let text = commentInput.value;
        let thisLi = document.createElement("li");
        thisLi.innerText = text;
        thisUl.appendChild(thisLi);
    });




})