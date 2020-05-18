// class Person {
//     name;
//     age;
// }

// let me = new Person("Marcel", 38);
// let you = new Person();

// me.name = "Marcel"; // if I wanted to add a name to class
// me.favouriteFood = "pasta"; // To add another property

// console.log(me);
// console.log(you);

// With Constructor
// // e.g. 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let me = new Person("Marcel", 38);

console.log(me);

// e.g. 2 with function
// class Person {
//     constructor(givenName, familyName, age) {
//         this.givenName = givenName;
//         this.familyName = familyName;
//         this.age = age;
//     }
//     getfullname() {
//         return `${this.givenName} ${this.familyName}` //returns Person { givenName: 'Marcel', familyName: 'Gil', age: 38 }
//     }
//     // increaseAge(number) {
//     //     this.age += number; // if i want to increase age by 5
//     // }
// }

// let me = new Person("Marcel", "Gil", 38);

// console.log(me); // returns - Person { givenName: 'Marcel', familyName: 'Gil', age: 38 }

// console.log(me.getfullname()); // returns - Marcel Gil
// me.increaseAge(5); 
// console.log(me); // returns with increased age - Person { givenName: 'Marcel', familyName: 'Gil', age: 43 }

// Static Method
// class Person {
//     constructor(givenName, familyName, age) {
//         this.givenName = givenName;
//         this.familyName = familyName;
//         this.age = age;
//     }
//     getfullname() {
//         return `${this.givenName} ${this.familyName}` //returns Person { givenName: 'Marcel', familyName: 'Gil', age: 38 }
//     }
//     increaseAge(number) {
//         this.age += number; // if i want to increase age by 5
//     }
//     static createPersonFromObject(obj) {
//         return new Person(obj.firstName, obj.familyName, obj.age);
//     }
// }

// let me = new Person("Marcel", "Gil", 38);

// let dan = Person.createPersonFromObject({
//     firstName: "Dan",
//     familyName: "Smith",
//     age: 25
// });

// console.log(dan);

Class Owner {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullNameInstance() {
        return `${this.firstName} ${this.lastName}`;
    }

    static getFullNameStatic(owner) {
        return `${owner.firstName} ${owner.lastName}`;
    }
}
letpetOwner = new Owner("Marcel", "Gil", 38);

console.log(petOwner.getFullNameInstance());
console.log(Owner.getFullNameStatic());