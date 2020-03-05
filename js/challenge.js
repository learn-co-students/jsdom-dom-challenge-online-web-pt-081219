document.addEventListener('DOMContentLoaded', () => {

let intervalId = null;
let counter = document.querySelector("#counter");
function incrementCount() {
    const current_count = parseInt(counter.innerText);
    counter.innerText = current_count + 1;
};

function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

function startTimer() {
    intervalId = setInterval(incrementCount, 1000)
}
startTimer()

let pause = document.getElementById("pause");
pause.addEventListener('click', function(){
    if (intervalId) {
        stopTimer();
        pause.innerText = "play";
    } else {
        startTimer();
        pause.innerText = "pause";
    };
});

function newLi() {
    return document.createElement("li");
};

function getOccurrence() {
    var count = 0;
    likedAry.forEach((v) => (v === counter.innerText && count++));
    return count;
};

let likes = document.querySelector(".likes");
function printLike(counterText) {
    let newLike = likes.appendChild(newLi());
    newLike.innerText = `${counterText} has been liked ${getOccurrence()} times`;
};

let minus = document.querySelector("#minus");
minus.addEventListener("click", function() { 
    counter.innerText = parseInt(counter.innerText, 10) - 1;
});

let plus = document.querySelector("#plus");
plus.addEventListener("click", function() { 
    counter.innerText = parseInt(counter.innerText, 10) + 1;
});

let likedAry = [];
let heart = document.querySelector("#heart");
heart.addEventListener("click", function() {
    likedAry.push(`${counter.innerText}`);
    let counterText = parseInt(counter.innerText);
    printLike(counterText)
});

let commentForm = document.getElementsByTagName("form")[0];

commentForm.addEventListener("submit", function(a){
    a.preventDefault();
    var b=this.children[0]
    c=b.value;b.value="";
    var d=document.querySelector(".comments")
    e=document.createElement("p");
    e.innerText=c,d.appendChild(e)
});

heart.addEventListener("click", function() {
    var time = counter.innerText 
});
});