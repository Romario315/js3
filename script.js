"use strict";

let counter = (function () {
  let count = 0;
  return function (n) {
    count = n === undefined ? count : n;
    return count++;
  };
})();

let counting = (function () {
  let count = 0;

  return {
    value(num) {
      if (num !== undefined) count = num;

      return count;
    },
    decrement() {
      count--;
    },
    increment() {
      count++;
    },
  };
})();

let myPrint = (a, b, myPrint) => `${a}^${b}=${myPrint}`;
let myPow = (a, b, cb) => {
  let pow = (x, n) => {
    if (n !== 1) return (x *= pow(x, n - 1));
    return x;
  };
  return cb(a, b, pow(a, b));
};

console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8

function fullInfo() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}

let yearNow = new Date().getFullYear();
let car = {
  engine: 2000,
  model: "Lacetti",
  name: "Chevrolet",
  year: 2010,
  info: fullInfo,
  get used() {
    return this.year !== yearNow ? "used" : "new";
  },
  set used(value) {
    if (value === "new" && this.year < yearNow) this.year = yearNow;
  },
};
let car2 = {
  engine: 5000,
  model: "FX50 AWD",
  name: "Infinite",
  year: 2019,
  info: fullInfo,
  get used() {
    return yearNow - this.year ? "used" : "new";
  },
  set used(value) {
    if (value === "new" && this.year < yearNow) this.year = yearNow;
  },
};

let myMax = (arg) => Math.max.apply(Math, arg);
let list = [12, 23, 100, 34, 56, 9, 233];
console.log(myMax(list));

let myNull = (a, b) => a * b;
let myDouble = myNull.bind(null, 2);
console.log(myDouble(3));
let myTriple = myNull.bind(null, 3);
console.log(myTriple(3));

let myUniq = (arr) => {
  let set = new Set();
  arr.forEach((val) => {
    set.add(val);
  });

  return set;
};
let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
console.log(myUniq(notUniqNums));
