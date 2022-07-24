const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	let rslt = 0;
  for(i=0; i < arr.length; i++) {
    rslt += arr[i];
  }
  return rslt;
};

const multiply = function(arr) {
  let rslt = 1;
  for(i=0; i < arr.length; i++){
    console.log(arr[i]);
    rslt *=  arr[i];
  }
  return rslt;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let rslt=1, i;
  if(a === 0 || a === 1){
    return 1;
  } 
  for(i=2;i <= a; i++){
    rslt *= i;
  }
  return rslt;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
