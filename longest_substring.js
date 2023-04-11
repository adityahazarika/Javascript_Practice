//How do you find the length of the longest substring without repeating characters?

let obj = {};

let max = 0;
let cnt = 0;
let str = process.argv[2];

str.split("").forEach((it)=>{
    if(obj[it]){
        cnt = 1;
        obj = {};
        obj[it]=1
    }
    else{
        cnt = cnt+1;
        max = cnt>max?cnt:max;
        obj[it] = 1;
    }
})

console.log(max)
  
