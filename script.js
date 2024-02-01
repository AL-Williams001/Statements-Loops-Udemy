// console.log("Hello, welcome to the shop");

// const q1 = prompt("What is your order, a coffee or tea?");
// if (q1 === "coffee") {
//   const q2 = prompt("Would you like milk?");
//   if (q2 === "yes") {
//     console.log("Here is your coffee with milk");
//   } else if (q2 !== "yes") {
//     console.log("Here is your coffee");
//   }
// } else if (q1 === "tea") {
//   const q3 = prompt("Would you like milk?");
//   if (q3 === "yes") {
//     console.log("Here is your tea with milk");
//   } else if (q3 !== "yes") {
//     console.log("Here is your tea");
//   }
// } else {
//   console.log("Have a good day!");
// }

console.log("Hello, welcome to the app");
pass = prompt("Please create a password");
console.log("Your password was created successfully");

passtry = prompt("Please enter your password");

while (passtry !== pass) {
  passtry = prompt("Wrong password, please try again");
}
console.log("Login successful");
