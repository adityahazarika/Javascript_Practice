let arr = [1, 2, 3, 6, 3, 6, 1];
let dup = [];
arr.forEach((it,i)=>{
    let temp = [...arr];
    temp.splice(i,1)
    if(temp.includes(it)&&!dup.includes(it)){
        dup.push(it)
    }
})

console.log(dup)
