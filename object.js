/* pointer & heap */

/*
const person = {
  name: "John",
  age: 20,
  pet: {
    kind: "Dog",
    age: 2,
  },
};
console.log(person.pet.kind);

const keyName = "name";

console.log("ชื่อ =", person.name);
console.log("ชื่อ keyName =", person[keyName]);
*/
const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

/*
  ${function loop() {
    for (let i = 0; i < data.length; i++) {}
  }
}
*/
const loopData = data.map((value, index) => {
  //   console.log(value);

  const keyName = "name";
  const keyAge = "age";
  const keyJob = "job";
  const line = "-------------";

  //   console.log(`Person ${index + 1}
  //   Name: ${value[keyName]}
  //   Age: ${value[keyAge]}
  //   job: ${value[keyJob]}
  //   ${line}`);

  console.log(
    `Person ${index + 1}\nName: ${value[keyName]}\nAge: ${
      value[keyAge]
    }\njob: ${value[keyJob]}\n${line}`
  );
});

// console.log(data[0][keyName]);

// console.log(loopData);

// const reduceLoop = loopData.reduce((prevVal) => {
//   prevVal;
//   return prevVal;
// });

// console.log(reduceLoop);
// console.log(data[0].name);

// const dataReduce = data.reduce((x, y) => x + " " + y);
// console.log(dataReduce);
