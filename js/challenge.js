
document.addEventListener("DOMContentLoaded", () => {
    console.log("Are we here");
    
    let intervalId = setInterval(increaseCount, 2000);

    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const heart = document.getElementById("heart");
    const pause = document.getElementById("pause");
    const counter = document.getElementById("counter");
    const commentfrm = document.getElementById("comment-form");
    
    function increaseCount() {
        const current_count = parseInt(counter.innerText);
        counter.innerText = current_count + 1;
    }
    
    function decreaseCount() {
        const current_count = parseInt(counter.innerText);
        counter.innerText = current_count - 1;
    }


    pause.addEventListener("click", () => {
        if (intervalId) {
            pause.innerText = "resume";
            clearInterval(intervalId);
            intervalId = null;
        }
        else {
            intervalId = setInterval(increaseCount, 2000);
            pause.innerText = "pause";
        }
        });

    
    
    plus.addEventListener("click", () => {
        console.log("plus")
        const current_count = parseInt(counter.innerText);
        counter.innerText = current_count + 1;

    }); 
    
    minus.addEventListener("click", () => {
        console.log("minus")
        const current_count = parseInt(counter.innerText);
        counter.innerText = current_count - 1;

    }); 

    commentfrm.addEventListener("submit", () => {
        event.preventDefault();
        const newCommentInput = document.getElementById("comment-input");
        const newComment = document.createElement("p");
        newComment.innerText = newCommentInput.value;

        appendNewComment(newComment);
        event.target.reset()
    });
    
    // const createComment = event => {
    //     event.preventDefault();
    //     const newCommentInput = document.getElementById("comment-input");
    //     const newComment = document.createElement("p");
    //     newComment.innerText = newCommentInput.value;

    //     appendNewComment(newComment);
    //     // event.target.reset();

    // };

    const appendNewComment = comment => {
        document.querySelector("ul").appendChild(comment);
    };

    
    });



