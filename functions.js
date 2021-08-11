(function () {    
    let number =              /* Self Invoking regular Function */
    console.log("function1")
})();


// https://www.w3schools.com/js/js_arrow_function.asp
let es6 = () => console.log("es6 function");
es6();


(() => console.log("es6 self-invoking function1"))();


let f1 = f1 => console.log(f1)     /* arrow function with params destructuring */
f1("hi");                          /* Will return "hi" */



//********* Promise Example starts
let p1 = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data > 5) {
                resolve("is greater than 5");
            }
            else {
                reject("is less than 5");
            }
        }, 2000);
    })
}

// Invocation 1 - 
p1(9).then((data) => console.log("resolved-1:", data)).catch((err) => console.log("rejected-1:", err));

// Invocation 2 -
async function start(num) {
    try {
        let data = await p1(num);
        console.log("resolved-2:", data);
    }
    catch (err) {
        console.log("rejected-2:", err);
    }
};
start(9);

// Invocation 3- Self invoking regular
(async function () {
    try {
        let data = await p1(1);
        console.log("resolved-3:", data);
    }
    catch (err) {
        console.log("rejected-3:", err);
    }
})();

// Invocation 4 - 
(async() => {
    try {
        let data = await p1(9);
        console.log("resolved-4:", data);
    }
    catch(err){
        console.log("rejected-4:", err);
    }
})();
//********** Promise example ends


let fun1 = async()=> "hi I am async function";
fun1().then((data)=>console.log(data));
// fun1().then((data)=>console.log(data));


test();   /* Function Hoisting */
function test(){
    console.log("test");
}


// Callback function starts
function callback(num,cb){
    if(num>5){
        return cb(null,"is greater than 5");
    }
    else{
        return cb("is less than 5");
    }
}

callback(1,(err,data)=>{
    if(err)
    {
        console.log("error: ",err)
    }
    else{
        console.log("data: ", data)
    }
})

// Callback functions ends




// with closure technique we can emulate private var feature
var dwightSalary = (function() {
    var salary = 60000;
    function changeBy(amount) {
        salary += amount;
    }
    return {
        raise: function() {
            changeBy(5000);
        },
        lower: function() {
            changeBy(-5000);
        },
        currentAmount: function() {
            return salary;
        }
    }; 
})();

alert(dwightSalary.currentAmount()); // $60,000
dwightSalary.raise();
alert(dwightSalary.currentAmount()); // $65,000
dwightSalary.lower();
dwightSalary.lower();
alert(dwightSalary.currentAmount()); // $55,000

dwightSalary.changeBy(10000) // TypeError: undefined is not a function
