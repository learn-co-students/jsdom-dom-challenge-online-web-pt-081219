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
        const li = document.createElement('li')
        form.appendChild(li)
        li.innerText = newComment.value 
    })

    function increment(){
        counter.innerText++
    }

    function pauseAll(){
        counter.disable = true;
        plus.disable = true;
        minus.disable = true;
        heart.disable = true;
        submitComment.disable = true;
    }

    function resumeAll(){ 
        counter.disable = false;
        plus.disable = false;
        minus.disable = false;
        heart.disable = false;
        submitComment.disable = false; 
    }
})




