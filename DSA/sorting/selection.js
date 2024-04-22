/*Selection Sort algorithm finds the lowest value in an array 
and moves it to the front of the array.

To implement the Selection Sort algorithm we need:

An array with values to sort.

An inner loop that goes through the array, finds the lowest value, and moves it to the front of the array. This loop must loop through one less value each time it runs.
An outer loop that controls how many times the inner loop must run. For an array with 
n values, this outer loop must run n−1 times.*/

function arrSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minNum = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minNum]) {
                minNum = j;
            }
        }
        if (minNum !== i) {
            // Swap elements
            let temp = arr[i];
            arr[i] = arr[minNum];
            arr[minNum] = temp;
        }
    }
    return arr;
}

let arr = [5, 3, 7, 3, 2, 9, 2, 1];
console.log(arrSort(arr)); 
console.log()




