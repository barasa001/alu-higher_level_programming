#!/usr/bin/node
const args = process.argv;
if (args != null); {
  console.log(args[2]);
} else {
  console.log('No argument');
}
