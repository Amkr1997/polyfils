function printDetails(age) {
  console.log(`${this.name} is ${age} years old`);
}

const obj1 = {
  name: "Raj",
};

Function.prototype.myCall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not Callable");
  }

  //console.log(args); // argument sent via rest parameter.

  obj.fn = this; // creating a property "fn" and refering to the this which is printDetails function
  const result = obj.fn(...args); // calling via passing arguments to fn (to printDetails function)
  delete obj.fn; // Need to delete the temporary function after execution from memory.
  return result;
};

printDetails.myCall(obj1, 23); // calling myCall function via passing object and other argument
