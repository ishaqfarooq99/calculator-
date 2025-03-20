


var miliseconds = 0;
var seconds = 0;
var minutes = 0;

 var getmsec = document.getElementById("msec")
 var getsec = document.getElementById("sec")
 var getmint = document.getElementById("mint")

 var interval;

 
 function start(){
   interval = setInterval(function(){
        miliseconds++
        getmsec.innerHTML = miliseconds
        if(miliseconds >= 100){
           seconds++
           getsec.innerHTML = seconds
           miliseconds = 0
        }
        else if(seconds >= 59){
           minutes++
           getmint.innerHTML = minutes
           seconds = 0
        }
   document.getElementById('button').disabled = true
        
    }, 10)
   
 }

 function stop(){
    clearInterval(interval)
    document.getElementById('button').disabled = false
}

function reset(){
    miliseconds = 0
    seconds = 0
    minutes = 0
    getmsec.innerHTML = miliseconds
    getsec.innerHTML = seconds
    getmint.innerHTML = minutes
}











