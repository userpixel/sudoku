function isValidCh(ch) {
  if (typeof ch !== 'string') {
    throw `Invalid type: ${typeof ch}`;
  }
  if (ch.length !== 1) {
    throw `"${ch}" is not exactly one character`;
  }
  if (/[1-9\s]/.test(ch)) {
    return true;
  } else {
    throw `Invalid character: "${ch}"`;
  }
}

class Checker {
  constructor() {
    this.values = [];
  }

  add(ch) {
    if (ch === ' ') {
      return;
    }
    if (this.values.some( v => v === ch)) {
      throw `already exists ${ch}`;
    }
    this.values.push(ch);
  }

  hasAllDigits() {
    throw 'not implemented';
  }

  whatIsMissing() {
    throw 'not implemented 2';
  }
}

class Board {
  constructor() {
    this.cells = [];
    for (let r = 0;r < 9; r++) {
      let currentRow = [];
      this.cells.push(currentRow);
      for (let x = 0; x < 9; x++) {
        currentRow[x] = ' ';
      }
    }
  }

  toString() {
    var ret = [];
    for (let y = 0;y < 9; y++) {
        ret.push(this.cells[y].join(' '));
    }
    return ret.join('\n');
  }

  setCells(...rows) {
    for (let r = 0; r < 9; r++) {
      for (let x = 0; x < 9; x++) {
        this.cells[r][x] = rows[r].charAt(x);
      }
    }
  }

  checkLines() {
    for (let r = 0; r < 9; r++) {
      var checker = new Checker;
      for (let x = 0; x < 9; x++) {
        checker.add(this.cells[r][x]);
      }
    }
    return true;
  }
}

console.log(isValidCh('11'));
var b = new Board;
console.log(b.checkLines());
b.setCells(
  '    27  8',
  ' 3   826 ',
  ' 8  463 7',
  '6  28    ',
  '5  7  48 ',
  '2  7  48 ',
  '  5 7  4 ',
  '8 1  372 ',
  '  78546  '
)
console.log(b.toString());
