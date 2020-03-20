document.addEventListener('DOMContentLoaded', ()=>{
    let counter = document.getElementById('counter');
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let heart = document.getElementById('heart');
    let pause = document.getElementById('pause');
    let comments = document.getElementById('list');
    let comment = document.getElementById('comment-form');
    integer = setInterval(incrementSeconds, 1000);
    let stop = false;
    let seconds = 0;

    function incrementSeconds(){
        if (stop == false){
        seconds += 1;
        counter.innerText = seconds;
        }
    }

    minus.addEventListener('click', (event)=>{
        if (stop == false){
        seconds -= 1;
        counter.innerText = seconds;
        }
    })

    plus.addEventListener('click', (event)=>{
        if (stop == false){
        seconds += 1;
        counter.innerHTML = seconds;
        }
    })

    heart.addEventListener('click', (event) => {
        if(stop == false){
        const likes = document.querySelector('.likes')
        const list = document.createElement('li')

        if (likes.innerText.includes(`${counter.innerText}`)){
            const updateLike = document.getElementById(`${counter.innerText}`)
            updateLike.querySelector('span').innerText++
        }
        else {
            likes.appendChild(list)
            list.setAttribute("id", counter.innerText)
            list.innerHTML = `${counter.innerText} was liked <span> 1 </span> time(s)`
        }}
    })

    pause.addEventListener('click', (event)=>{
        if (stop == true){
            stop = false;
            pause.innerHTML = 'pause'
        }
        else{
            stop = true;
            pause.innerHTML = 'resume';
        }   
    })

    comment.addEventListener('submit', (event)=>{
        let new_comment = document.createElement('li');
        new_comment.innerText= document.getElementById('comment-input').value;
        comments.appendChild(new_comment);
        event.preventDefault();
        comment.reset()
    })
}) 