    "use strict";

    // TODO: Create person object
    // var person = todo;
    var person = {};

    // TODO: Create firstName and lastName properties in your person object; assign your name to them
    person.firstName = "Ray";
    person.lastName = "Linares";

    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties

    // Say hello from the person object.
    // person.sayHello();

    person.sayHello = function () {
        alert("Hello from " + person.firstName +" " + person.lastName);
    };

    var books = [
        {
            "title": "Coding for Dummies",
            "author": {
                "firstName": "Cody",
                "lastName": "Coderson"
            }
        },
        {
            "title": "Me vs Hans Gruber",
            "author": {
                "firstName": "John",
                "lastName": "McClane"
            }
        },
        {
            "title": "How to protect your home against dumb burglars",
            "author": {
                "firstName": "Kevin",
                "lastName": "McCallister"
            }
        },
        {
            "title": "Office Managment 101",
            "author": {
                "firstName": "Michael",
                "lastName": "Scott"
            }
        },
        {
            "title": "How I met my father",
            "author": {
                "firstName": "Luke",
                "lastName": "Skywalker"
            }
        }
    ];


    books.forEach(function (book, index) {
        console.log("Book # is " + (index + 1)); // Loop through the array of books using .forEach and print out the specified information about each one.
        console.log("The title is " + book.title);
        console.log("Written by " + book.author.firstName + " " + book.author.lastName);
    });
