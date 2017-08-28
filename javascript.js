var xInput;
var yInput;
var x = [];
var y = [];
var ny = 0;
var nx = 0;
var count;
var sumX = 0;
var sumY = 0;
var sumX2;
var sumXY;
var slope;
var intercept;
var xFinal = [];
var yFinal = [];

function getWorkloadValues() {
  xInput = document.getElementsByClassName("x");
  x = copy(xInput);
}

function getV02MaxValues() {
  yInput = document.getElementsByClassName("y");
  y = copy(yInput);
}

function copy(input) {
  var temp = [];
  for (var index = 0; index < input.length; index++) {
    if (input[index].value == "") {
      continue;
    }
    temp[index] = input[index].value;
  }
  return temp;
}

function grabInput() {
  getWorkloadValues();
  getV02MaxValues();
  sumX = sum(x);
  sumY = sum(y);
  sumX2 = multiplySum(x, x);
  sumXY = multiplySum(x, y);
}

function multiplySum(x, y) {
  var sum = 0;
  for (var index = 0; index < x.length; index++) {
    sum += x[index] * y[index];
  }
  return sum;
}

function sum(input) {
  var sum = 0;
  for (var i = 0; i < input.length; i++) {
    sum += parseInt(input[i].value);
  }
  return sum;
}
