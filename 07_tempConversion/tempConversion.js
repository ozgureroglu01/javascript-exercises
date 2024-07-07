const convertToCelsius = function (num) {
  const c = (num - 32) * 5 / 9;
  return Math.round(c * 10) / 10;
};

const convertToFahrenheit = function (num) {
  const f = (9 / 5 * num) + 32;
  return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
