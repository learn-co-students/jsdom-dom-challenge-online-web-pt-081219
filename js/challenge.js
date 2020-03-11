document.addEventListener('DOMContentLoaded', (event) => {

    const counter = document.getElementById("counter")
    const plus = document.getElementById("plus")
    const minus = document.getElementById("minus")
    const heart = document.getElementById("heart")
    const pause = document.getElementById("pause")
    const submitComment = document.getElementById("submit")
    let interval = setInterval(increment, 1000);
    
    plus.addEventListener('click', (event) => {
        increment();
    })

    minus.addEventListener('click', (event) => {
        counter.innerText--;
    })

    heart.addEventListener('click', (event) => {
        const likes = document.querySelector('.likes')
        const li = document.createElement('li')

        if (likes.innerText.includes(`${counter.innerText}`)){
            const updateLike = document.getElementById(`${counter.innerText}`)
            updateLike.querySelector('span').innerText++
        } else {
            likes.appendChild(li)
            li.setAttribute("id", counter.innerText)
            li.innerHTML = `${counter.innerText} was liked <span> 1 </span> time(s)`
        }
    })

    pause.addEventListener('click', (event) => {
        if (pause.innerText === "pause"){
            pause.innerText = "resume"
            clearInterval(interval)
            pauseAll();
        } else {
            pause.innerText = "pause"
            interval = setInterval(increment, 1000);
            resumeAll();
        }   
    })

    submitComment.addEventListener('click', (event) => {
        event.preventDefault();  
        const form = document.getElementById('comment-form')
        const newComment = document.getElementById('comment-input')
        const p = document.createElement('p')
        form.appendChild(p)
        p.innerText = newComment.value 
        form.reset();
    })

    function increment(){
        counter.innerText++
    }

    function pauseAll(){
        counter.disabled = true;
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        submitComment.disabled = true;
    }

    function resumeAll(){ 
        counter.disabled = false;
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        submitComment.disabled = false; 
    }
})




