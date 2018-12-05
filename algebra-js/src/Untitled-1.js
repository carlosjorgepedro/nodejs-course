const myFunc = function* (n) {
  for (i = 0; i < n; i++) {
    yield 2 * Math.random() - 1;
  }
};

Array.from( myFunc(10))//?


