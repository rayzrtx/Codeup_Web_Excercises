/**
 * Created by raylinares on 10/20/16.
 */
"use strict";

function toBinary(binaryNumber) {
    var multipliedDigit = [];
    var splitBinaryNumber = binaryNumber.split("");
    splitBinaryNumber.forEach(function (number, i) {
        multipliedDigit.push(number * 2^(splitBinaryNumber.length))
    })



}



function bin2dec(num){
    return num.split('').reverse().reduce(function(x, y, i){
        return (y === '1') ? x + Math.pow(2, i) : x;
    }, 0);
}