// const add = function (a, b) {
//   return a + b;
// }

// const multiply = function (a, b) {
//   return a * b;
// }

// exports.add = add;
// exports.multiply = multiply;

/*
All of this is the same as doing

const add = function (a, b) {
  return a + b;
}

const multiply = function (a, b) {
  return a * b;
}

module.exports = {
  add,
  multiply,
}

---------------OR--------------------
exports.add = function (a, b) {
  return a + b;
}

exports.multiply = function (a, b) {
  return a * b;
}
*/

exports.add = function add(a, b) {
  return a + b;
}

exports.multiply = function multiply(a, b) {
  return a * b;
}