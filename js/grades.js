/**
 * Created by raylinares on 10/11/16.
 */
"use strict";


function avg3Grades() {
    var result1 = 0;
    for (var i = 0; i < 3; i++){
      var grade = prompt("Please enter grade");
        result1 = result1 + parseInt(grade);
    }

        return result1 / 3;
}

if (avg3Grades() >= 80) {
    alert("You are awesome!");
}else {
    alert("You need practice");
}
