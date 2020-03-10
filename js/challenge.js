let counter = document.getElementById("counter").innerText

document.addEventListener('DOMContentLoaded', (event) => {
    incrementBySecond();
})

function incrementBySecond(){
    for (let counter = document.getElementById("counter").innerText; counter < 60; setInterval(function(){ ++counter }, 1000)){
        return counter
    }
    // let interval = setInterval(function(){ ++counter }, 1000);

}




