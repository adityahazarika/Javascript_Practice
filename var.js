// In browsers, the top-level scope is the global scope. This means that within the browser var something will define a new global variable. In Node.js this is different. The top-level scope is not the global scope; var something inside a Node.js module will be local to that module.

var obj = {
    "a": 1,
    "b": 2,
    fun1: function() {
        return function(){
            return this.obj.a + this.obj.b; //this will run in browser but not in node because of the top written reason
        }
    }
}

let print = obj.fun1()();
console.log(print);
