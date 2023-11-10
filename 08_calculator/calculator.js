const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(input) {
	return input.reduce((accum,item) => accum+item,0);
};

const multiply = function(input) {
  return input.reduce((accum,item) => accum*item,1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(input) {
	let total = 1;
  for (input; input > 0; input--) {
    total*=input;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
