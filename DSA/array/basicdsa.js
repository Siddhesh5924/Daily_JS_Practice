// TO FIND SMALLEST SUM IN AN ARRAY

arr = [4,7,3,8,2,5]

let smallest_num = arr[0];
for (let i = 0; i<arr.length; i++){
    if (arr[i] < smallest_num){
        smallest_num = arr[i];
    }
} 
console.log(smallest_num)





// FIBONAACI SERIES

let prev1 = 0;
let prev2 = 1;

function a(){

    for (let i = 0; i < 18; i++){
        
        let fibnum = prev1 + prev2;
        console.log(fibnum);
        prev2 =  prev1;
        prev1 = fibnum;
        
    }
}
a();   
    



function lowest (a){
    let lowestNum = arr[0];

    for (let i = 0; i<arr.length;i++){
        if(arr[i] < lowestNum){
        lowestNum = arr[i];
        }
    }
    return lowestNum;
}
let arr = [2,5,3,6,1,8,9]
console.log(lowest(arr))





function reverse(arr){
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        // arr[start],end[start] = end[start],arr[start]
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start += 1;
        end -= 1;

    }

}
let arr = [1,2,3,4,5,6];
reverse(arr);
console.log(arr);