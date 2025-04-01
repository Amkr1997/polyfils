function printName(age) {
  console.log(`${this.fstName} is ${age} years old`);
}

const obj = {
  fstName: "Aditya",
};

Function.prototype.myBind = function (obj = {}) {
  if (typeof this !== "function") {
    throw new Error("Not Callable");
  }

  obj.fn = this;

  // Passing argument in inner function because at the time of calling only we get argument via displayName func.
  return function (...args2) {
    obj.fn(args2);
  };
};

const displayName = printName.myBind(obj);
displayName(23);
