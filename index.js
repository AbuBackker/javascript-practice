// Letter Grade =>

// var marks= prompt("Please enter your Number:");

// if (marks>100 || marks<0) {
// 	document.write("<h1>Invalid Marks</h1>");
// }
// else if (marks>=80 && marks<=100) {
// 	document.write("<h1>A+</h1>");
// }
// else if (marks>=70 && marks<=79) {
// 	document.write("<h1>A</h1>");
// }
// else if (marks>=60 && marks<=69) {
// 	document.write("<h1>A-</h1>");
// }
// else if (marks>=50 && marks<=59) {
// 	document.write("<h1>B</h1>");
// }
// else if (marks>=40 && marks<=49) {
// 	document.write("<h1>C</h1>");
// }
// else if (marks>=33 && marks<=39) {
// 	document.write("<h1>D</h1>");
// }
// else{
// 	document.write("<h1>Fail</h1>");
// }

// Vowel / Consonant =>

// var letter= prompt("Please enter your Number:");

// letter = letter.toLowerCase();

// if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
// 	document.write("<h1>Vowel</h1>");
// }
// else  {
// 	document.write("<h1>Cosonant</h1>");
// }

// Switch, Case, Break, Default =>

// var letter= prompt("Please enter your Letter:");

// letter = letter.toLowerCase();

// switch(letter){
// 	case "a":
// 	case "e":
// 	case "i":
// 	case "o":
// 	case "u":
// 	document.write("<h1>Vowel</h1>");
// 	break;
// 	default:
// 	document.write("<h1>Cosonant</h1>");

// }

// For Loop =>

for (var i = 100; i >= 1; i = i - 2) {
    // document.write(i+"</br>");
}

// 1+2+3...+N

// var first = parseInt(prompt("Enter Your First Number:"));
// var second = parseInt(prompt("Enter Your Second Number:"));

// var sum = 0;

// for (var i = first; i <=second; i++) {
// 	sum = sum + i
// }

// document.write(sum);

// Adding two number for 3 times

// for (var i = 0; i < 3; i++) {
// var num1 = parseInt(prompt("Enter Your First Number:"));
// var num2 = parseInt(prompt("Enter Your Second Number:"));
// var sum = num1 + num2;
// document.write(sum+"</br>");
// }

// While Loop =>

var i = 1;
while (i <= 100) {
    // document.write(i+"</br>");
    i++;
}

// 1+2+3+4+5=?

var i = 1;
var sum = 0;

while (i <= 5) {
    sum = sum + i;
    i++;
}
// document.write(sum);

// 2 + 4 + 6 + ... + 100

var i = 2;
var sum = 0;
while (i <= 100) {
    sum = sum + i;
    i = i + 2;
}
// document.write(sum);

// Divisible by 3 & 5 for ( 1 to 100 ) =>

var i = 1;
var sum = 0;
while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum = sum + i;
    }
    i++;
}
// document.write(sum);

// Do While Loop =>

var i = 1;
do {
    // document.write(" "+ i);
    i++;
} while (i <= 10);

// Break & Continue =>

for (var i = 0; i <= 100; i++) {
    if (i == 10) {
        break;
    }

    // document.write(" "+ i);
}

for (var i = 0; i <= 100; i++) {
    if (i == 10) {
        continue;
    }

    // document.write(" " + i);
}

// Function =>

function square(num1) {
    var result = num1 * num1;
    document.write("Result = " + result);
}
// square(5);

function addition(num1, num2) {
    var result = num1 + num2;
    return result;
}
// document.write("Result = " + addition(5, 4));