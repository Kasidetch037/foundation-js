/* 
ฟช ที่รับฟช เป็นพารามิเตอ func as parameter
แทนที่จะส่งตัวแปรไปเป็น argu เราส่ง func ไปแทน
ส่ง ฟช เข้าไปเป็น พารา ของอีก ฟช นึง
*** anon function
*/

// func as para
function callMe() {
  console.log(`hello from callback function`);
}

// รับพารา1ตัว ชื่อ callback
function greeting(callback) {
  console.log(`hello world`);
  //เอา argument ไป invoke func
  callback();
}
// นำฟช callMe ไปเป็น argu ใน ฟช greeting
greeting(callMe);

//output จะขึ้นของ greeting ก่อน bc invoke greeting ละค่อยทำตัวพารา (callMe)
console.log("----------");
/*
pass anonymous func ก้คือเรียกฟช แล้วแทนที่จะใช้พาราเป็นฟช ก้เขียนเป็นฟชเข้าไปเลย ไม่ต้องประกาศฟชแยก และไม่ต้องตั้งชื่อ
แบบนี้ไม่ได้
function () {
  console.log(`hello`);
}
*/

greeting(function () {
  console.log("calling anon func");
});

console.log("----------");
/*
//para
const baht = () => {
  console.log("baht");
};

//main
const price = (money) => {
  console.log(10 + baht());
  money();
};
price(baht);
price(1);
*/
console.log("----------");

//cb func with para
const greeting2 = (callback) => {
  console.log("hello");
  callback("555");
};
//anon func
greeting2((name) => {
  console.log(`hello from ${name}`);
});

console.log("----------");

// const origianlArr = [1, 2, 3, 4];

// const loopArray = (arr, cb) => {
//   for (let i = 0; i < arr.lenght; i++) {
//     cb(arr[i]);
//   }
// };
// loopArray(origianlArr, (item) => {
//   console.log(item);
// });
// loopArray(1, 2);
//

const origianlArr = [1, 2, 3, 4];
const mapArray = (arr, cb) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i]);
    result.push(newItem);
  }
  return result;
};

const newArr = mapArray(origianlArr, (item) => {
  return item * 2;
});
console.log(newArr);
// console.log(origianlArr);

console.log("----------");
//////////////
// * Exercise: Create a function called "filterArray" to filter only positive number
// * 1. This function receive 2 parameters, arr and cb.
// * 2. cb function must receive 1 parameter, which is each item from the array
// * 3. cb must return only boolean, if it return true, keep that item, otherwise, don't keep it.
// * 4. filterArray must return a new array that keeps all true items
//////////////

function filterArray(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i]);
    // * fill here
    // if (isKeeping > 0) {
    //   result.push(arr[i]);
    // }
    if (isKeeping === true) {
      // ที่ไม่ push isKeeping เพราะ ไม่ได้จะเอาตัวใหม่ จะเอาตัวเดิม (arr[i])
      result.push(arr[i]);
    }
  }

  return result;
}

const beforeFilter = [-1, 3, 20, -24];

const afterFilter = filterArray(beforeFilter, (item) => {
  // return item;
  return item > 0;
});

console.log(afterFilter);

console.log("----------");

function filterArray2(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i]);
    // * fill here
    if (isKeeping > 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

const beforeFilter2 = [-1, 3, 20, -24];

const afterFilter2 = filterArray(beforeFilter2, (item) => {
  return item;
});

console.log(afterFilter2);
