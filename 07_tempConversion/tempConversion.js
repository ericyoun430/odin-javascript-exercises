const convertToCelsius = function(fTemp) {
  return +((fTemp - 32) * (5/9)).toFixed(1);
};

const convertToFahrenheit = function(cTemp) {
  return +(cTemp * (9/5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
