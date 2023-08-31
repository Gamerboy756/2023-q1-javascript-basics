console.log("Hello world!");
// prints

/*
"hello
world"
to the screen
*/

// keywords for declaring variables

let firstName;
console.log(firstName);
// undefined variables output undefined!

let age = 13;
console.log(age);
//outputs 13

console.log(typeof (age));
//outputs "number"

let isGameOver = false;
//boolean
console.log(typeof (isGameOver))
//outputs "boolean"

let fruits = ["apple", "grapes", "banana"];
console.log(fruits)

console.log(typeof (fruits))
//prints "object"

//objects have properties and methods

let classroom = {

    roomNumber: 129,
    seats: 35,
    teacher: {
        firstName: "Robert",

        lastName: "Hardy",
    },

    students: [
        { firstName: "Cade", lastName: "Arney", grade: 8 },

        { firstName: "Lana", lastName: "Krakow", grade: 8 }
    ],
    lightsOn: true,
    turnLightsOff: function () {

        this.lightsOn = false;
        return;
    }
};

console.log(typeof (turnLightsOff));

classroom.turnLightsOff()

console.log(classroom);