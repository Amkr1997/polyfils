const arr = [1, 2, 3, 4, 5, 6, 2, 3, 4];

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  let initialIndex = 0;

  if (arguments.length < 2) {
    acc = this[0];
    initialIndex = 1;
  }

  for (let i = initialIndex; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }

  return acc;
};

const result = arr.myReduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;

  return acc;
}, {});

console.log(result);
