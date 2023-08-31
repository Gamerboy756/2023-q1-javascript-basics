class Person {

    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;

    }

    getFullName() {

        let fullName = `${this.firstName} ${this.lastName}`;
        // this is the same as: this.firstName + " " + this.lastName
        return fullName;

    }

}
//student inherits, or extends, the Person class
class Student extends Person {

    constructor(firstName, lastName, grade) {

        super(firstName, lastName);
        this.grade = grade

    }

    maybeAge() {

        let possiblyMin = this.grade + 5
        let possiblyMax = possiblyMin + 1
        let possiblyString = "estimated age: " + possiblyMin + " - " + possiblyMax
        return possiblyString
    }

}

let p1 = new Person("Jack", "Black");
let s1 = new Student("Griffin", "Hardy", 8);

console.log(p1.getFullName())
console.log(p1)
console.log(s1.maybeAge())
//because students are people too. <3 (no they aren't)
console.log(s1, s1.maybeAge())