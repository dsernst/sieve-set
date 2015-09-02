var sieveArray = require('sieve-of-eratosthenes');

module.exports = function (max) {
  return sieveArray(max).reduce(function (obj, value) {
    obj[value] = true;
    return obj;
  }, {});
};
