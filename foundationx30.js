// easy //
console.log("(Easy)");

// 1 //
console.log("ข้อ 1");

const arr = [1, -4, 2, 0];
const mapRevertSign = (array) => {
  return console.log(array.map((elem) => elem * -1));
};
mapRevertSign(arr);

console.log("-----------");

// 2 //
console.log("ข้อ 2");

const arr2 = [1, 2, 3, 4, 5];
// pop -> push
const reverse = (array) => {
  let newArray = [];
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array.pop());
  }
  console.log(newArray);
};
reverse(arr2);

console.log("-----------");

// 3 //
console.log("ข้อ 3");

const isMember = (mem, arr) => {
  if (arr.includes(mem)) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};
isMember("a", ["a", "b", "c"]);

console.log("-----------");

// 4 //
console.log("ข้อ 4");
// newArray.push(arr[i]);
const arr4 = [10, 20, 10, 20, 30, 50, 60, 100];
const unique = (arr) => {
  let newArray = [];
  for (i = 0; i < arr.length; i++) {
    if (newArray.includes(arr[i]) === false) {
      //* !newArray.includes(arr[i])
      newArray.push(arr[i]);
    }
  }
  console.log(newArray);
};
unique(arr4);

console.log("-----------");

// 5 //
console.log("ข้อ 5");

const draw = (n) => {
  if (n < 0) return;
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < n; j++) {
      result += "*";
    }
    console.log(result);
  }
};
draw(5);

console.log("-----------");

// 6 //
console.log("ข้อ 6");
// i = จำนวนบรรทัด
// j = กี่ตัวในบรรทัดนั้น
const drawNg = (n) => {
  // n เป็นลบ
  if (n < 0) return;

  // loop แต่ละบรรทัด
  for (i = 0; i < n; i++) {
    //loop บรรทัดตามจำนวน n
    let draw = "";
    // string เปล่า template เอาไว้ใส่ *
    for (let j = 0; j <= i; j++) {
      //loop จำนวนตัวในบรรทัดนั้น บรรทัดที่เท่าไหร่ ก็มี * เท่านั้น
      draw += "*";
    }
    console.log(draw);
  }
};
drawNg(5);

// another sol //
const drawNg2 = (n) => {
  if (n < 0) return;
  let draw = "";
  for (let i = 0; i < n; i++) {
    draw += "*";
    console.log(draw);
  }
};
drawNg2(5);
console.log("-----------");

// ! 7 //
console.log("ข้อ 7");
const class1 = ["Alice", "Bob", "John", "Jane"];
const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

const mutual = (arr1, arr2) => {
  let newArr = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.push(arr1[i]);
        break;
      }
    }
  }
  console.log(newArr);
};

mutual(class1, class2);
//console.log(mutual(class1, class2)) // ["John", "Bob"]

console.log("-----------");

// 8 //
console.log("ข้อ 8");

const fizzBuzz = (n) => {
  if (n <= 0) return;
  for (i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
    // console.log(i);
  }
};
fizzBuzz(45);

console.log("-----------");

// ? 9 //
console.log("ข้อ 9");
const gcd = (a, b) => {
  while (b) {
    let x = b;
    b = a % b;
    a = x;
  }
  return a;
};
console.log(gcd(12, 18));
// gcd(a, b);

console.log("-----------");

// 10 //
console.log("ข้อ 10");

const arr10 = [120, 112, 111, 130, 169, 101];

const filterLt = (n, arr) => {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    // let x = arr[i] < n;
    if (arr.includes(n) && arr[i] < n) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  //! To fix this and make sure that the numbers less than n are pushed into newArr, you should directly push arr[i] instead of the boolean x when the condition is met
};

filterLt(0, arr10); // []
filterLt(112, arr10); // [111, 101]

console.log("-----------");

// 11 //
console.log("ข้อ 11");
const arr11 = [120, 112, 111, 130, 169, 101];

const filterGt = (n, arr) => {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    // console.log(i);
    if (n < arr[i]) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
};

filterGt(0, arr11); // [120, 112, 111, 130, 169, 101]
filterGt(112, arr11); // [120, 130, 169]

console.log("-----------");

// 12 //
console.log("ข้อ 12");

const compoundedReturn = (amount, interest, year) => {
  // let finalAmount = amount;
  for (let i = 0; i < year; i++) {
    amount = amount * (interest / 100) + amount;
    // finalAmount = finalAmount * (interest / 100) + finalAmount;
    // ! console.log(amount);
  }
  console.log(amount);
  // console.log(finalAmount)
  // ! log นอก for loop ไม่งั้นจะแสดงตั้งแต่ year 1->n
};
compoundedReturn(100, 10, 10);

console.log("-----------");

// 13 //
console.log("ข้อ 13");

const mean = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      console.log(null);
      return;
      //* return ออกจาก ฟช ไม่ทำต่อ
    }
    sum = sum + arr[i];
    //* sum += arr[i] หา sum ของ array
  }
  let avg = sum;
  avg = sum / arr.length;
  console.log(avg);
};

mean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 2
mean([1, "foo", 3]); // null

console.log("-----------");

// 14 //
console.log("ข้อ 14");

const mid = (arr) => {
  const middlePos = Math.floor(arr.length / 2);
  //* หา index ตัวกลาง array โดยเอา length หาร 2 แล้วปัดลง เช่น 11/2 => 5
  if (arr.length <= 0) {
    console.log(arr);
  } else if (arr.length === 1) {
    console.log(arr);
  } else if (arr.length === 2) {
    console.log(arr);
    //* array ที่ไม่มีสมาชิก , สมสชิก 1 ตัว , สมาชิก 2 ตัว
  } else if (arr.length % 2 === 0) {
    //* ถ้า length
    console.log([arr[middlePos], arr[middlePos + 1]]);
  } else if (arr.length % 2 === 1) {
    console.log([arr[middlePos]]);
  }
};

mid([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log("-----------");

// ?15 //
console.log("ข้อ 15");

const arr15 = [3, 2, 1, 12, 13, 11];
arr15.sort(function (a, b) {
  return a - b;
});
console.log(arr15);
// const newSort = (arr) => {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//       if (arr[i] < newArr[i + 1]) {
//         newArr.shift(arr[i]);
//       } else if (arr[i] > newArr[i + 1]) {
//         newArr.push(arr[i]);
//       }
//     //   // console.log(arr[i]);
//     //   // newArr.push(arr[i]);

//   }
//   // newArr.push(Math.min(...arr));
//   console.log(newArr);
// };

// newSort(arr15);

console.log("-----------");

// 16 //
console.log("ข้อ 16");

const median = (arr) => {
  const middlePos = Math.floor(arr.length / 2);

  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);

  if (arr.length % 2 === 1) {
    console.log(arr[middlePos]);
  } else if (arr.length % 2 === 0) {
    let x = (arr[middlePos] + arr[middlePos - 1]) / 2;
    console.log(x);
  }
};

median([2, 1, 5, 3, 4]);
median([2, 1, 5, 3, 4, 6, 8, 9]);
median([6, 5, 6, 8, 2, 2, 3, 2, 4, 2, 7]);

console.log("-----------");

// 17 //
console.log("ข้อ 17");

const initArr = (val, len) => {
  let newArr = [];
  for (i = 0; i < len; i++) {
    newArr.push(val);
  }
  console.log(newArr);
};

initArr(0, 5); // [0, 0, 0, 0, 0]

console.log("-----------");

// 18 //
console.log("ข้อ 18");

const arr18 = [
  [1, 2, 3],
  [100, 200],
  [10, 20],
];

const flatMap = (arr) => {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(...arr[i]);
    //* concat [1,2,3] (index0) , [100,200] (index1) , [10,20] (index2) together
  }
  console.log(newArr);
};
flatMap(arr18);

console.log("-----------");

//? 19 //
console.log("ข้อ 19");
const arr19 = [
  [1, 2, 3],
  [100, 200],
  [10, 20],
];

const mapMean = (arr) => {
  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    let inner = arr[i];
    //? inner?
    let sum = 0;

    for (j = 0; j < inner.length; j++) {
      //? ดูยังไงว่าต้องใช้ inner.length / inner[j]
      sum = sum + inner[j];
    }
    let mean = sum / inner.length;
    newArr.push(mean);
  }
  console.log(newArr);
};

mapMean(arr19);

console.log("-----------");

// ?????? 20 //
console.log("ข้อ 20");

// const fib = (n) => {
//   let x = 0;
//   for (i = 0; i < n + 1; i++) {
//     x[i] = x[i - 1] + x[i - 2];
//   }
//   console.log(x);
// };

const fib = (n) => {
  const memorizedResult = [0, 1];
  for (let i = 2; i < n; i++)
    memorizedResult.push(memorizedResult[i - 1] + memorizedResult[i - 2]);
  return memorizedResult;
};

console.log(fib(6));

console.log("-----------");

// 21 //
console.log("ข้อ 21");

const bar = "Bar";
const foo = "Foo";
const fooFire = "Foo🔥";
const fooFire2 = "🔥🔥🔥🔥🔥";

const toBytes = (s) => {
  let wordArray = s.split("");
  let final = [];
  for (i = 0; i < wordArray.length; i++) {
    if (s.charCodeAt(i) >= 0 && s.charCodeAt(i) <= 255) {
      final.push(s.charCodeAt(i));
    }
    //* ใช้การ continue ข้าม loop รอบที่ได้ >255
  }
  //* หรือแทนที่จะ split ใช้การ loop string แทน
  console.log(final);
};

toBytes(bar); // [ 66, 97, 114 ]
toBytes(foo); // [ 70, 111, 111 ]
toBytes(fooFire); // [ 70, 111, 111 ]
toBytes(fooFire2);

console.log("-----------");

// easy //
console.log("(Medium)");
// 1 //
console.log("ข้อ 1");
// MagNeg ลบที่มีค่ามากสุด
// MinPos บวกที่มีค่าน้อยสุด
const arrMed1 = [12, -13, 14, 4, 2, -1, -18];

const maxNegMinPos = (arr) => {
  let neg = [];
  let pos = [];
  for (i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (Math.sign(arr[i]) === -1) {
      neg.push(arr[i]);
    } else if (Math.sign(arr[i]) === 1) {
      pos.push(arr[i]);
    }
  }
  console.log(`MaxNeg ${Math.max(...neg)}`);
  console.log(`MinPos ${Math.min(...pos)}`);
};
maxNegMinPos(arrMed1);
// MaxNeg is -1
// MinPos is 2
//! ดูอีกวิธี ที่ไม่ใช่ Math.min / max
