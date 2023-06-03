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
