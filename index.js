var sieveArray = require('sieve-of-eratosthenes');

module.exports = function (max) {
  return sieveArray(max + 1).reduce(function (obj, value) {
    obj[value] = true;
    return obj;
  }, {});
};
