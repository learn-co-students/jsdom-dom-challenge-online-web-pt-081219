document.addEventListener('DOMContentLoaded', () => {

    let intervalId = null;
    const counter = document.querySelector("#counter");
    function incrementCount() {
        const current_count = parseInt(counter.innerText);
        counter.innerText = current_count + 1;
    };
    
    function stopCounter() {
        clearInterval(intervalId);
        intervalId = null;
    };
    
    function startCounter() {
        intervalId = setInterval(incrementCount, 1000)
    };
    startCounter();
    
    let pause = document.getElementById("pause");
    pause.addEventListener('click', function(){
        if (intervalId) {
            stopCounter();
            pause.innerText = " play ";
        } else {
            startCounter();
            pause.innerText = "pause";
        };
    });
    
    let minus = document.querySelector("#minus");
    minus.addEventListener("click", function() { 
        counter.innerText = parseInt(counter.innerText, 10) - 1;
    });
    
    let plus = document.querySelector("#plus");
    plus.addEventListener("click", function() { 
        counter.innerText = parseInt(counter.innerText, 10) + 1;
    });
    
    let likes = document.querySelector(".likes");
    function addOrCreateLi(counterText) {
        if (document.getElementById(`${counterText}`)) {
            let updateLi = document.getElementById(`${counterText}`)
            updateLi.innerText = `${counterText} has been liked ${getOccurrence()} times`;
        } else {
        let newLike = likes.appendChild(document.createElement('li'));
        newLike.id = `${counterText}`
        newLike.innerText = `${counterText} has been liked ${getOccurrence()} times`;
        };
    };
    
    let likedAry = [];
    let heart = document.querySelector("#heart");
    heart.addEventListener("click", function() {
        const counterText = parseInt(counter.innerText);
        likedAry.push(`${counterText}`);
        addOrCreateLi(counterText);
    });
    
    function getOccurrence() {
        var count = 0;
        likedAry.forEach((v) => (v === counter.innerText && count++));
        return count;
    };
    
    let commentForm = document.getElementsByTagName("form")[0];
    commentForm.addEventListener("submit", function(a){
        a.preventDefault();
        var b=this.children[0]
        c=b.value;b.value="";
        var d=document.querySelector(".comments")
        e=document.createElement("p");
        e.innerText=c,d.appendChild(e)
    });
    });