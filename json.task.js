//my_arr= [23, “Jane”, 560, [“Lesson”, “Maths”, {“currency” : “KES”}], 987, 76,”John”]

let my_arr = [23, "Jane", 560, ["Lesson", "Maths", { "currency": "KES" }], 987, 76, "John"]

//Display KES
console.log(my_arr[3][2]["currency"])

//Display 560
console.log(my_arr[2])

//Display Maths
console.log(my_arr[3][1]) //

//4. In the object with the key currency, add another key “amount” with value 90

my_arr = [23, "Jane", 560, ["Lesson", "Maths", { "currency": "KES", "amount": 90 }], 987, 76, "John"]
console.log(my_arr[3][2]["amount"])

//Reverse 987 to 789 without using an inbuilt -method or Assigning 789 manually.
                      // Hint: arrays can be reversed using reverse() functions.
let num = my_arr[4];
let str = String(num);
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
my_arr[4] = Number(reversed);
console.log(my_arr[4]);
// Change the name “John” to “Jane” . 
my_arr[6] = "Jane"
console.log(my_arr)  //[23,"Jane",560,["Lesson", "Maths", { currency: "KES", amount: 90 }],987,76,"Jane"]

