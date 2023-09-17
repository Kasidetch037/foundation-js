// * Create a function called updateAddress that receive 2 arguments, obj that refers to a person object, and newAddress that is a new value for address. This function should return a new person object with a new address.

const person = {
  name: "John",
  age: 20,
  address: "Rama 2",
};

const updateAddress = (obj, newAddress) => {
  //   const clonePerson = { ...obj };
  //   const newHome = { address: newAddress };
  //   return { ...clonePerson, ...newHome };
  return {
    ...obj,
    /* ...obj คือ {name: "John",
                  age: 20,
                  address: "Rama 2"}*/
    address: newAddress, //overwrite ppty address
  };
};

const personWithNewAddress = updateAddress(person, "Rama 9");

console.log(personWithNewAddress);
// * Expected output
// * { name: "John", age: 20, address: "Rama 9" }
