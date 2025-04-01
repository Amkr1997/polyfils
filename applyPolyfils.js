function printDetails(lastName, age) {
  console.log(`${this.fstName} ${lastName} is ${age} years old`);
}

const obj1 = {
  fstName: "Prateek",
};

Function.prototype.myApply = function (obj = {}, args) {
  if (typeof this !== "function") {
    throw new Error("Not Callable");
  }

  if (!Array.isArray(args)) {
    throw new Error("TypeError: CreateListFromArrayLike called on non-object");
  }

  obj.fn = this;
  const result = obj.fn(...args);
  delete obj.fn; // Need to delete the temporary function after execution from memory.
  return result;
};

printDetails.myApply(obj1, ["Singh", 23]);
