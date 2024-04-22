// reduce ()
    arr = [1,2,3,4,5,6]
    // sum of array nums
    function findsum(arr){
        let sum =0;
        for (let i = 0; i<arr.length; i++){
            sum = sum+arr[i];   
        }
        return sum ;
    }
    console.log(findsum(arr));