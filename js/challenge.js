document.addEventListener("DOMContentLoaded", function(e) {
    let counter = document.getElementById("counter");
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let heart = document.getElementById("heart");
    let pause = document.getElementById("pause");
    let submit = document.getElementById("submit");
    let comments = document.getElementById("list");

    let i = 0;
    let likes = 0;
    let keepTrackOfCounter = i;


    //Increment
    async function count() {
        for (i; i > -10000; i++) {
            counter.innerHTML = i;
            await sleep(1000);
        }
        i = keepTrackOfCounter;
    }
   count();

    //Minus
    minus.addEventListener("click", function(e) {
        e.preventDefault();
        i--;
        counter.innerHTML = i;
    });

    //Plus
    plus.addEventListener("click", function (e) {
        e.preventDefault();
        i++;
        counter.innerHTML = i;
    });

    //Like
    heart.addEventListener("click", function (e) {
        e.preventDefault();
        let li;
        let likeList = document.getElementsByClassName("likes")[0];

        if (document.getElementById(`${i}`) != null) {
            likes++;
            li = document.getElementById(i);
            li.innerText = `${i} has been liked ${likes} times`;
        }
        else {
            likes = 1;
            li = document.createElement("li");
            li.id = `${i}`; 
            li.innerText = `${i} has been liked ${likes} time`;
        }
        likeList.appendChild(li);
    });

    //Pause
    pause.addEventListener('click', function(e) {
        e.preventDefault();
        if (pause.innerText == "pause") {
            pause.innerText = "resume";
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
            keepTrackOfCounter = i;
            i = -100001;
        }
        else {
            pause.innerText = "pause";
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
            count();
        }
    });

    //Submit
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        let comment = document.createElement("p");
        comment.innerHTML = document.getElementById("comment-input").value;
        comments.appendChild(comment);
    });

});


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}