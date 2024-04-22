/* Bubble Sort is an algorithm that sorts 
an array from the lowest value to the highest value.

How it works:

Go through the array, one value at a time.
For each value, compare the value with the next value.
If the value is higher than the next one, swap the values so that the highest value comes last.
Go through the array as many times as there are values in the array.*/

// EXAMPLE
function a(arr){
    
    let n = arr.length;
    for (let i =0; i < n-1; i++){
        for(let j = 0; j < n-i-1; j++){
            if(arr[j] > arr[j+1]){
                
                let temp = arr[j];
                
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}


let arr = [3,2,1,6,8,9,5,4]
console.log("Sorted array is "+ a(arr))
