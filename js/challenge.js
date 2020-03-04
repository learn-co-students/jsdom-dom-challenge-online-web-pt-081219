let counter = document.querySelector("#counter");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let heart = document.querySelector("#heart");
let likes = document.querySelector(".likes");
let pause = document.getElementById("pause");
let likedAry = [];

function newLi() {
    return document.createElement("li");
};

function getOccurrence() {
    var count = 0;
    likedAry.forEach((v) => (v === counter.innerText && count++));
    return count;
};
function printLike(counterText) {
    let newLike = likes.appendChild(newLi());
    newLike.innerText = `${counterText} has been liked ${getOccurrence()} times`;
}

setInterval(function tikTok() {
    counter.innerText = parseInt(counter.innerText, 10) + 1;
}, 1000);

minus.addEventListener("click", function() { 
    counter.innerText = parseInt(counter.innerText, 10) - 1;
});

plus.addEventListener("click", function() { 
    counter.innerText = parseInt(counter.innerText, 10) + 1;
});

pause.addEventListener("click", function() {
    
});

heart.addEventListener("click", function() {
    likedAry.push(`${counter.innerText}`);
    let counterText = counter.innerText;
    printLike(counterText)
});

let commentForm = document.getElementsByTagName("form")[0];

commentForm.addEventListener("submit", function(a){
    a.preventDefault();
    var b=this.children[0]
    c=b.value;b.value="";
    var d=document.querySelector(".comments")
    e=document.createElement("p");
    e.innerText=c,d.appendChild(e)
});