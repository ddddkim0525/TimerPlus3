

document.querySelector(".play").addEventListener('click',function(event){

})

document.querySelector(".pause").addEventListener('click',function(event){

})

document.querySelector(".stop").addEventListener('click',function(event){

})

document.querySelector(".next").addEventListener('click',function(event){

})

document.querySelector(".prev").addEventListener('click',function(event){

})



function formatTime(time){
    sec = time % 60;
    if(sec < 9) sec = '0' + sec;
    min = Math.floor(time/60);
    return min + ':' + sec;
}

