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

// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.push("happy", "joy");
// ourArray.push(["happy", "joy"]);

// console.log(ourArray); //[ 'Stimpson', 'J', 'cat', 'happy', 'joy' ]
// console.log(ourArray); // [ 'Stimpson', 'J', 'cat', [ 'happy', 'joy' ] ]

// var myArray = [["John", 31], ["Adolat", 27]];
// myArray.push(["Amira", 03]);
// console.log(myArray); // [ [ 'John', 31 ], [ 'Adolat', 27 ], [ 'Amira', 3 ] ]

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








