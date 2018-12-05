const randn = (dn: Array<number>) => {
  return dn.map(x => [...new Array(x)].map(_ => Math.random()));
};

class MatrixH {
  public static randomMatrix(dimensions: Array<number>): Array<Array<number>> {
    return dimensions.map(x => [...new Array(x)].map(_ => Math.random()));
  }
}

module.exports = {
  MatrixH
};

