const genRandomNumber = function* (count) {
  for (i = 0; i < count; i++) {
    yield 2 * Math.random() - 1;
  }
};

const randnGen = function* (...dn) {
  if (!dn || !dn.length) throw Error('no dimensions passed in function');

  if (dn[0].length === 1) yield genRandomNumber(dn[0][j]);
  return;
  for (var j = 0; j < dn[0].length; j++) {
    yield genRandomNumber(dn[0][j]);
  }
};

const randn = (...dn) => Array.from(randnGen(dn));

randn(1) //?

Array.from(genRandomNumber(11)); //?
module.exports = {
  randn,
};