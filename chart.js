/* Instance variables */
var xInput;
var yInput;
var x = [];
var y = [];
var ny = 0;
var nx = 0;
var count;
var sumX = 0.0;
var sumY = 0.0;
var sumX2;
var sumXY;
var slope = 0.0;
var intercept;
var xFinal = [];
var yFinal = [];
var lineY1;
var lineY2;
var lineX1 = 9999999;
var lineX2 = 0;
var maxY = 0;
var dataset = [];

/*
* Takes Workload input from the HTML form
*/
function getWorkloadValues() {
  xInput = document.getElementsByClassName("x");
  x = copy(xInput);
}

/*
* Takes the V02 (L/min) values from the HTML form
*/
function getV02MaxValues() {
  yInput = document.getElementsByClassName("y");
  y = copy(yInput);
}

/*
* Removes invalid input, i.e blank spots
* TODO: More error checking, this isn't sufficient enough for the program
*/
function copy(input) {
  var temp = [];
  for (var index = 0; index < input.length; index++) {
    if (input[index].value == "") {
      continue;
    }
    temp[index] = parseFloat(input[index].value);
  }
  return temp;
}

/*
* Gets the maximum value from an array of floats
*/
function getMaximumValue(list) {
  var maximum = -99999;
  for ( var i = 0; i < list.length; i++ ) {
    if (list[i] >= maximum) {
      maximum = list[i];
    }
  }
  return maximum;
}

/*
* Gets the minimum value from an array of floats
*/
function getMinimumValue(list) {
  var minimum = 99999;
  for ( var i = 0; i < list.length; i++ ) {
    if (list[i] <= minimum) {
      minimum = list[i];
    }
  }
  return minimum
}

/*
* Button call from HTML, starts getting data from form
*/
function grabInput() {
  getWorkloadValues();
  getV02MaxValues();
  // get the sum of x
  sumX = sum(x);
  // get the sum of y
  sumY = sum(y);
  // get the multiplication sum of x[i] * x[i]
  sumX2 = multiplySum(x, x);
  // get the multiplication sum of x[i] * y[i]
  sumXY = multiplySum(x, y);
  // calculate the slope of the regression line
  slope = (x.length * sumXY - sumX * sumY) / (x.length * sumX2 - sumX * sumX);
  // calculate the x intercept for the regression line
  intercept = (sumY - slope * sumX) / x.length;
  // get the maximum x value
  lineX2 = getMaximumValue(x);
  // get the minimum x value
  lineX1 = getMinimumValue(x);
  // get the maximum value of y
  maxY = getMaximumValue(y);
  // calculate the regression of 0
  lineY1 = regression(0);
  // calculate the regression of the maximum x value
  lineY2 = regression(lineX2);
  // set dataset for the scatter-dots
  for (var i = 0; i <  x.length; i++) {
     dataset.push([x[i], y[i]]);
  }
  InitChart();
}

/*
* Calculates the x[i] * y[i] sum
*/
function multiplySum(x, y) {
  var sum = 0;
  for (var index = 0; index < x.length; index++) {
    sum += x[index] * y[index];
  }
  return sum;
}

/*
* Calculates the sum of an array of float values
*/
function sum(input) {
  var sum = 0;
  for (var i = 0; i < input.length; i++) {
    sum += parseFloat(input[i]);
  }
  return sum;
}

/*
* Calculates the regression of x; where x is an array of float values
*/
function regression(x) {
  return (slope * x) + intercept;
}

/*
* Draw a chart (line regression) and display information
* like x-intercept, y-intercept, slope etc
*/
function InitChart() {
  var margin = {top: 20, right: 20, bottom: 20, left: 50}
        , width = 700 - margin.left - margin.right
        , height = 500 - margin.top - margin.bottom;

  var lineData = [{
    'x': lineX1,
    'y': lineY1
  }, {
    'x': lineX2,
    'y': lineY2
  }];

  var data = dataset;

  var margin = {top: 20, right: 20, bottom: 20, left: 50}
        , width = 700 - margin.left - margin.right
        , height = 500 - margin.top - margin.bottom;

      var x = d3.scale.linear()
                .domain([0, lineX2 + 5])
                .range([ 0, width ]);

      var y = d3.scale.linear()
      	      .domain([0, maxY + 5])
      	      .range([ height, 0 ]);;


      var chart = d3.select('#visualisation')
  	.append('svg:svg')
  	.attr('width', width + margin.right + margin.left)
  	.attr('height', height + margin.top + margin.bottom)
  	.attr('class', 'chart')

      var main = chart.append('g')
  	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  	.attr('width', width)
  	.attr('height', height)
  	.attr('class', 'main')

      // draw the x axis
      var xAxis = d3.svg.axis()
  	.scale(x)
  	.orient('bottom');

      main.append('g')
  	.attr('transform', 'translate(0,' + height + ')')
  	.attr('class', 'main axis date')
  	.call(xAxis);

      // draw the y axis
      var yAxis = d3.svg.axis()
  	.scale(y)
  	.orient('left');

      main.append('g')
  	.attr('transform', 'translate(0,0)')
  	.attr('class', 'main axis date')
  	.call(yAxis);

      var g = main.append("svg:g");

      g.selectAll("scatter-dots")
        .data(data)
        .enter().append("svg:circle")
            .attr("cx", function (d,i) { return x(d[0]); } )
            .attr("cy", function (d) { return y(d[1]); } )
            .attr("r", 5,5)
            .append("svg:title") // tooltip with x , y coord
            .text(function(d) {
              return d;
            });

      var lineFunc = d3.svg.line()
           .x(function(d) {
             return x(d.x);
           })
           .y(function(d) {
             return y(d.y);
           })
           .interpolate('linear');
              g.append('svg:path')
           .attr('d', lineFunc(lineData))
           .attr('stroke', 'red')
           .attr('stroke-width', 2)
           .attr('fill', 'none')
           .append("svg:title") // tooltip
           .text(function(d) {
             return "X-Intercept: " + intercept + ", Slope: " + slope;
           });

           // now lets write all important data to p
           $("#datagrab").text("Y-Intercept: " + intercept + ", Slope: " + slope + ", R^2: TODO, Equation: Y = " + slope + "*X + " + intercept);
}

/*
* Clears the graph (jQuery)
* NOTE: jQuery must be loaded before this script for this to work
*/
function clearGraph() {
  $("#visualisation").empty();
}
