// Letter Grade =>

// var marks= prompt("Please enter your Number:");

if (marks > 100 || marks < 0) {
    // 	document.write("<h1>Invalid Marks</h1>");
} else if (marks >= 80 && marks <= 100) {
    // 	document.write("<h1>A+</h1>");
} else if (marks >= 70 && marks <= 79) {
    // 	document.write("<h1>A</h1>");
} else if (marks >= 60 && marks <= 69) {
    // 	document.write("<h1>A-</h1>");
} else if (marks >= 50 && marks <= 59) {
    // 	document.write("<h1>B</h1>");
} else if (marks >= 40 && marks <= 49) {
    // 	document.write("<h1>C</h1>");
} else if (marks >= 33 && marks <= 39) {
    // 	document.write("<h1>D</h1>");
} else {
    // 	document.write("<h1>Fail</h1>");
}

// Vowel / Consonant =>

// var letter= prompt("Please enter your Number:");

letter = letter.toLowerCase();

if (
    letter == "a" ||
    letter == "e" ||
    letter == "i" ||
    letter == "o" ||
    letter == "u"
) {
    // 	document.write("<h1>Vowel</h1>");
} else {
    // 	document.write("<h1>Cosonant</h1>");
}

// Switch, Case, Break, Default =>

// var letter= prompt("Please enter your Letter:");

letter = letter.toLowerCase();

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        // document.write("<h1>Vowel</h1>");
        break;
    default:
        // document.write("<h1>Cosonant</h1>");
}

// For Loop =>

for (var i = 100; i >= 1; i = i - 2) {
    // document.write(i+"</br>");
}

// 1+2+3...+N

// var first = parseInt(prompt("Enter Your First Number:"));
// var second = parseInt(prompt("Enter Your Second Number:"));

var sum = 0;

for (var i = first; i <= second; i++) {
    sum = sum + i;
}

// document.write(sum);

// Adding two number for 3 times

for (var i = 0; i < 3; i++) {
    var num1 = parseInt(prompt("Enter Your First Number:"));
    var num2 = parseInt(prompt("Enter Your Second Number:"));
    var sum = num1 + num2;
    // document.write(sum+"</br>");
}

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

// Array =>

var num = [10, 20, 30, 40, 50];
var sum = 0;

for (var i = 0; i < 5; i++) {
    // document.write(num[i] + "</br>");
    sum = sum + num[i];
}
// document.write("sum =" + sum);

// Guessing Game =>

var numOfWon = 0;
var numOfLost = 0;

for (var i = 1; i <= 5; i++) {
    // var guessNumber = parseInt(prompt("Enter a Number: "));

    var randomNumber = Math.floor(Math.random() * 5);

    if (guessNumber === randomNumber) {
        // document.write("You Have Won" + "</br>");
        numOfWon++;
    } else {
        // document.write(
        //     "You Have Lost. Your Random Number is = " + randomNumber + "</br>"
        // );
        numOfLost++;
    }
}

// document.write("Number of Won = " + numOfWon + "</br>");
// document.write("Number of Lost = " + numOfLost + "</br>");

// Onclick (Image Slider) =>

var imgArray = [
    "https://live.hasthemes.com/html/5/ecolife-preview/ecolife/assets/images/product-image/organic/thumb-1.jpg",
    "https://live.hasthemes.com/html/5/ecolife-preview/ecolife/assets/images/product-image/organic/thumb-2.jpg",
    "https://live.hasthemes.com/html/5/ecolife-preview/ecolife/assets/images/product-image/organic/thumb-3.jpg",
    "https://live.hasthemes.com/html/5/ecolife-preview/ecolife/assets/images/product-image/organic/thumb-4.jpg",
];

var imgTag = document.querySelector("img");
var count = 0;

function next() {
    count++;
    if (count >= imgArray.length) {
        count = 0;
        imgTag.src = imgArray[count];
    } else {
        imgTag.src = imgArray[count];
    }
}

function prev() {
    count--;
    if (count < 0) {
        count = imgArray.length - 1;
        imgTag.src = imgArray[count];
    } else {
        imgTag.src = imgArray[count];
    }
}

// Onclick (Dynamic Style) =>

function addStyle() {
    var myVar = document.querySelector("#styleID");
    myVar.classList.add("para-style");
    // myVar.style.color = "red";
}

function removeStyle() {
    var myVar = document.querySelector("#styleID");
    myVar.classList.remove("para-style");
}