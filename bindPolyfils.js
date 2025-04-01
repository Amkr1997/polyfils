function printName(age, year) {
  console.log(`${this.fstName} is ${age} years old ${year} born`);
}

const obj = {
  fstName: "Aditya",
};

Function.prototype.myBind = function (obj = {}, ...args1) {
  if (typeof this !== "function") {
    throw new Error("Not Callable");
  }

  obj.fn = this;

  // Passing argument in inner function because at the time of calling only we get argument via displayName func.
  return function (...args2) {
    obj.fn(...args1, ...args2);
  };
};

const displayName = printName.myBind(obj, 26);
displayName(1998);
