function calculate(num){
    const a =  80000;
    function changeValue(operation){
        switch(operation){
            case "add":
                return a+num;
            case "subtract":
                return a-num;
            case "multiply":
                return a*num;
        }
    }
    return {
        add : changeValue("add"),
        subtract: changeValue("subtract"),
        multiply: changeValue("multiply")
    }
}

console.log(calculate(20000).multiply);


// cloure example 2
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




// example
function a(num){
    let x = 1;
    return function b(){
        let y = 2;
        return function fun1(){
            let str = "Namaste";
            console.log(x,y,c,num,str)
        }
    }
}
var c = 3;
a(8)()();
