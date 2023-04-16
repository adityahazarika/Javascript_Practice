// Check if given number exists or not in the array

let arr = [3,5,6,9,12,465,999];

function fun1(arr,n){
    if(arr.length==1){
        if(n==arr[0]){
            return true
        }
        else{
            return false
        }
    }
    if(arr.length==2){
        if(arr[0]==n){
            return true
        }
        else if(arr[1]==n){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        let len = Math.floor(arr.length/2);
        if(n==arr[len-1]){
            return true
        }
        else if(n<arr[len-1]){
            arr.length = len;
            return fun1(arr,n)
        }
        else{
            arr.splice(0,len);
            return fun1(arr,n)
        }
    }
}

console.log(fun1(arr,3))
