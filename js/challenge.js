document.addEventListener("DOMContentLoaded", () => {

const counter = document.querySelector('h1#counter');
const pause = document.querySelector('button#pause');
const plus = document.querySelector('button#plus');
const minus = document.querySelector('button#minus');
const heart = document.querySelector('button#heart');
const form = document.querySelector('form#comment-form');
const submit = document.querySelector('form#comment-form button#submit');


intervalId = null;

function beginFunctionality() {
    intervalId = setInterval(updateTimer, 1000);
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
};

function pauseFunctionality() {
    clearInterval(intervalId);
    intervalId = null;
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
}

function updateTimer() {
    const current_count = parseInt(counter.innerText);
    counter.innerText = current_count + 1;
};

function minusTimer() {
    const current_count = parseInt(counter.innerText);
    counter.innerText = current_count - 1;
};

function plusTimer() {
    const current_count = parseInt(counter.innerText);
    counter.innerText = current_count + 1;
};

function leaveLike() {
    const current_count = parseInt(counter.innerText);
    const list = document.querySelector('ul.likes');
    if (list.innerHTML.includes(`${current_count}`)) {
        const update_list = document.getElementById(`${current_count}`);
        if (!update_list.innerHTML.includes('times')) {
            update_list.innerHTML += 's'
        };
        update_list.querySelector('span').innerText++;
    } else {
        list.innerHTML += `<li id="${current_count}">${current_count} has been liked <span>1</span> time</li>`;
    }
};

function leaveComment() {
    event.preventDefault()
    const comment = form.querySelector('input#comment-input').value;
    // console.log(comment)
    const list = document.querySelector('div#list');
    list.innerHTML += `<p>${comment}</p>`;
};


plus.addEventListener('click', plusTimer)
minus.addEventListener('click', minusTimer)
heart.addEventListener('click', leaveLike)
submit.addEventListener('click', leaveComment);
document.addEventListener("DOMContentLoaded", beginFunctionality());
pause.addEventListener('click', function(){
    if (intervalId) {
        pauseFunctionality();
        pause.innerText = "resume"
    } else {
        beginFunctionality();
        pause.innerText = "pause";
    }
});

});