// console.log("hi im adam");

// let aboutButton = "ula"
// console.log("im: "  + aboutButton);

// let button = document.querySelector(" .about .btn")
// console.log(button);

// button.addEventListener("click",()=> {
//     alert("i have created an event")
// })
// This variable contains a string, string in programming means a text
// We have to always put the text inside ""
let myName = "ula"
// number type of data is just a number, you can write it in normal way 🙂
let number = 10
// array An array in JavaScript is like a box where you can store many things in order. Imagine you have a box with names/numbers inside. Each element has an index(position), so you can find them easily.
let array = [100, 12, 28, 68,]
// An object in JavaScript is like a treasure chest where you store different things with labels (names). Instead of using numbers like an array, you use keys to find things.
let object = {
    car: "audi",
    production: "last year",
    colour: "black"
}
// console.log(myName);
// console.log(number);
// console.log(array);
// console.log(object);
// console.log("we are getting the conreate value from the array" + array[2]);
// console.log(object.colour);
// myName = "ula"
// console.log(myName);

// let array2 = [...array, 50, 23, 65]
// console.log(array2);

let object2 = {
    ...object,
    owner: "john"
}
// console.log(object2);
let singleText = "ball"
let multiTexts = ["ball", "cookie", "milk"]
console.log("i like " + multiTexts[1] + " with " + multiTexts[2]);
console.log("my New " + object.car + " which were built " + object.production + " in the color " + object.colour);

let addition = 15

console.log(multiTexts);
let isAdult = false

let coupleAssertion = addition === 70 && isAdult
// console.log(coupleAssertion);

// && means true and true so both sides must be correct
// || means true or false so at least 1 part has to be correct
if (addition < 18 || isAdult) {
    // console.log("this person is not an adult");

} else {
    // console.log("this is adult");

}


if ("adam" === myName) {
    // console.log("this is a student");

} else if (myName === "ula") {
    // console.log("this is a teacher");

}




// form logic

let firstName = document.querySelectorAll("input")
console.log(firstName);
