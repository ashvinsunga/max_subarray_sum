// THE GOAL OF THIS FUNCTION
//This function accepts an array and integer. This function calculate the max sum of n consecutive elements.

// Sub function for 1st Solution
// function addArrayValues(arr,x,y){
//     if (y >= arr.length){
//         return "3rd argument exceeded array boundary";
//     }
//     if (x < 0 || x > y){
//         return "2nd argument is an invalid value"
//     }
//     let arraySum = 0;
//     for (let p1 = x; p1 <= y; p1++){
//         arraySum = arraySum + arr[p1];
//     }
//     return arraySum;
// }

//1st Solution
// function maxSubArraySum(arr, num){
// // Checks invalid arguments
//     if(arr.length === 0 || arr.length < num){
//         return "Invalid value on first argument!";
//     }
// collection = [];
// y = num - 1;

// //Create a loop for p1 that will stop when p2(num) hits the end of array
//     for(let x = 0; y < arr.length; x++){
// //Every loop adds the numbers between p1 and p2 then pushes it to the collection array
//     collection.push(addArrayValues(arr, x, y));
//     y++;
// }
// // Find the max number in the array
// return Math.max(...collection);
// }


// 2nd Solution
// function maxSubArraySum(arr, num){
//     if(num > arr.length){
//         return null;
//     }
//     var max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i++){
//         temp = 0;
//         for (let j = 0; j < num; j++){
//             temp += arr[i + j];
//         }
//         if (temp > max){
//             max = temp;
//         }
//     }
//     return max;
// }


//Linear(O(N)) Solution
function maxSubArraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}


console.log(maxSubArraySum([2,6,9,2,1,8,5,6,101], 3));
