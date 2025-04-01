const arr = [1, 2, 3, 4, 5, 6];

// function cb(el) {
//   return el * 3;
// }

Array.prototype.myMap = function (cb) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }

  return newArr;
};

console.log(arr.myMap((cb) => cb * 2));
// console.log("old array: ", arr);
