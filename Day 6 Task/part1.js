/////////////////////DAY 6 Task////////////////////////
////////Part 1: Find the culprits and nail them — debugging javascript//////////

// Find the culprit//

// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( “I’m JavaScript!’);
//  </script>
//  Whats the error in this ?
// </body>
// </html>

// Solution//
// Double Quotation is Missing in line no 9
alert("I'm Javascript");

// Find the culprit and invoke the alert//

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// Solution
// Double Quotation is in Incorrect Format in Line 24
alert("I’m invoked!");

// Explain the below how it works

alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working

// Explanation 
//  1 => We created a HTML boilerplate and linked the External Script file using the SRC in HTML.
//  2 => Alert is a Window Object that alerts the Webpage whenever its loaded.
//  3 => Javascript is so Clever so it understands everything and doesn't throw errors even though if we missed a Semicolon.
//  4 => We used Template Literals in line 36 and 37 so JS printed "Wor" and "id" in a Separate line.
//  5 => JS is so clever so we can add numbers in a Single line or Mutiliple line as long as the syntax and the argument we are passing is Corect.

////////Fix the below to alert Guvi geek/////////
// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"
// Solution //
let admin;
let fname = "Guvi"
let lname = "geek"
admin = fname+" "+lname;
alert(admin);

///////Fix the below to alert hello Guvi geek////////
// let fname =10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( 'hello ${name}' );

// Solution 
// Single Quotes were used instead of Template Literals
let name = fname +" "+ lname
alert(`Hello ${name}`)

// Fix the below to alert sum of two numbers

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

//////Solution//////
// User Input will always be in a String Format so we would need to Convert the String to Number using ParseInt function or using a + Symbol.
let a = +prompt("First number?");
let b = +prompt("Second number?");
alert(a + b);


// If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
// var c = "2" > "12";
// //Don't touch below this
// if (c) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

// Solution //
// In the Above Code it will return True because JS will first Check the Length of the String, If the length of the string is Same then JS will 
// convert the String to Number but in our case the lenght of the string in not same so it will check if the First letter of the string is 
// greater than the first letter of the second string which is 2 > 1 will retur true. 
// We can pass the argument as a Number to get the Output as "Diffused"
var c = 2 > 12;
if (c) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}


// How to get the success in console//

let d = ! prompt("Enter a number?");
//Don't modify any code below this
if (d) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
// Solution //
// We can Use Not Equal to Operator "!" to make to condition false


// How to get the correct score in console
let value = +prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}
////Solution //////
// User Input will always be in a String Format so we need to convert the String into a Number using ParseInt or + Symbol 
// Or else we can Use Double Equal to '==' Instead of Triple Equal to "===" because Double Equal doesn't check the Type of Input It will
// only check the Value is Equal or Not.


// Fix the code to welcome the Employee

let login = 'Employee';
let message = (login == 'Employee') ? "Greetings":
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);

// Solution
// Missing "Greeting" in Line 144, We need to Pass in What Ternary Operator need to return if the condition is True.


// Fix the code to welcome the boss
// You cant change the value of the msg
let message1;
if (null || 2 || undefined )
{
 message1 = "welcome boss";
}
else
{
 message1 = "Go away";
}
  console.log(message1);

// Solution 
// We can't Redeclare Let and Const variable in JS.


// Fix the code to welcome the boss
let message2;
let lock = !2;
//Dont change any code below this 
if (null || lock || undefined )
{
  message2 = "Go away";
}
else
{
 message2 = "welcome";
}
  console.log(message2);
  //Solution
  // We can Use NOT Operator (!) to make the Condition False


//Fix the code to welcome the boss
let message3;
let lock1 = !2;
//Dont change any code below this
if (lock && " " || undefined )
{
  message3 = "Go away";
}
else
{
 message3 = "welcome";
}
console.log(message3);
  //Solution
  // We can Use NOT Operator (!) to make the Condition False


//   Change the code to print
// 3
// 2
// 1
//You can change only 2 characters
let i = 3;
while (i) {
  console.log( --i + 1 );
}
// Solution
// We can Simply add 1 to i in line 215.


// Change the code to print 1 to 10 in 4 lines
// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)

// Solution 
// We can Use For Loop.
let num = 1;
for (let i=num; i<=10; i++){
    console.log(i);
}

// Change the code to print even numbers
//You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 1) {
//     console.log(num)
//   }

// Solution 
// We can Increment num by 2 inorder to Print Even Numbers
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }

  
  //Change the code to print all the gifts
//   let gifts = ["teddy bear", "drone", "doll"];
//   for (let i = 0; i < 3; i++) {
//     console.log('Wrapped ${'gifts[i]'} and added a bow!');
//   }

// Solution 
// We can Use Template Literal instead of Single Quotes
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}


//Fix the code to disarm the bomb
let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}
//Can't Understand what the Question is.


// Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg);
// Explanation
// The Condition return True because string "0" is a Truthy value and Number 0 is a Falsy Value




