// // ways of writing functions 
// 1. function declaration
// 2. function expression 
// 3. Anonymous function
// 4. Arrow function


// 1. Function Declaration

function twoSum(num1, num2){

    return num1 + num2

    return sum 

    const outside = 'not working'
}
const result = twoSum(2,4)

console.log(result)

// 2. Function Expression

const twoSumJs = function(num1, num2) {
    return num1 + num2
}

const result2 = twoSumJs(45,5)
console.log(result2)

// 3. Anonymous Function

const myArray = []
myArray.map(function(num1,num2){
    return num1 + num2
})

// 4. Arrow Function

const twoSumArrow2 = (num1,num2) => {
    return num1 + num2
}
 
const result3 = twoSumArrow2(66,45)
console.log(result3)

// 4.1 Arrow Function

const twoSumArrow4 = (num1, num2) => num1 +num2 

const result4 = twoSumArrow4(78,45)
console.log('result4 ->', result4)

/*
* Write a function that takes in numbers and return the largest number
*
*/



function twoSum5(num1,num2){
    if(num1 > num2) {
        return num1;
    } else{
    return num2;

    }
}

const result5 = twoSum5(98,68);
console.log(result5)

// take one parameter
// multiply that parameter by 2
// return that value


function storeResult(x) {
    return (x * 2)
}
console.log(storeResult(result5))


//



function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("abba"));        // true
console.log(isPalindrome("abcdefg"));    //  false
console.log(isPalindrome("racecar"));   //   true 