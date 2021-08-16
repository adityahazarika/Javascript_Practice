let test1 = async (num)=>num;

(async()=>{
    try{
        let a = await test1("Hi");
        console.log(a)
    }
    catch(err){
        console.log(err);
    }
})();

// Here if we remove semicolon from line number 1 it will not return anything
