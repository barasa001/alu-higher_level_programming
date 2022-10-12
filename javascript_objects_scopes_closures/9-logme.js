#!/usr/bin/node
#!/usr/bin/node
let allArg = 0;

exports.logMe = function (item) {
  console.log(allArg + ': ' + item);
  allArg++;
};
