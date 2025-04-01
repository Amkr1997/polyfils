const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.myFilter = function (cb) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

const res = arr.myFilter((cb) => cb % 2 !== 0);
console.log(res);
