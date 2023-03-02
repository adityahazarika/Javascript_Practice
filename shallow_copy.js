let arr = [{
    "name":"a",
},
{
    "name":"b"
},
{
    "name":"c"
}
];

let arr2 = arr.filter((it)=>{
    return it.name!='a'
})

arr2[1].name = "p";
console.log(arr,arr2)
