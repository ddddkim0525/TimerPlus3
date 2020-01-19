/*
*   Timer Object. Time and Durations are all measured in seconds.
*/
class Timer {
    constructor (name, duration){
        this.name = name;
        this.duration = duration;
        this.time = duration;
        this.timerCall;
    }
    get() {}
    update() {}

    formatTime(time){
        let sec = time % 60;
        if(sec < 9) sec = '0' + sec;
        const min = Math.floor(time/60);
        return min + ':' + sec;
    }
    decrement(){
        if(!this.time) clearInterval(this.timerCall);
        this.time--;
        this.flush();
    }

    flush(){
        document.querySelector(".display .name").innerHTML = this.name;
        document.querySelector(".display .time").innerHTML = this.formatTime(this.time);
    }
}

const timer = new Timer("Hi", 300);

document.querySelector(".play").addEventListener('click',function(event){
    //timer.decrement();
    if(!timer.timerCall){
        timer.timerCall = setInterval( () =>timer.decrement() ,1000); //#1 Without Arrowfunction, dercrement: this is Window.
    }
})

document.querySelector(".pause").addEventListener('click',function(event){
    clearInterval(timer.timerCall);
    timer.timerCall = null;
})

document.querySelector(".stop").addEventListener('click',function(event){
    clearInterval(timer.timerCall);
    timer.timerCall = null;
    timer.time = timer.duration;
    timer.flush();
})

document.querySelector(".next").addEventListener('click',function(event){

})

document.querySelector(".prev").addEventListener('click',function(event){

})
