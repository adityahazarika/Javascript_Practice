function fun1(){
    setTimeout(() => {
        console.log("fun1");
    }, 2000);
}

function fun2(){
    console.log("fun2");
}

fun1();
fun2();
