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

console.log(maxSubArraySum([1,2,5,2,8,1,5], 2));
