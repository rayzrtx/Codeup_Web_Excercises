(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ["Kawhi", "Manu", "Tony", "Tim"];



    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);

    // TODO: Create log statements that will print each of the names array elements individually.
    console.log("The first name is " + names[0]);
    console.log("The second name is " + names[1]);
    console.log("The third name is " + names [2]);
    console.log("The fourth name is " + names[3]);

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    var grades = [100, 80, 90, 80, 70];
    function avgGrades() {
        var totalSum = 0;
        for (var i = 0; i < grades.length; i++){
            totalSum += grades[i];
        }
        return totalSum/grades.length;
    }
    console.log("You made an average grade of " + avgGrades());
})();



//f
//}

