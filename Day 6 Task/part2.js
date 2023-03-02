/////////////////////DAY 6 Task////////////////////////
////////Part 2 : Find the culprits and nail them — debugging javascript loops//////////

//Write a code to print the numbers in the array//
//Output: 1234567891011
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var newArr = "";
 
for (var i = 0; i<numsArr.length; i++) {
    newArr += numsArr[i] 
}
console.log(newArr);

// Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11

var numsArr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var newArr1 = "";
 
for (var i = 0; i<numsArr1.length; i++) {
    newArr1 += numsArr1[i] + ",";
}
console.log(newArr1);

// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// Output: 11 10 9 8 7 6 5 4 3 2 1

var newStr = ""
for (let i =11; i>0; i--){
    newStr += i + " ";
}
console.log(newStr.trim());

// Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <numsArr.length; i++) {
 if(numsArr[i] % 2 == 0 ){
    numsArr[i] = "even"
 }
}
console.log(numsArr);

// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

var numsArr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <numsArr1.length; i++) {
 if( i % 2 == 0 ){
    numsArr1[i] = "even"
 }
}
console.log(numsArr1);


// Write a code to add all the numbers in the array
// Output: 66

var numsArr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < numsArr2.length; i++) {
    sum += numsArr2[i]
}
console.log(sum);


// Write a code to add the even numbers only
// Output: 30

var numsArr3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum1 = 0;
for (var i = 0; i <numsArr3.length; i++) {
 if(numsArr3[i] % 2 == 0){
    sum1 += numsArr3[i]
 }
}
console.log(sum1);


// Write a code to add the even numbers and subract the odd numbers
// Output: 94

var numsArr4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum2 = 100;
for (var i = 0; i <numsArr4.length; i++) {
    if(numsArr4[i] % 2 == 0){
    sum2 += numsArr4[i]
    } else {
    sum2 -= numsArr4[i]
 }
}
console.log(sum2);

// Write a code to print inner arrays
// Output: 
// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]

var numsArr5 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr5.length; i++){
 console.log( numsArr5[i])
}


// Write a code to print elements in the inner arrays
// Output: 1234567891011

var numsArr6 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var strAll = "";
for (let i= 0; i< numsArr6.length; i++){
    let innerArr = numsArr6[i]
for (let j = 0; j< innerArr.length; j ++){
    strAll += innerArr[j];
    }
}
console.log(strAll)


// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Input : numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

let numsArr7 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (let i = 0; i<numsArr7.length; i++){
    for (let j=0; j < numsArr7[i].length; j++){
        if (j % 2 == 0){
            numsArr7[i][j] = "even"
        }
    }
}
console.log(numsArr7)

// Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1

var numsArr8 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var strAll1= '';
for (var i = numsArr8.length-1 ; i >= 0 ; i--) {
 var innerArray = numsArr8[i];
    console.log(innerArray)
 for(var j = innerArray.length-1; j >= 0 ; j--){
    strAll1 +=innerArray[j] + ' '
 }
}
console.log(strAll1.trim());


// Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30
let numsArr9 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
let sumOdd = 0;
let sumEven = 0;

for (let i = 0; i < numsArr9.length; i++){
    for (let j = 0; j< numsArr9[i].length; j++){
        if(numsArr9[i][j] % 2 == 0){
            sumEven += numsArr9[i][j];
        } else {
            sumOdd += numsArr9[i][j];
        }
    }
}
console.log(sumOdd);
console.log(sumEven);













