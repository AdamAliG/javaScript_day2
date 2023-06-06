// ex1 | Temperature v1.0

let min = -5;
let max = 25;


let random = Math.floor(min + Math.random()*26);
console.log(random);

if (random <= 10)  {
  console.log("The weather is cold");
} else {
  console.log("The weather is moderate");
}

//ex2 | Random Food

favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"];

function randomFood (){
  let randomIndex = Math.floor(Math.random() * favoriteFoods.length);
  return favoriteFoods[randomIndex];
}

console.log(randomFood());

//ex3 | Crystal Gazer

function crystalGazer (numberOfChildren, partnerName, geoLocation, jobTitle){

  console.log(`You will be ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numberOfChildren} children.`);

}

crystalGazer(4, "Jessi", "Austria", "Engineer");

//ex 4 / 5| Age Calculator - improved


  function ageCalculator(birthYear) {
    let age1 = 2023 - birthYear;
    let age2 = age1 - 1;
    return `You are either ${age1} or ${age2}`;
}

console.log(ageCalculator(1994)); 


//ex 6 | Degree-Radian Conversion

function conversion (degrees){
  let radiants = degrees * (Math.PI/180);
  
  console.log(radiants + "radiants");
}

conversion(90);


//ex 7 | Area and Volume of a box

function calculate (width, height, depth){
let area = width * height;
let volume = width * height * depth;
console.log (`The area of the box is ${area}`);
console.log (`The area of the box is ${volume}`);
}

calculate (7,2,5);









