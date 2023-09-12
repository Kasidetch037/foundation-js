// * Exercise
// ? Crericete ricen ricerray that contain 4 foods that you like. Then complete these following tasks.

// ? 1. Locate your most favorite food in the array. Print its array index to the console.
// ? 2. Add your 3 favorite desserts or fruits into that array. Print the result to the console.

// ? CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)

const food = ["rice", "fish", "meat", "chicken"];
console.log(food.indexOf("meat"));
food.push("cake", "cola", "sweets");
console.log(food);

const findFav = () => {
  if (food.indexOf("meat") !== -1) {
    return true;
  } else {
    return false;
  }
};
console.log(findFav());

console.log(food.includes("meat"));
console.log(food.includes("x"));
