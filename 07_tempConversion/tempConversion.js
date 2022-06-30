const ftoc = function(temp) {
  let conv = Math.round((temp - 32) * (5/9) * 10) / 10;
  return conv;
};

const ctof = function(temp) {
  let conv = Math.round((temp * (9/5) + 32) * 10) / 10;
  return conv;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
