Q1
var x = [typeof null, null instanceof Object];
console.log(x);

Q2
var a = [1, 2, 3];
var b = [1, 2, 3];

console.log(a == b);
console.log(a === b);

Q3
const a = { x: 1, y: 2 };
const b = a;
b.x = 3;
console.log(a);
console.log(b);

Q4
var x = 2;
(function(){
  var x = 4;
  (function random(){
    x++;
    console.log(x);
    var x = 3;
  })();
})();


Q5
function changeStuff(a,b,c){
    a = a*10;
    b.item = "changed";
    c = {item : "changed"};
}

var num = 10;
var obj1 = {item:"unchanged"};
var obj2 = {item:"unchanged"};

changeStuff(num,obj1,obj2);

console.log(num, obj1, obj2)

Q6
// Following is the price arr of a product ordered in day wise, we need to find the highest profit we could have booked if we bought it at least price and sell it at high price.
// For example in this array if we have bought it at price of 2 and sold it at price of 10 we could have booked highest profit.
var arr = [11,2,4,6,7,3,10,1,0];

let a = arr[0];
let obj = {
    profit: 0,
    ind1:0,
    ind2:0
}

for(let i=0;i<arr.length;i++){
    if(arr[i]<a){
        a = arr[i];
    }
    else if((arr[i]-a)>obj.profit){
        obj.profit = arr[i]-a;
        obj.ind1 = a;
        obj.ind2 = arr[i]
    }
}

console.log(obj)
