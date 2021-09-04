//This function accepts an array and integer. This function calculate the max sum of n consecutive elements.

// Sub function for 1st Solution
function addArrayValues(arr,x,y){
    if (y >= arr.length){
        return "3rd argument exceeded array boundary";
    }
    if (x < 0 || x > y){
        return "2nd argument is an invalid value"
    }
    let arraySum = 0;
    for (let p1 = x; p1 <= y; p1++){
        arraySum = arraySum + arr[p1];
    }
    return arraySum;
}

//1st Solution
function maxSubArraySum(arr, num){
// Checks invalid arguments
    if(arr.length === 0 || arr.length < num){
        return "Invalid value on first argument!";
    }
collection = [];
y = num - 1;

//Create a loop for p1 that will stop when p2(num) hits the end of array
    for(let x = 0; y < arr.length; x++){
//Every loop adds the numbers between p1 and p2 then pushes it to the collection array
    collection.push(addArrayValues(arr, x, y));
    y++;
}
// Find the max number in the array
return Math.max(...collection);
}

console.log(maxSubArraySum([2,2,2,3,1,100], 2));
