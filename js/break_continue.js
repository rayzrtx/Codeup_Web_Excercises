/**
 * Created by raylinares on 10/10/16.
 */
"use strict";


var randomNumber;
    while (true){
        randomNumber = Math.floor(Math.random()*50)+1;
        if (randomNumber % 2 != 0){
            break;
        }
    }
    console.log(randomNumber);