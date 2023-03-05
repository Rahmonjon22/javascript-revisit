//  This how comments work
//  var number  = 5; // in-line comment

// ======== Data Types ========= ///

/** Data Types:
 * undefined, null,, boolean, string, symbol, number, and object

undefined is not defined
null is nothing
boolean true false
string is udner ""  , 
symbol muteable , 
number is 23423,
object stores variables

var myName = "John";
myName = 8; // for whole program

let ourName = "freecodeCamp"; // within the scope
const pi = 3.14 // constant name 
*/

// ======== Storing Values with Assignment Operators ========= ///

// var a;
// var b = 2;
// a = 7;
// b= a;
// console.log(a);
// node index.js shows console.log(a)

// ======== Initializing with Assignment Operators value ========= ///

// var a = 9;
// var b = 10;
// var c = "I am a";
// // Dont change code bellow
// a = a + 1;
// b = c + 1;
// c = c + " String!";

// ======== Declarations assignment ========= ///

// var studlyCapVar;
// var properCamelCase;
// var titleCaseOver;

// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000;

// ======== plus mines multiply assignment ========= ///

// var a = 5;
// var b = 12;
// var c = 4.6;
// var d = 45;

// // only modify code bellow line

//  a+=5  // ====> // a = a + 5;
//  b-=5  // ====> // b = b - 5;
//  c*=5  // ====> // c = c * 5;
//  d/=5  // ====> // c = c * 5;

// console.log(d);

// ======== double quotes => Quote string ========= ///

// var myStr = "I am a  \"double Quoted \" string inside  \"double quotes \" ";
// console.log(myStr);

// ======== single quotes => Quote string ========= ///

// var myStr = '<a href="https://www.w3schools.com/">Visit W3Schools.com!</a>';

/***
 * Code OUTPUT
\' single quote
\" double quote
\\ backlash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

// var myStr = "FirstLine\n\t\SecondLine\nThirdLine";
// console.log(myStr);

// var ourStr = "I come first " ;
// ourStr +=  "I come second.";
// console.log(ourStr);

// var ourName = "FreeCodeCamp";
// var ourStr = "Hello, our name is " + ourName + ", how are you ?";
// console.log(ourStr);

// var myName = "John";
// var myStr = "My name is " + myName + "and I am well!";
// console.log(myStr);

// var anAdjective = "awesome!";
// var ourStr = "freeCodeCamp is ";
// ourStr += anAdjective;
// console.log(ourStr);

// var someAdjective = "worthwhile";
// var myStr = "Learning to code is ";
// myStr+= someAdjective;
// console.log(myStr);

// ========String length ========= ///

// var firstNameLength = 0;
// var firstName = "Ada";
// firstNameLength = firstName.length;
// console.log(firstNameLength);
// // Setup
// var lastNameLength = 0;
// var lastName = "Lovelace";
// lastNameLength= lastName.length;
// console.log(lastNameLength);

// ========Bracket notation ========= ///

// var firstLetterOfFirstName = "";
// var firstName = "Ada";
// firstLetterOfFirstName = firstName[0];
// console.log(firstLetterOfFirstName);

// var firstLetterOfLastName = "";
// var lastName = "Lovelace";
// firstLetterOfLastName = lastName[0]
// console.log(firstLetterOfLastName);

// ======== String Immutability ========= ///

// var myStr = "Jello World";

// myStr[0] = "H"; // fix me, this way will not work
// myStr = "Hello World";
// console.log(myStr);

// ======== last letter in string ========= ///

// var firstName = 'Abdurahmonjon';
// var lastLetterOfFirstName = firstName[firstName.length -1];
// console.log(lastLetterOfFirstName);
// var lastName = "Ibragimov";
// var lastLetterOFLastName = lastName[lastName.length - 1];
// console.log(lastLetterOFLastName);

// var firstName = 'Abdurahmonjon';
// var thirdLetterOfFirstName = firstName[firstName.length - 3];
// console.log(thirdLetterOfFirstName);

// ======== Word Blanks ========= ///

// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
//     // your code bellow
//     var result = "";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
//     // your code above
//     return result;
// }
// console.log(wordBlanks("dog", "big", "ran", "quickly"));
// console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// ======== Arrays ========= ///

// var ourArray = ["John", 23];
// console.log(ourArray);
// var myArray = ["Ibragimov", 31];
// console.log(myArray);

// ======== Nest Arrays ========= ///

// var ourArray = [["the universe", 42], ["everything", 2023]];
// console.log(ourArray);

// var myArray = [ ["Bulls", 23], ["White Fox", 50]];

// ======== access array data ========= ///

// var ourArray = [50, 60, 70];
// var ourData = ourArray[0];
// console.log(ourData);

// var myArray = [150, 160, 170];
// var myData = myArray[0];
// console.log(myData);

// ======== change array  ========= ///

// var ourArray = [50, 60, 70];
// ourArray[1] = 45
// var ourData = ourArray[1];
// console.log(ourData)
// var myArray = [150, 160, 170];
// myArray[myArray.length -1] = 20;
// console.log(myArray);

// ======== access multi-dimensional arrays  ========= ///

// var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 12, 14]]
// //  in here I am accessing to the 3thd array and second number 8 and changing it to 31
// myArray[2][1] = 31;
// var myData = myArray[2][1];
// console.log(myData);

// ========  Push array ========= ///

// push addes new array in here

// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.push("happy", "joy");
// ourArray.push(["happy", "joy"]);

// console.log(ourArray); //[ 'Stimpson', 'J', 'cat', 'happy', 'joy' ]
// console.log(ourArray); // [ 'Stimpson', 'J', 'cat', [ 'happy', 'joy' ] ]

// var myArray = [["John", 31], ["Adolat", 27]];
// myArray.push(["Amira", 03]);
// console.log(myArray); // [ [ 'John', 31 ], [ 'Adolat', 27 ], [ 'Amira', 3 ] ]

// ======== Pop array  ========= ///
// pop removes arrays last item

// var ourArray = [1, 2, 3];
// var removeFromOurArray = ourArray.pop()
// console.log(removeFromOurArray); // => 3 output
// console.log(ourArray); // => output [ 1, 2 ]

// var myArray = [["John", 31],["Amira", 03] ];
// var removeFromMyArray = myArray.pop();
// console.log(myArray); // output => [ ["John", 31] ]

// ======== Shift array  ========= ///
// Shift removes first item or array

// var ourArray = [1, 2, 3];
// var removeFromOurArray = ourArray.shift()
// console.log(ourArray); // => output [ 2, 3 ]

// var myArray = [["John", 31],["Amira", 03] ];
// var removeFromMyArray = myArray.shift();
// console.log(myArray); // output => [ [ 'Amira', 3 ] ]

// ========  UnShift array ========= ///
//  unShift function changes first item of the array

// var ourArray = ["Stimpson", "J", "Cat"];
// ourArray.shift(); // this removes first string
// ourArray.unshift("Happy"); // this adds first new string
// console.log(ourArray);  // output => [ 'Happy', 'J', 'Cat' ]

// var myArray = [["John", 31],["Amira", 03] ];
// myArray.shift();
// // myArray.unshift("Adolat", 27); // output => [ 'Adolat', 27, [ 'Amira', 3 ] ]
// myArray.unshift(["Adolat", 27]); // output => [ [ 'Adolat', 27 ], [ 'Amira', 3 ] ]
// console.log(myArray); // output => [ [ 'Amira', 3 ] ]

// ========  Shopping list array of arrays ========= ///

// var myList = [["cereal", 3],["juice", 4],["milk", 1],["bananas", 6],["apple", 5],["eggs", 10],["onion", 2] ];

// // myList[1][1] = 2 // output =>  [ 'juice', 2 ],
// myList.push(["nok", 5]); // output =>   [ 'nok', 5 ] in the end of array
// myList.unshift(["anor", 3]);  // output => [ 'anor', 3 ], in the begging of the array
// console.log(myList);

// ======== Reusable Function  ========= ///

// {} this is bracket
// ourReusableFunction is name of function
// () parantheses where you can pass infor into it
// function ourReusableFunction() {
//     console.log("Heyya, World");
// }
// ourReusableFunction(); // it is being called here

// function myReusableFunction() {

//     console.log("Hello World" );
// }
// myReusableFunction(); // it is being called here

// ======== Passing Values to Functions with Arguments  ========= ///

// function ourFunctionWithArgs(a, b){
//     console.log(a - b);
// }
// ourFunctionWithArgs(10, 5);

// function myFunctionWithArgs(a, b){
//     console.log(a * b);
// }
// myFunctionWithArgs(5, 6);

// ======== Global Scope & functions  ========= ///
// variables outside of functions is global scope

// var myGlobal = 10;
// function fun1(){
//     notGlobal = 2 // if var was used it would only show in fun1 not globally
//      // so when you declare without var it beccomes global evein inside function

// }

// function fun2(){
//     var output = " ";

//     if (typeof myGlobal != "undefined"){
//         output += "myGlobal: " + myGlobal;
//     }
//     if (typeof notGlobal != "undefined") {
//         output += " notGlobal: " + notGlobal;
//     }
//     console.log(output);
// }
// fun1();
// fun2();

// ======== Local Scope & function  ========= ///

//  function myLocalScope(){
//     var myVar = 5;
//     console.log(myVar);
//  }
//  myLocalScope();

//  console.log(myVar); // output => myVar is not defined

// ======== Global vs local Scope & function  ========= ///

// local variable overtakes global variable

// var outWear = "T-shirt"; // global variable
// function myOutFit(){
//     outWear = "Jeans" // local variable
//     return outWear;
// }
// console.log(outWear); // output => T-shirt
// console.log(myOutFit()); // output => Jeans

// ======== return value from function  ========= ///

// function minusSeven(num){
//     return num -7;
// }
// console.log(minusSeven(10));// output => 3

// function timesfive(num){
//     return num * 5;
// }
// console.log(timesfive(5));// output => 25

// ========  Undefined value from function ========= ///

// var sum = 0;
// function addThree(){
//     sum = sum + 3
// }
// console.log(addThree(2)); // output => undefined because it has no return value

// function addFive(){
//     sum += 5
// }
// console.log(addFive(2)); // output => undefined

// ======== returned value   ========= ///

// var changed = 0;
// function change(num){
//     return (num + 5) / 3;
// }
// changed = change(10);
// console.log(changed);

// var processed = 0;
// function processedArg(num) {
//     return (num + 3) / 5;
// }
// processed = processedArg(22);
// console.log(processed);

// ======== Stand in Line   ========= ///

// function nextInLine(arr, item) {
//     arr.push(item);
//     // return item;
//     return arr.shift(); // shift removes first item and retturns the items
// }

// var testArr = [1,2,3,4,5];

// console.log("Before: ", JSON.stringify(testArr));
// //  The JSON.stringify() static method converts a JavaScript value
// //  to a JSON string, optionally replacing values if a replacer function is specified or
// //  optionally including only the specified properties if a replacer array is specified.
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// // ========  Booleans ========= ///

// function welcomeToBooleans (){
//     return true;
// }
// console.log(welcomeToBooleans());

// ======== Conditional Logic with If statement ========= ///

// function ourTrueOrFalse(isItTrue) {
//     if(isItTrue ){ // this is variable
//         return "yes, it is true";
//     }
//     return "no it is not true";
// }
// console.log(ourTrueOrFalse(false));

// function TrueOrFalse(wasItTrue) {
//     if(wasItTrue){
//         return "yes, it was true";
//     }
//     return "no it was not false";
// }
// console.log(TrueOrFalse(true));

// ========  EQUALITY  operators ========= ///

// function testEqual(val) {
//     if (val == 10) {
//         return "Equal"
//     }
//     return "Not Equal"
// }
// // testEqual(10);
// console.log(testEqual(10));

// ======== Strict EQUALITY  operators  ========= ///

// function testEqual(val) {
//     if (val == 7) {
//         return "Equal"
//     }
//     return "Not Equal"
// }
// // testEqual(10);
// console.log(testEqual('7')); // output => equal

/**
 * 3 === 3
 * 3 == '3' it does not convert in three equals but if it was two equals
 */

// ======== Comapre different values  ========= ///

// function compareEquality(a, b) {
//     if (a == b) {
//         return "Equal"
//     }
//     return "Not Equal"
// }

// console.log(compareEquality(10, "10"));  // output => equal if i change (a == b) to => (a === b) then it is not equal

// function testNotEqual(val) {
//     if (val != 99 ) {
//         return "Not Equal"
//     }
//     return "Equal"
// }
// console.log(testNotEqual(10));

// function testStrictNotEqual(val) {
//     if (val !== 17) {
//         // Only Change Code above this Line
//         return "Not Equal"
//     }
//     return "Equal"
// }
// // Change this  Value to Test
// console.log(testStrictNotEqual(10));  // output => not equal

// ======== Equality Operators  ========= ///

// function testGreaterThan(val) {
//     if (val > 100) {
//         return "Over 100";
//     }
//     if (val > 10) {
//         return "Over 10";
//     }
//     return "10 or Under";
// }
// console.log(testGreaterThan(10));

// function testGreaterOrEqual(val) {
//     if (val >= 20) {
//         return "20 or Over";
//     }
//     if (val >= 10) {
//         return "10 or Over";
//     }
//     return "Less than 10";
// }
// console.log(testGreaterThan(10));

// function testLessThan(val) {
//     if (val < 25) {
//         return "under 25";
//     }
//     if (val < 55) {
//         return "under 55";
//     }
//     return "55 or over";
// }
// console.log(testLessThan(10));

// function testLessorEqual(val) {
//     if(val <= 12){
//          return "Smaller than or equal to 12";
//     }
//    if (val <= 24 ) {
//     return " smaller than or eqaul to 24";
// }
// return "more than 24";
// }
// console.log(testLessorEqual(10));

// ========  nested if statement more then 2 ifs ========= ///

// function testLogicalAnd(val) {
//     if (val <= 50) {
//         if (val >= 25) {
//             return "yes";
//         }
//     }
//     return "no";
// }
// and opertator in if statement
// function testLogicalAnd(val) {
//     if (val <= 50 && val >= 25) {
//        return "yes"
//     }
//     return "no";
// }
// console.log(testLogicalAnd(30));
// testLogicalAnd(10);

// ======== comparision with logical or operator  ========= ///

// function testLogicalOr(val) {
//     if (val < 10) {
//         return "Outside";
//     }
//     if (val > 20 ) {
//        return "Outside";
//     }
//     return "Inside";
// }
// function testLogicalOr(val) {
//     if (val < 10 || val > 20) {
//         return "Outside";
//     }
//     return "Inside";
// }
// console.log(testLogicalOr(2));

// ======== if else statement  ========= ///

// function testElse(val) {
//  var result = "";
//  if (val > 5) {
//     result = "bigger than 5";
//  } else {
//     result = "5 or smaller"
//  }
//  return result ;
// }
// console.log(testElse(2));

// function testElseIf(val) {
//   if (val > 10) {
//     return "bigger than 10";
//   } else if (val < 5) {
//     return " smaller than 5";
//   } else {
//     return "between 5 and 10";
//   }
// }
// console.log(testElseIf(8));

// ======== order in else if statement  ========= ///
// it is important to write your if else statement in order first comes smaller number so it can check

// function orderMyLogic(val) {
//   if (val < 5) {
//     return "less than 5";
//   } else if (val < 10) {
//     return "less than 10";
//   } else {
//     return " greater than or equal to 10";
//   }
// }
// console.log(orderMyLogic(7));

// ======== chaining if else statements  ========= ///

// function testSize(num) {
//   if (num < 5) {
//     return "Tiny";
//   } else if (num < 10) {
//     return "small";
//   } else if (num < 15) {
//     return "medium";
//   } else if (num < 20) {
//     return "large";
//   } else {
//     return "Huge";
//   }
// }
// console.log(testSize(11));

// ======== Golf Code  ========= ///

// var names = [
//   "Hole in one!",
//   "Eagle",
//   " Birdie ",
//   " Par ",
//   " Bogey ",
//   " Double Bogey ",
//   " Go Home! ",
// ];
// function golfScore(par, strokes) {
//   if (strokes == 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes == par - 1) {
//     return names[2];
//   } else if (strokes == par) {
//     return names[3];
//   } else if (strokes <= par + 1) {
//     return names[4];
//   } else if (strokes <= par + 2) {
//     return names[5];
//   } else if (strokes <= par + 3) {
//     return names[6];
//   } else {
//     return "Change Me";
//   }
// }
// console.log(golfScore(5, 8));
/**
 1 => "Hole in one!",
 <= par -2  => "Eagle", 
 == par-1 => " Birdie ",
 par => " Par ",
 par + 1 => " Bogey ",
 par + 2 => " Double Bogey ",
 >= par + 3 => " Go Home! "
 */

// ========  Switch Statements ========= ///

/*
 write a switch statement which tests val and sets answer for the following conditions:
1 - "Alpha"
2 - "betta"
3 - "gamma"
4 - "delta"
*/
// function caseInSwitch(val) {
//   var answer = "";
//   // return answer;
//   switch (val) {
//     case 1:
//       answer = "alpha";
//       break;
//     case 2:
//       answer = "betta";
//       break;
//     case 3:
//       answer = "gamma";
//       break;
//     case 4:
//       answer = "delta";
//       break;
//   }
//   return answer;
// }
// // caseInSwitch(1);
// console.log(caseInSwitch(3));

// Default options in switch statements

// function switchOfStuff(val) {
//   var answer = "";
//   switch (val) {
//     case "a":
//       answer = "apple";
//       break;
//     case "b":
//       answer = "banana";
//       break;
//     case "c":
//       answer = "cucumber";
//       break;
//     default:
//         answer = "Fruits";
//       break;
//   }
//   return answer;
// }
// console.log(switchOfStuff("a"));

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///

// ========   ========= ///
