// normal loop //
function normal() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}
normal();

console.log("-------");

// reverse loop //
function reverse() {
  for (let i = 3; i >= 0; i--) {
    console.log(i);
  }
}
reverse();

console.log("-------");

function normalloopArray() {
  const array1 = ["a", "b", "c", "d"];

  for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
  }
}
normalloopArray();

console.log("-------");

function reverseloopArray() {
  const array1 = ["a", "b", "c", "d"];
  for (i = array1.length - 1; i >= 0; i--) {
    console.log(array1[i]);
  }
}
reverseloopArray();

console.log("-------");

function breakAndCon() {
  const num = ["a", "b", "c", "d", "e", "f", "g", 8, 9, 10];
  for (i = 0; i < num.length; i++) {
    if (num[i] === "g") {
      break;
    }
    console.log(num[i]);
  }
}
breakAndCon();

console.log("-------");

// function whileShare() {
//   let i = 10;
//   while (i - 2) {
//     if ((i = 0)) {
//       console.log(i);
//       break;
//     }
//   }
// }
// whileShare();

console.log("-------");

/*
function oddeven() {
  for (i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} even`);
    } else {
      console.log(`${i} คี่`);
    }
  }
}
oddeven();
*/
function normal() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
normal();
