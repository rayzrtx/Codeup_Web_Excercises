/**
 * Created by raylinares on 10/6/16.
 */
"use strict";

var receipt=60;
var number1Discount=receipt*.90;
var number2Discount=receipt*.75;
var number3Discount=receipt*.70;
var number4Discount=receipt*.50;
var luckynumber=Math.floor(Math.random()*6);
var payment=receipt;

switch (luckynumber)
{
    case 1:
    payment = number1Discount;
    break;
    case 2:
    payment = number2Discount;
    break;
    case 3:
    payment = number3Discount;
    break;
    case 4:
    payment = number4Discount;
    break;
    case 5:
    payment = 0;
    break;
}
    console.log(luckynumber);
    console.log(payment);

var monthNumber=Math.floor(Math.random()*12)+1;
var monthName="December";
switch (monthNumber) {
    case 1:
        monthName="January";
        break;
    case 2:
        monthName="February";
        break;
    case 3:
        monthName="March";
        break;
    case 4:
        monthName="April";
        break;
    case 5:
        monthName="May";
        break;
    case 6:
        monthName="June";
        break;
    case 7:
        monthName="July";
        break;
    case 8:
        monthName="August";
        break;
    case 9:
        monthName="September";
        break;
    case 10:
        monthName="October";
        break;
    case 11:
        monthName="November";
        break;
}
console.log(monthNumber);
console.log(monthName);