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
/*
multiple switch statement
*/
// function sequentialSizes(val) {
//   var answer = "";
//   switch (val) {
//     case 1:
//     case 2:
//     case 3:
//       answer = "Low";
//       break;
//     case 4:
//     case 5:
//     case 6:
//       answer = "Mid";
//       break;
//     case 7:
//     case 8:
//     case 9:
//       answer = "high";
//       break;
//   }
//   return answer;
// }
// console.log(sequentialSizes(8));

/*
Replacing if else chains with switch statement
*/
// function changeToSwitch(val) {
//   var answer = "";
//   if (val === "bob") {
//     answer = "Marley";
//   } else if (val === 42) {
//     answer = "The Answer";
//   } else if (val === 1) {
//     answer = "there is no #1";
//   } else if (val === 99) {
//     answer = "missed me by this much!";
//   } else if (val === 7) {
//     answer = "ate nine";
//   }
//   return answer;
// }
// console.log(changeToSwitch("bob"));

// function changedtoSwitch(params) {
//   var reply = "";
//   switch (params) {
//     case "bob":
//       reply = "Marley";
//       break;
//     case 42:
//       reply = "The answer";
//       break;
//     case 1:
//       reply = "there is no #1";
//       break;
//     case 99:
//       reply = "missed me by this much";
//       break;
//     case 7:
//       reply = "ate nine!!!";
//       break;
//   }
// }
// console.log(changedtoSwitch(42));

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// console.log(getDay());
// for (let i = 0; i < 100;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
// for (let i = 1; i < 100; i++) {
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 10 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }

// ======== Boolean values from Functions  ========= ///
// function isLess(a, b) {
//   if (a < b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isLess(10, 15));
// better use this way
// function isLess(a, b) {
//     return a < b;
// }
// console.log(isLess(10, 15));

// ======== return early pattern from functions ========= ///

// function abTest(a, b) {
//   if (a < 0 || b < 0) {
//     return undefined; // output => unddefined
//   }
//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
// console.log(abTest(-2, 2));
// console.log(abTest(2, 2));

// ======== Counting Cards  ========= ///

// let count = 0;

// function cc(card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//       count--;
//       break;
//   }
//   let holdbet = "Hold";
//   if(count > 0){
//     holdbet = "Bet";
//   }

//   return count+ " " + holdbet;
// }

// cc(2);
// cc("K");
// cc(10);
// cc("K");
// cc("A");
// console.log(cc(4));

// ======== Build Objects  ========= ///

// let ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything"]
// };

// let NameChange = ourDog.name

// let myDog ={
//     "name": "It",
//     "legs": 3,
//     "tails": 2,
//     "friends": []
// }

// /*
// accessing object property with dot notation
// */
// let testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "bravo"
// }
// let hatval = testObj.hat;
// let shirtVal = testObj.shirt;
/*
accessing object property with bracket notation
*/

// let testObj = {
//     "an entree": "burger",
//     "my shirt": "jersey",
//     "the drinks": "water"
// };
// let entreeVal = testObj["an entree"];
// let shirtVal = testObj["my shirt"];
// console.log(entreeVal); // => burger

/**
 * access object property with variable
 */

// let testObj = {
//     12 : "Namath",
//     16: "Montana",
//     19: "Unitas"
// };
// let playerNumber = 16;
// let player = testObj[playerNumber];
// console.log(player); // => Montana

/**
 * updating object properties
 */
// let ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything"]
// };

// ourDog.name = "Happy Camper";
// console.log(ourDog);

// let myLife ={
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["FreeCode Campers"]
// }
// myLife.name = "happy Coder";
// myLife.friends= ["free code campers"]
// console.log(myLife);
// myLife["work"] = "Brunsdigital" // => added new property
// console.log(myLife);
// delete myLife.work // => deleted property
// console.log(myLife);

// ======== using obj for lookups  ========= ///
// function phoneticLookup(val) {
//   //=> 1:56:29
//   var result = "";
//   var lookup = {
//     "alpha": "Adams",
//     "bravo": "Boston",
//     "charlie": "Chicago",
//     "delta": "Denver",
//     "echo": "Easy",
//     "foxtrot": "Frank",
//   };
//   result = lookup[val];

//   //   switch (val) {
//   //     case "alpha":
//   //       result = "Adams";
//   //       break;
//   //     case "bravo":
//   //       result = "Boston";
//   //       break;
//   //     case "charlie":
//   //       result = "Chicago";
//   //       break;
//   //     case "delta":
//   //       result = "Denver";
//   //       break;
//   //     case "echo":
//   //       result = "Easy";
//   //       break;
//   //     case "foxrot":
//   //       result = "Frank";
//   //       break;
//   //   }

//   return result;
// }
// console.log(phoneticLookup("echo"));

// ======== Testing Objects for Properties  ========= ///

// let myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
// }
// function checkObj(checkProp) {
//   if(myObj.hasOwnProperty(checkProp)){
//     return myObj[checkProp];
//   } else {
//     return "Not Found"
//   }

//     return "Change me!";
// }
// console.log(checkObj("gift"));
// console.log(checkObj("hello"));

// ======== Manipulating Complex Objects  ========= ///

// let myMusic = [
//   {
//     artist: "Billy Joel",
//     title: "Piano Man",
//     release_year: 1973,
//     formats: ["CD", "8T", "LP"],
//     gold: true,
//   },
// //   we created second obj similiar to json
//   {
//     artist: "Beau Carnes",
//     title: "Cereal Man",
//     release_year: 2003,
//     formats: ["Youtube video"],
//     gold: true,
//   },
// ];

// ======== Accessing Nested Objects  ========= ///

// let myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside":  {
//             "trunk": "jack"
//         }
//     }
// };
// let gloveBoxContents = myStorage.car.inside["glove box"]; // change this line
// let gloveBoxContents2 = myStorage.car.inside; // change this line

// console.log(gloveBoxContents);
// console.log(gloveBoxContents2);

// ======== Nested Arrays  ========= ///

// let myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];
// let secondTree = myPlants[1].list[1];
// console.log(secondTree); // => pine

// ======== Record Collection   ========= ///

// let collection = {
//     "2548": {
//         "album": "Slippery when wet",
//         "artist": "Bon Jovi",
//         "tracks": [
//             "let it rock",
//             "you give love a bad name"
//         ]
//     },
//     "2468": {
//         "album": "1999",
//         "artist": "Prince",
//         "tracks": [
//             "1999",
//             "Little Red Corvette"
//         ]
//     },
//     "1245": {
//         "artist": "Robert Palmer",
//         "tracks": [

//         ]
//     },
//     "5439": {
//         "album": "Abba Gold"
//     },
// }

// // in order to keep original collection for tests down bellow is way
// let collectionCopy = JSON.parse(JSON.stringify(collection));

// // only change code bellow this line

// function updateRecords(id, prop, value) {
//     if (value === ""){
//         delete collection[id][prop];
//     } else if ( prop === "tracks") {
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(value);
//     } else {
//         collection[id][prop] = value;
//     }
//     return collection;
// }
// updateRecords(2468, "tracks", "test")
// console.log(updateRecords(5439, "artist", "Abba"));

// ========  Iterate with While Loops ========= ///

// let myArray = [];
// let i = 0;
// while(i < 5){
// myArray.push(i);
// i++
// }
// console.log(myArray);

// ========  Iterate with For Loops  ========= ///

// let ourArray =[];

// for (let i = 0; i < 5; i++){
//     ourArray.push(i);
// }
// // setup
// let myArray = [];
// //  Only change code bellow this line.

// for (let i = 1; i < 6; i++){
//     myArray.push(i);
// }
// console.log(ourArray); // [ 0, 1, 2, 3, 4 ]
// console.log(myArray); // [ 1, 2, 3, 4, 5 ]

// let myArray = [];

// for (i = 0; i > -10; i--){
//     myArray.push(i);
// }

// console.log(myArray);
// ======== odd numbers with a for loop  ========= ///

// let ourArray = [];

// for(let i = 0; i < 10; i+=2){
// ourArray.push(i)
// }

// console.log(ourArray); // [ 0, 2, 4, 6, 8 ]

// let myArray = [];

// for(let i = 1; i < 10; i+= 2){
//     myArray.push(i)
//     }

//     console.log(myArray); // [ 1, 3, 5, 7, 9 ]

// ======== Count Backwards with a for loop  ========= ///

// let ourArray = [];

// for(let i = 10; i > 0; i -= 2){
// ourArray.push(i)
// }

// console.log(ourArray); // [ 0, 2, 4, 6, 8 ]
// // setup
// let myArray = [];

// for(let i = 9; i > 0; i-= 2){
// myArray.push(i)
// }
// console.log(myArray);

// ======== Iterate through an Array with a for Loop  ========= ///

// let ourArray = [9, 10, 11, 12];
// let ourTotal = 0;

// for(i=0; i < ourArray.length; i++){
//     ourTotal += ourArray[i]
// }
// console.log(ourTotal); // => 42

// // setup

// let myArray = [2, 3, 4, 5, 6];
// let myTotal = 0;
// for(i = 0; i < myArray.length; i++){
//     myTotal += myArray[i];
// }
// console.log(myTotal); // => 20

// ========  Nesting for Loops ========= ///

// function multiplyAll(array) {
//   let product = 1;
//   for (let i = 0; i < array.length; i++) {
//    for(let j = 0; j <array[i].length; j++){
//     product *= array[i][j];
//    }
//   }
//   return product;
// }
// let product = multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);
// console.log(product);

// ======== Perform with do ... while loops  ========= ///
// while checks the condition first then check the condition

// Setup
// let myArray = [];
// let i = 10;

// // while (i < 5) {
// // myArray.push(i);
// // i++;    
// // }
// // do while loop first runs then checks the condition
// do {
//   myArray.push(i);
//   i++; 
// } while (i < 5)
// console.log(i, myArray);


// ======== Profile Lookup  ========= ///


// let contact = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laina",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0489345643",
//         "likes": ["Intriguing", "Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unkown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     },
// ]

// function lookUpProfile(name, prop) {
//     for(i = 0; i < contact.length; i++){
//         if(contact[i].firstName === name){
//              return contact[i][prop]
//         }
//         return "No such contact exisit";
//     }
  
// }
// let data = lookUpProfile("Akira", "likes");
// // let data = lookUpProfile("Sherlock", "hello");

// console.log(data); // => [ 'Pizza', 'Coding', 'Brownie Points' ]


// ======== Generate Random Fractions  ========= ///

// function randomFraction(params) {
//     return Math.random();
// }
// console.log(randomFraction()); // => 0.31168057230609425 it brings random number

// ======== Generate Random Whole Numbers  ========= ///
// The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.

// let randomNumberBetween0And19 = Math.floor(Math.random() * 20);
// function randomWholeNumber() {
    

//     return Math.floor(Math.random() * 10);
// }

// console.log(randomWholeNumber());

// ======== Generate Random Whole Numbers within a Range  ========= ///

// function ourRandomRange(ourMin, ourMax) {
//     return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
// }
// // ourRandomRange(1, 9);
// console.log(ourRandomRange(1, 9)); // TODO not clear make sure to understand

// function randomRange(myMin, myMax) {
//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }
// let myRandom = randomRange(5, 15);
// console.log(myRandom);

// ======== Use parseInt Function  ========= ///

// function convertToInteger(str) {
//     return parseInt(str)
// }
// console.log(convertToInteger("56")); // return value is now number not a string

// lets use parseInt with Radix
// function convertToInteger(str) {
//     return parseInt(str, 2)
// }
// console.log(convertToInteger("10011")); // return  binary value is now number not a string



// ======== use The Conditional (Ternary) Operator  ========= ///

// condition ? statement-if-true : statement-if-false;

// function checkEqual(a, b) {
//     // if(a === b){
//     //     return true;
//     // }else{
//     //     return false;
//     // } // => instead lets use ternary operator
//     // return a === b ? true : false; // or =>
//     return a === b

// }
// console.log(checkEqual(1, 2));



// ======== use Multiple ternary operator ========= ///

// function checkSign(number) {
//     return number > 0 ? "positive" : number < 0 ? "negative" : "zero"
// }
// console.log(checkSign(0));

// ======== difference var or let or const  ========= ///



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
