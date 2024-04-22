/*An array is a data structure used to store multiple elements.
Arrays are used by many algorithms.
Arrays are indexed, meaning that each element in the array has an index.*/

// console.log(arr[4]);


// EXAMPLE-1
// Finding lowest num of an array

function lowest(a){
    let smallest_sum = arr[0];
    for(let i=1; i<a.length; i++){
        if(a[i] < smallest_sum){
            smallest_sum = a[i];
        }
    }
    return smallest_sum;
}
arr = [34,5,65];
console.log(lowest(arr));



// EXAMPLE 2 - Reversing of an array
function reverseArray(arr){
let start = 0;
let end = arr - 1;
while(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;

    }
return arr;
}
arr = [1,2,3,4,5,6]
console.log("reversed Array =" + arr);
