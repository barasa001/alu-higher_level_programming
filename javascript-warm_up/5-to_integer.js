#!/usr/bin/node
const newInt = parseInt(process.argv[2]);
if (newInt.isNaN(newInt)) {
  console.log('Not a number');
} else {
  console.log('My number: '+ process.argv[2]);
}
