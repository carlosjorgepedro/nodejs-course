const M = require('mathjs');
const Rx = require('rxjs');
import { map, filter, switchMap } from 'rxjs/operators';

const randn = (...dn: number) => {
  const arr = [];
  for (var k = 0; k < dn.length; k++) {
    console.log(dn[k]);
    var dimArr = [];
    for (var i = 0; i < dn[k]; i++) {
      dimArr.push(M.random());
    }

    arr.push(dimArr);
  }

  return arr;
};

module.exports = {
  randn,
};
