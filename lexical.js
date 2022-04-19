function test(){
    var foo = 33;
    return function fun2(){
        var foo = 44;
        return function fun3(){
            console.log(foo) // will print 44 not 33, as it is lexically scoped
        }
    }
 }
 test()()();
