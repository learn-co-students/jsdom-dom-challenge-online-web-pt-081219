// minus button goes down 
// plus goes up
// resume allows count to go 
// when resumed pause appears
// like button leads to li being created with liked number and amount of likes
// leave comment adds comment to comments field

document.addEventListener('DOMContentLoaded', () => {
    let likes = document.getElementsByClassName("likes")[0];
    let counter = parseInt(document.getElementById('counter').innerText);
    const downBtn = document.getElementById('minus');
    const upBtn = document.getElementById('plus');
    const like = document.getElementById('heart');
    const pause = document.getElementById('pause');
    const form = document.getElementById('comment-form');
    let list = document.getElementById('list');
    let liked_num = {};
    let intervalId = null;
    
    startTimer();
    

    function incrementCount() {
        document.getElementById('counter').innerText = counter ++;
    }

    function startTimer(){
        intervalId = setInterval(incrementCount, 500);
    }

    function stopTimer(){
        clearInterval(intervalId);
        intervalId = null;
    }

    downBtn.addEventListener('click', function(){
        if (counter > 0) {
            document.getElementById('counter').innerText = counter --;
        }
    });

    upBtn.addEventListener('click', function(){
        document.getElementById('counter').innerText = counter ++;
    });

    like.addEventListener('click', function(){
        let counter = document.getElementById('counter').innerText

        
        if (liked_num[counter]){
            liked_num[counter] ++;
        } else {
            liked_num[counter] = 1;
        }

        console.log(liked_num)
        let liked_comment = document.createElement("li"); 


        
    });

    pause.addEventListener('click', function(){
        if (intervalId) {
            stopTimer();
            pause.innerText = "Start Timer"; 
            upBtn.disabled = !upBtn.disabled 
            downBtn.disabled = !downBtn.disabled 
            like.disabled = !like.disabled 

        } else {
            startTimer();
            pause.innerText = "Pause"; 
            upBtn.disabled = !upBtn.disabled 
            downBtn.disabled = !downBtn.disabled 
            like.disabled = !like.disabled 
        }
    });

    form.addEventListener('submit', function(event){
        let li = document.createElement('li');
        li.innerText = document.getElementById('comment-input').value;
        list.append(li);
        form.reset();
        event.preventDefault();
    });

});