//increment function



function increment(){
    var counter = document.querySelector("#counter");
    var likes = parseInt(counter.textContent)
    likes ++;
    console.log(likes);
    counter.textContent=likes;
    return(likes);
};
