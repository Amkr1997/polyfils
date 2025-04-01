const arr = [1, 2, 3, 4, 5, 6];

function cb(el) {
  console.log(el);
}

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

arr.myForEach(cb);
