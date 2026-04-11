// let arr1 = [{'name': 'Alice'}, {'name': 'Bob'}, {'name': 'Charlie'}];
// let arr2 = [{'name': 'David'}, {'name': 'Eve'}, {'name': 'Frank'}];

// [arr1, arr2] = [arr2, arr1];

// console.log(arr1, arr2);



// let arr1 = ["Alice", "Bob", "Charlie"];
// arr1.push("hello")
// console.log(arr1[0]="hi")
// console.log(arr1)


var searchInsert = function(nums, target) {
    let i
    for( i=0;i<nums.length;i++){
        if(nums[i]>=target){
            return i
        }
    }
    return i
};
console.log(searchInsert([1,3,5,6], 7)) 