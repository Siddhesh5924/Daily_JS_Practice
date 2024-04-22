/*The Insertion Sort algorithm uses one part of the array to hold the sorted values, 
and the other part of the array to hold values that are not sorted yet.*/


function insertion(){
    for (let i = 1; i< arr.length; i++){
        let current = arr[i];
        

        let j = i-1;
        while (j >= 0 && arr[j] > current){
            arr[j + 1] = arr[j];
            j--;  
        }

        arr[j+1] = current;
    }
return arr;
}
let arr = [3,5,32,6,1,6,8,37,4,64];
console.log(insertion(arr));