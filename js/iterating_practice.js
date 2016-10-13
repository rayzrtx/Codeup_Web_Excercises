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
    return word[0] === "T";
}); console.log(filteredStates);

//square each number in an array

var numbers2 = [1, 2, 3, 4, 5];
function squareNumbers(arrayOfSquares) {
    var squaredNumbers = [];
    arrayOfSquares.forEach(function (number) {
        squaredNumbers.push(number * number);
    }); return squaredNumbers;
}console.log(squareNumbers(numbers2));