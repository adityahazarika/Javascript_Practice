(function(){
    console.log("start");
})();

function middle(){
    setTimeout(() => {
        console.log("middle");
    }, 2000);
}
middle();

function stop(){
    console.log("stop");
}
stop();

// The above code's output will be -:
// start
// stop
// middle
// This is not what we intended, we wanted it execute syncronously.
// But due to setTimeout is taking time it is handled asynchronously

// If we want it to execute synchronously execute next block of code

(function(){
    console.log("start");
})();

function middle(){
    setTimeout(() => {
        console.log("middle");
        stop();
    }, 2000);
}
middle();

function stop(){
    console.log("stop");
}


