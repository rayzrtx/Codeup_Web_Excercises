/**
 * Created by raylinares on 10/7/16.
 */
"use strict";

for (var i=1;i<10;i++){
    var numberScript=i.toString();
    console.log(numberScript.repeat(i));
}
    var i=0;
    var numberScript=i.toString();
    console.log(0+(numberScript.repeat(9)));



var randomNumber=Math.floor(Math.random()*10)+1;
var counter=1;

do {
    console.log(randomNumber + "x" + counter + "=" + (randomNumber * counter));
    counter = counter + 1;
}   while (counter<=10);




for (var i=1;i<=10;i++) {
    var randomNumber=Math.floor(Math.random()*180)+20;
    if (randomNumber % 2 == 0) {
            console.log(randomNumber + " is even");
        }
        else {
        console.log(randomNumber + " is odd");
    }
}

for (var fives=100;fives>=5;fives=fives-5){
    console.log(fives);
}