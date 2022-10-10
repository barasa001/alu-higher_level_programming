#!/usr/bin/node
const theSquare = parseInt(process.argv[2]);
if (Number.isNaN(theSquare)) {
  console.log('Missing size');
} else {
  for (let i = 0, s; i < theSquare; i++) {
    s = '';
    for (let j = 0; j < theSquare; j++) {
      s += 'X';
    }
    console.log(s);
}
