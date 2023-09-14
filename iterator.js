// (value , index , array)

// forEach *ไม่ return value //
const alphb = ["a", "b", "c", "d", "e", "f"];
alphb.forEach((value, indexx) => {
  console.log(value, indexx);
});

const price = [100, 245, 700, 54, 3999];

// map //
console.log("MAP");

const priceUp25perc = price.map((raka, productNum) => {
  const pricesss = raka * 0.25 + raka;
  return console.log(`ของชิ้นที่ ${productNum + 1} ราคา ${pricesss}`);
});
console.log(priceUp25perc);

const priceDown37perc = price.map((raka, productNum) => {
  const pricesss = raka - raka * 0.37;
  return console.log(`ของชิ้นที่ ${productNum + 1} ราคา ${pricesss}`);
});
console.log(priceDown37perc);

// filter //
console.log("FILTER");
const expensive = price.filter((raka, productNum) => {
  const expensiveThings = raka > 500;
  return console.log(`ของแพงชิ้นที่ ${productNum + 1} ราคา ${expensiveThings}`);
});
console.log(expensive);

// reduce //
console.log("REDUCE");
/*
const sumPrice = price.reduce((prevVal, curVal) => {
  //   const sum = prevVal + curVal;
  //   return console.log(`มีของ ${price.length} ชิ้น ราคารวม ${sum}`);
  return prevVal + curVal;
});
// console.log(sumPrice);
*/

const sumPrice = () => {
  price.reduce((prevVal, curVal) => {
    //   const sum = prevVal + curVal;
    //   return console.log(`มีของ ${price.length} ชิ้น ราคารวม ${sum}`);
    return prevVal + curVal;
  });
};

const cbLog = (callback) => {
  console.log(`มีของ ${price.length} ชิ้น ราคารวม ${callback}`);
  callback();
};
// sumPrice(cbLog);
console.log(sumPrice);
