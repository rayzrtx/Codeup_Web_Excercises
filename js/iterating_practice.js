/**
 * Created by raylinares on 10/12/16.
 */
"use strict";


//filter out odd numbers in an array
var odds = function (number) {
    return number % 2 != 0;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddsArray = numbers.filter(odds);
console.log(oddsArray);

//filter out evens
var evens = function (number) {
    return number % 2 == 0;
};
var numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evensArray = numbers.filter(evens);
console.log(evensArray);

//filter out states that start with T
var states =
    ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
var filteredStates = states.filter(function (word) {
    return word[0] === "M";
}); console.log(filteredStates);

//square each number in an array

var numbers2 = [2, 4, 6, 8, 10];
function squareNumbers(arrayOfSquares) {
    var squaredNumbers = [];
    arrayOfSquares.forEach(function (number) {
        squaredNumbers.push(number * number);
    }); return squaredNumbers;
}console.log(squareNumbers(numbers2));




/*
 * How many times a lucky number is repeated for every 100 customers?
 */
var luckyNumber;
var i = 1;
var timesZero = 0;
var timesOne = 0;
var timesTwo = 0;
var timesThree = 0;
var timesFour = 0;
var timesFive = 0;
while (i <= 100) {
    luckyNumber = Math.floor(Math.random()* 6);
    if (luckyNumber == 0){
        timesZero += 1
    }
    if (luckyNumber == 1){
        timesOne += 1
    }
    if (luckyNumber == 2){
        timesTwo += 1
    }
    if (luckyNumber == 3){
        timesThree += 1
    }
    if (luckyNumber == 4){
        timesFour += 1
    }
    if (luckyNumber == 5){
        timesFive += 1
    }
    i += 1; // What do I need here?

}   console.log("0 appeared " + timesZero + " times");
    console.log("1 appeared " + timesOne + " times");
    console.log("2 appeared " + timesTwo + " times");
    console.log("3 appeared " + timesThree + " times");
    console.log("4 appeared " + timesFour + " times");
    console.log("5 appeared " + timesFive + " times");

// The output should be something like

// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

// The total should be 100


function firstFactorial(num) {
    var factNum=1;
    for (i=1; i <= num; i++){
        factNum = factNum * i;
    }return factNum;
}console.log (firstFactorial(8));

function longestWord(sen){

    for (var i = 0; i <= sen.length; i++){
        var filteredWord = [];
        if (sen[i].length > filteredWord.length){
            filteredWord.push(sen[i]);
        } return filteredWord;
    }
}console.log (longestWord("I love dogs"));