document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    const plus = document.getElementById("plus")
    const minus = document.getElementById("minus")
    const heart = document.getElementById("heart")
    const commentForm = document.getElementById("comment-form")
    const pause = document.getElementById("pause")
    const commentsList = document.getElementById("list")

    
    let increment = () => counter.innerText++
    let interval = setInterval(increment, 1000); 

    plus.addEventListener("click",() => counter.innerText++)
    
    minus.addEventListener("click",() => {
        counter.innerText >= 1 ? counter.innerText-- : counter.innerText = 0
    })

    heart.addEventListener("click", like)

    function like(){
        let likes = document.querySelector(".likes")
        let li = document.createElement("li")
        if (likes.innerText.includes(`${counter.innerText}`)) {
            let alreadyLiked = document.getElementById(`${counter.innerText}`)
            alreadyLiked.querySelector('span').innerText++
        } else {
            likes.appendChild(li)
            li.setAttribute("id", counter.innerText)
            li.innerHTML = `${counter.innerText} was liked <span>1</span> time(s)`
        }
        
    }

    commentForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let comment = document.createElement("p");
        comment.innerHTML = document.getElementById("comment-input").value;
        commentsList.appendChild(comment);
    })

    function pauseApp() {
        counter.disabled = true;
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        comment.disabled = true;
    }

    function resumeApp() {
        counter.disabled = false;
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        comment.disabled = false;
    }

    pause.addEventListener('click', () => {
        if (pause.innerText === "pause") {
            pause.innerText = "resume"
            clearInterval(interval)
            pauseApp()
        } else {
            pause.innerText = "pause"
            interval = setInterval(increment, 1000);
            resumeApp()
        }
    })
});