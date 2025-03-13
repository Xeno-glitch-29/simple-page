// console.log("hi im adam");

// let aboutButton = "ula"
// console.log("im: "  + aboutButton);

// let button = document.querySelector(" .about .btn")
// console.log(button);

// button.addEventListener("click",()=> {
//     alert("i have created an event")
// })

let myName = "adam"
let number = 10
let array = [100, 12, 28, 68,]
let object = {
    car: "audi",
    production: "last year",
    colour: "black"
}
console.log(myName);
console.log(number);
console.log(array);
console.log(object);
console.log("we are getting the conreate value from the array" + array[2]);
console.log(object.colour);
myName = "ula"
console.log(myName);

let array2 = [...array, 50, 23, 65]
console.log(array2);

let object2 = {
    ...object,
    owner: "john"
}
console.log(object2);
let singleText = "ball"
let multiTexts = ["ball", "cookie", "milk"]
console.log(multiTexts[0]);
