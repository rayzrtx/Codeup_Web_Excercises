/**
 * Created by raylinares on 11/7/16.
 */
'use strict';

//to alphabetize an array of strings without using sort

    var filteredLetters = [];
    var arrayOfLetters = ['e','a','g','c','i','d','f','b','h'];
    var min = arrayOfLetters[0];
    var minIndex = 0;
do {
    arrayOfLetters.forEach(function (letter, i) {
        if (min > letter) {
            min = letter;
            minIndex = i;
        }

    });
    arrayOfLetters.splice(minIndex, 1);
    filteredLetters.push(min);
}
    while (arrayOfLetters.length > 0);

