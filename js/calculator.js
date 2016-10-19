/**
 * Created by raylinares on 10/17/16.
 */
"use strict";

var number1 = document.getElementById("one");       //calling each number button
var number2 = document.getElementById("two");
var number3 = document.getElementById("three");
var number4 = document.getElementById("four");
var number5 = document.getElementById("five");
var number6 = document.getElementById("six");
var number7 = document.getElementById("seven");
var number8 = document.getElementById("eight");
var number9 = document.getElementById("nine");
var number0 = document.getElementById("zero");
var decimal = document.getElementById("decimal");
var plusSymbol = document.getElementById("plus");
var minusSymbol = document.getElementById("minus");
var multiplySymbol = document.getElementById("multiply");
var divideSymbol = document.getElementById("divide");
var clearButton = document.getElementById("clear");
var equalsButton = document.getElementById("equals");


number1.addEventListener("click", textOne);         //When each button is clicked, it will run the function to display the number
number2.addEventListener("click", textTwo);
number3.addEventListener("click", textThree);
number4.addEventListener("click", textFour);
number5.addEventListener("click", textFive);
number6.addEventListener("click", textSix);
number7.addEventListener("click", textSeven);
number8.addEventListener("click", textEight);
number9.addEventListener("click", textNine);
number0.addEventListener("click", textZero);
decimal.addEventListener("click", textDecimal);
plusSymbol.addEventListener("click", textPlus);
minusSymbol.addEventListener("click", textMinus);
multiplySymbol.addEventListener("click", textMultiply);
divideSymbol.addEventListener("click", textDivide);
clearButton.addEventListener("click", clearAll);
equalsButton.addEventListener("click", hitEqualsButton);

//functions to display each individual number on either side of operator
    function textOne () {
        var empty = document.forms["calculator"]["operatorbox"].value;
        if (empty == ""){
            var leftInput = document.getElementById("firstbox");
            leftInput.value += "1";
        }else{
            var rightInput = document.getElementById("thirdbox");
            rightInput.value += "1";
        }

}
function textTwo () {
        var empty = document.forms["calculator"]["operatorbox"].value;
        if (empty == ""){
            var leftInput = document.getElementById("firstbox");
            leftInput.value += "2";
        }else{
            var rightInput = document.getElementById("thirdbox");
            rightInput.value += "2";
        }
}
function textThree () {
    var empty = document.forms["calculator"]["operatorbox"].value;
    if (empty == ""){
        var leftInput = document.getElementById("firstbox");
        leftInput.value += "3";
    }else{
        var rightInput = document.getElementById("thirdbox");
        rightInput.value += "3";
    }
}
function textFour () {
    var empty = document.forms["calculator"]["operatorbox"].value;
    if (empty == ""){
        var leftInput = document.getElementById("firstbox");
        leftInput.value += "4";
    }else{
        var rightInput = document.getElementById("thirdbox");
        rightInput.value += "4";
    }
}
function textFive () {
    var empty = document.forms["calculator"]["operatorbox"].value;
    if (empty == ""){
        var leftInput = document.getElementById("firstbox");
        leftInput.value += "5";
    }else{
        var rightInput = document.getElementById("thirdbox");
        rightInput.value += "5";
    }
}
function textSix () {
    var empty = document.forms["calculator"]["operatorbox"].value;
    if (empty == ""){
        var leftInput = document.getElementById("firstbox");
        leftInput.value += "6";
    }else{
        var rightInput = document.getElementById("thirdbox");
        rightInput.value += "6";
    }
}
function textSeven () {
    var empty = document.forms["calculator"]["operatorbox"].value;
    if (empty == ""){
        var leftInput = document.getElementById("firstbox");
        leftInput.value += "7";
    }else{
        var rightInput = document.getElementById("thirdbox");
        rightInput.value += "7";
    }
}
function textEight () {
    var empty = document.forms["calculator"]["operatorbox"].value;
    if (empty == ""){
        var leftInput = document.getElementById("firstbox");
        leftInput.value += "8";
    }else{
        var rightInput = document.getElementById("thirdbox");
        rightInput.value += "8";
    }
}
function textNine () {
    var empty = document.forms["calculator"]["operatorbox"].value;
    if (empty == ""){
        var leftInput = document.getElementById("firstbox");
        leftInput.value += "9";
    }else{
        var rightInput = document.getElementById("thirdbox");
        rightInput.value += "9";
    }
}
function textZero () {
    var empty = document.forms["calculator"]["operatorbox"].value;
    if (empty == ""){
        var leftInput = document.getElementById("firstbox");
        leftInput.value += "0";
    }else{
        var rightInput = document.getElementById("thirdbox");
        rightInput.value += "0";
    }
}
function textDecimal () {
    var empty = document.forms["calculator"]["operatorbox"].value;
    if (empty == ""){
        var leftInput = document.getElementById("firstbox");
        leftInput.value += ".";
    }else{
        var rightInput = document.getElementById("thirdbox");
        rightInput.value += ".";
    }
}
function textPlus () {
    var middleInput = document.getElementById("operatorbox");
    middleInput.value = "+";
}
function textMinus () {
    var middleInput = document.getElementById("operatorbox");
    middleInput.value = "-";
}
function textMultiply () {
    var middleInput = document.getElementById("operatorbox");
    middleInput.value = "*";
}
function textDivide () {
    var middleInput = document.getElementById("operatorbox");
    middleInput.value = "/";
}
function clearAll() {
        document.getElementById("calculator").reset();  //clear all windows in form
}
function hitEqualsButton() {
    var leftBox = document.getElementById("firstbox");
    var rightBox = document.getElementById("thirdbox");
    var middleBox = document.getElementById("operatorbox");
    var add = function (a, b) {
        return a + b;
    };
    var subtract = function (a, b) {
        return a - b;
    };
    var multiply = function (a, b) {
        return a * b;
    };
    var divide = function (a, b) {
        return a / b;
    };

    if (middleBox.value == "+") {
        leftBox.value= add(parseFloat(leftBox.value), parseFloat(rightBox.value))
    }
    if (middleBox.value == "-") {
        leftBox.value = subtract(parseFloat(leftBox.value), parseFloat(rightBox.value))
    }
    if (middleBox.value == "*"){
        leftBox.value = multiply(parseFloat(leftBox.value), parseFloat(rightBox.value))
    }
    if (middleBox.value == "/"){
        leftBox.value = divide(parseFloat(leftBox.value), parseFloat(rightBox.value))
    }
    rightBox.value = "";
    middleBox.value = "";
}
