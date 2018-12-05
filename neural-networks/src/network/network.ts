
const A = require('./algebra');

class Network {
  num_layers: number;
  sizes: number[];
  constructor(sizes: number[]) {
    this.num_layers = sizes.length;
    this.sizes = sizes;
    this.biases = sizes.map(x => A.r);
  }
}

