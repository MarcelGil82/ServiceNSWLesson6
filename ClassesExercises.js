// 1.
// class Pet {
// }
// // let myPet = new Pet();
// // myPet = "Rex";
// // console.log(myPet);

// 2
// class Pet {
//     givenName;
//     age;
//     ownerId;
// }
// // let myPet = new Pet();
// // console.log(myPet)

// 3.
// class Pet {
//     constructor(givenName, age, ownerId) {
//         this.givenName = givenName;
//         this.age = age;
//         this.ownerId = ownerId
//     }
// }
// // let myPet = new Pet("Rex,", 3, 1287);
// // console.log(myPet)

// 4.
// class Owner {
//     givenName;
//     familyName;
//     id;
// }
// let myDetails = new Owner();

// myDetails.givenName = "Jim";
// myDetails.familyName = "Jones";
// myDetails.id = 1536;

// console.log(myDetails);

// 5.
// class Owner {
//     constructor(givenName, familyName, id) {
//         this.givenName = givenName;
//         this.familyName = familyName;
//         this.id = id;
//     }
//     getFullName() {         // Q6.
//         return `${this.givenName} ${this.familyName}`;
//     }
// // }
// let details = new Owner("John", "Smith", 1356);


// console.log(details)
// console.log(details.getFullName());      // Q6.
// // if you have an Array example
// let owners = [
//     new Owner("Roxii", "Exequiel", 43),
//     new Owner("Marcel", "Gil", 38),
//     new Owner("Tiger", "Cockatiel", 5)
// ];
// for (let i = 0; i < owners.length; i++) {
//     const owner = owners[i];
//     console.log(owner.getFullName());  
// }

// 7.
class Owner {
    constructor(givenName, familyName, id) {
        this.givenName = givenName;
        this.familyName = familyName;
        this.id = id;
    }
    getFullName() {
        return `${this.givenName} ${this.familyName}`;
    }
}

class Pet {
    constructor(givenName, age, ownerId) {
        this.givenName = givenName;
        this.age = age;
        this.ownerId = ownerId;
    }
    static getOwnerById(pet, owners) {
        // non-anonymous function
        // let foundOwner;
        // for (let i = 0; i < owners.length; i++) {
        //     const owner = owners[i];
        //     if (owner.id === pet.ownerId) {
        //         foundOwner = owner;
        //         break;
        //     }
        // }
        // anonymous function
        let foundOwner = owners.find(function(owner) {
            return owner.id == pet.ownerId;
        });

        if (!foundOwner) {
            return "Error: Owner not found";
        }
        return foundOwner.getFullName();
    }
}

let owners = [
    new Owner("Roxii", "Exequiel", 128),
    new Owner("Marcel", "Gil", 338),
    new Owner("Scarlett", "Marlon", 552)
];

let myPet = new Pet("Rex", 4, 552);

console.log(Pet.getOwnerById(myPet, owners));

// 8.
// class Square {
//     constructor (sideLength) {
//     this.sideLength = sideLength;
//     }
// }
// // let mySideLength = new Square(5);
// // console.log(mySideLength);

// // 9.
// class Square {
//     constructor (sideLength) {
//     this.sideLength = sideLength;
//     }
// }
// get sqaureArea() {
// return this.sideLength ** 2;
// }
