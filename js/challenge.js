document.addEventListener('DOMContentLoaded', ()=>{
    let counter = document.getElementById('counter');
    let minus_button = document.getElementById('minus');
    let plus_button = document.getElementById('plus');
    let heart_button = document.getElementById('heart');
    let pause_button = document.getElementById('pause');
    let stop = false;


    let comment_section = document.getElementById('list');
    let comment_form = document.getElementById('comment-form');

    let seconds = 0;
    let cancel = setInterval(incrementSeconds, 1000);
    function incrementSeconds(){
        if (stop == false){
        seconds += 1;
        counter.innerText = seconds;
        }
    }


    minus_button.addEventListener('click', (event)=>{
        if (stop == false){
        seconds -= 1;
        counter.innerText = seconds;
        }
    })

    plus_button.addEventListener('click', (event)=>{
        if (stop == false){
        seconds += 1;
        counter.innerHTML = seconds;
        }
    })

    heart_button.addEventListener('click', (event)=>{
        
    })

    pause_button.addEventListener('click', (event)=>{
        if (stop == true){
            stop = false;
            pause_button.innerHTML = 'pause'
        }else{
            stop = true;
            pause_button.innerHTML = 'resume';
        }   
    })

    
    comment_form.addEventListener('submit', (event)=>{
        let new_comment = document.createElement('li');
        new_comment.innerText= document.getElementById('comment-input').value;
        comment_section.appendChild(new_comment);
        event.preventDefault();
    })
})