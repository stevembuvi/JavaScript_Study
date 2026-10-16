//Remove a middle character: Given "planet", produce "planet" without the third character, resulting in "planet" with the a removed: "plnet".
let object='planet'
console.log(object.replace("a",""))

//Compare fractions: Given a = 3, b = 7, c = 4, d = 9, determine which fraction is larger without dividing the fractions.
let a=3
let b=7
let c=4
let d=9

if ((a * d) > (c * b)) {
  console.log(`${a/b} is larger`);
} else if ((a * d) < (c * b)) {
  console.log(`${c/d} is larger`);
} else {
  console.log("Both fractions are equal");
}

//Insert a character: Given "helloworld", produce "hello-world" by inserting a hyphen

let str = "helloworld";
let outcome = str.slice(0, 5) + "-" + str.slice(5);

console.log(outcome)

//Discount calculator: A customer gets a 5% discount for spending at least 1,000 and a 15% discount for spending at least 5,000. Calculate the final price.

let price = 6000
let discount = 0

if (price >= 5000) {
  discount = 0.15
} else if (price >= 1000) {
  discount = 0.05
}

let discountAmount = price * discount
let finalPrice = price - discountAmount

console.log("Original Price:", price)
console.log("Discount:", discount * 100 + "%")
console.log("Discount Amount:", discountAmount)
console.log("Final Price:", finalPrice)

//Electricity billing: Calculate a bill using these rates: the first 100 units cost 5 per unit, the next 100 cost 8 per unit, and units above 200 cost 12 per unit.

let units = 250
let bill = 0

if (units <= 100) {
  bill = units * 5
} else if (units <= 200) {
  bill = (100 * 5) + ((units - 100) * 8)
} else {
  bill = (100 * 5) + (100 * 8) + ((units - 200) * 12)
}

console.log("Units Consumed:", units)
console.log("Total Electricity Bill:", bill)