function fun1(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        count += i;
    }
    console.log(count);
}

function fun2(){
    console.log("fun2");
}
fun1(4040404040);
fun2();

// Output - 
// 8162432403291273000
// fun2

// As the fun1 is CPU intensive task and not I/O task so the javascript will get stucked here blokcing further executions untill and unless fun1 is executed.
