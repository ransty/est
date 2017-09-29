/* Instance variables */
var xInput;
var yInput;
var xs1 = [];
var ys1 = [];
var ny = 0;
var nx = 0;
var count;
var sumX = 0.0;
var sumY = 0.0;
var sumY2;
var sumX2;
var sumXY;
var slope = 0.0;
var intercept;
var xFinal = [];
var yFinal = [];
var lineY1;
var lineY2;
var lineX1;
var workloadData = [];

/* Second screen variables */
var numIntervals;
var intervalLength;
var vo2max;
var workrate;
var oxygenRequired;
var bodyMass;
var maod = 0;
var totalTime = 180;
var O2req;
var xs2 = [];
var ys2 = [];
var vo2MaxValues = [];
var sex;
var maodMmean = 65;
var maodMsd = 11;
var maodFmean = 54;
var maodFsd = 9;

$(document).ready(function () {
    $('.x').keydown(function (e) {
        if (e.which === 13) {
            var index = $('.x').index(this) + 1;
            $('.x').eq(index).focus();
        }
    });

    $('.y').keydown(function (e) {
        if (e.which === 13) {
            var index = $('.y').index(this) + 1;
            $('.y').eq(index).focus();
        }
    });

    $('.y2').keydown(function (e) {
        if (e.which === 13) {
            var index = $('.y2').index(this) + 1;
            $('.y2').eq(index).focus();
        }
    });
});

/*
* Switches between screens
* Sets sex and bodymass entered on first screen
*/
function changeScreens() {
    
    var screen1 = document.getElementById("screen1");
    var screen2 = document.getElementById("screen2");
    var button = document.getElementById("move");
    if (screen1.style.display == 'inline') {
        sex = $('input[name="sex"]:checked').val();
        setMass(document.getElementById('bodymass').value);
        
        var title = document.getElementById("title");
        title.innerHTML = "Anaerobic capacity / MAOD (screen 2)";
        screen1.style.display = 'none';
        screen2.style.display = 'inline';
        button.value = "Previous Screen";
    } else {
        var title = document.getElementById("title");
        title.innerHTML = "Anaerobic capacity / MAOD (screen 1)";
        screen1.style.display = 'inline';
        screen2.style.display = 'none';
        button.value = "Next Screen";
    }
}

/*
* Takes Workload input from the HTML form
*/
function getList(htmlClass) {
    var check = 0;
    input = document.getElementsByClassName(htmlClass);
    for (var i = 0; i < input.length; i++) {
        if (!input[i].value) {
            check++;
        }
    }
    if (check == input.length) {
        throw new Error("No input values for X, nothing to be drawn.");
    } else if (htmlClass == 'x') {
        xs1 = copy(input);
    } else if (htmlClass == 'x2') {
        xs2 = copy(input);
    } else if (htmlClass == 'y') {
        ys1 = copy(input);
    } else if (htmlClass == 'y2') {
        ys2 = copy(input);
    }
}

/*
* Enables 'Next Screen' button on screen 1
*/
function freeButton() {
    // re-enables the button
    $("#nxtbtn").prop('disabled', false);
    $("#nxtbtn").removeClass('btn_gray');
    $("#nxtbtn").addClass('btn_green');
}

/*
* Removes invalid input, i.e blank spots
*/
function copy(input) {
    var temp = [];
    for (var index = 0; index < input.length; index++) {
        if (!input[index].value) {
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
    var maximum = -(Math.pow(2, 53) - 1);
    for (var i = 0; i < list.length; i++) {
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
    var minimum = Math.pow(2, 53) - 1;
    for (var i = 0; i < list.length; i++) {
        if (list[i] <= minimum) {
            minimum = list[i];
        }
    }
    return minimum
}

/*
* Clears the current screen graph and values using jQuery
*/
function clearGraph(string, button) {
    $("#" + string + "").empty();

    // Clears all variables
    if (string == 'graphS1') {
        xInput = 0;
        yInput = 0;
        xs1 = [];
        ys1 = [];
        ny = 0;
        nx = 0;
        count = 0;
        sumX = 0.0;
        sumY = 0.0;
        sumY2 = 0;
        sumX2 = 0;
        sumXY = 0;
        $("#xAxisLabel").text("");
        $("#yAxisLabel").text("");
        $("#results").text("");
        xFinal = [];
        yFinal = [];
        lineY1 = 0;
        lineY2 = 0;
        lineX1 = 0;
        lineX = 0;
        workloadData = [];

        if (button) {
            var xList = document.getElementsByClassName("x");
            var yList = document.getElementsByClassName("y");

            for (var i = 0; i < xList.length; i++) {
                xList[i].value = "";
                yList[i].value = "";
            }
        }


    } else if (string == 'graphS2') {
        vo2MaxValues = [];
        xs2 = [];
        ys2 = [];
        $("#xAxisLabel2").text("");
        $("#yAxisLabel2").text("");
        $("#results2").text("");
        // also clear percentile graph
        $("#graphS3").empty();

        if (button) {
            var xList = document.getElementsByClassName("x2");
            var yList = document.getElementsByClassName("y2");

            for (var i = 0; i < xList.length; i++) {
                xList[i].value = "";
                yList[i].value = "";
            }
        }
    }

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
* Button call from HTML, starts getting data from form
*/
function s1Input() {
    if (document.getElementById('bodymass').value == "") {
        alert("Please enter a body mass (kg)");
        throw new Error("Please enter a body mass");
    }
    clearGraph('graphS1', false);
    getList('x');
    getList('y');
    // get the sum of xgrabInput
    sumX = sum(xs1);
    // get the sum of y
    sumY = sum(ys1);
    // get the multiplication sum of x[i] * x[i]
    sumX2 = multiplySum(xs1, xs1);
    // get the multiplication sum of x[i] * y[i]
    sumXY = multiplySum(xs1, ys1);
    // sum of y * y
    sumY2 = multiplySum(ys1, ys1);
    // calculate the slope of the regression line
    slope = (xs1.length * sumXY - sumX * sumY) / (xs1.length * sumX2 - sumX * sumX);
    // calculate the x intercept for the regression line
    intercept = (sumY - slope * sumX) / xs1.length;
    // get the maximum x value
    lineX2 = getMaximumValue(xs1);
    // get the minimum x value
    lineX1 = getMinimumValue(xs1);
    // get the maximum value of y
    maxY = getMaximumValue(ys1);
    // calculate the regression of 0
    lineY1 = regression(0);
    // calculate the regression of the maximum x value
    lineY2 = regression(lineX2);
    // set dataset for the scatter-dots
    for (var i = 0; i < xs1.length; i++) {
        workloadData.push([xs1[i], ys1[i]]);
    }
    if (xs1.length != ys1.length) {
        alert("X list does not match the Y list");
    } else {
        count = xs1.length;
    }
    firstGraph();
    freeButton();
}

/*
* Draw a chart (line regression) and display information
* like x-intercept, y-intercept, slope etc
*/
function firstGraph() {
    var margin = { top: 20, right: 20, bottom: 20, left: 50 }
        , width = 700 - margin.left - margin.right
        , height = 500 - margin.top - margin.bottom;

    /* Determines start & end X&Y coordinates to plot line within bounds of axis */
    var xP1;
    var yP1;
    if (intercept >= 0){
        xP1 = 0;
        yP1 = lineY1;
    } else {
        xP1 = (-intercept/slope);
        yP1 = 0;
    };
    
    
    /* Start and end X & Y coordinates for regression line plotted on graph*/
    var lineData = [{
        'x': xP1,
        'y': yP1
    }, {
        'x': lineX2,
        'y': lineY2
    }];
    
    var data = workloadData;

    var x = d3.scale.linear()
        .domain([0, lineX2 + 5])
        .range([0, width]);

    var y = d3.scale.linear()
        .domain([0, 5])
        .range([height, 0]);


    var chart = d3.select('#graphS1')
        .append('svg:svg')
        .attr('width', width + margin.right + margin.left)
        .attr('height', height + margin.top + margin.bottom)
        .attr('class', 'chart')

    var main = chart.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .attr('width', width)
        .attr('height', height)
        .attr('class', 'main')


    // Draw the X-axis
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom')
        .innerTickSize(-height)
        .outerTickSize(0)
        .tickPadding(10);


    main.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .attr('class', 'main axis date')
        .call(xAxis);

    // Draw the Y-axis
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left')
        .innerTickSize(-width)
        .outerTickSize(0)
        .tickPadding(10);


    main.append('g')
        .attr('transform', 'translate(0,0)')
        .attr('class', 'main axis date')
        .call(yAxis);

    // Draw line on right-side of graph
    var yAxisRight = d3.svg.axis().outerTickSize(0).scale(y).orient("right").ticks(0);
    main.append("g").attr("class", "y axis").attr("transform", "translate(" + width + ", 0)").call(yAxisRight);

    var g = main.append("svg:g");

    g.selectAll("scatter-dots")
        .data(data)
        .enter().append("svg:circle")
        .attr("cx", function (d, i) { return x(d[0]); })
        .attr("cy", function (d) { return y(d[1]); })
        .attr("r", 5, 5)
        .append("svg:title") // tooltip with x , y coord
        .text(function (d) {
            return d;
        });

    var lineFunc = d3.svg.line()
        .x(function (d) {
            return x(d.x);
        })
        .y(function (d) {
            return y(d.y);
        })
        .interpolate('linear');
    g.append('svg:path')
        .attr('d', lineFunc(lineData))
        .attr('stroke', 'red')
        .attr('stroke-width', 2)
        .attr('fill', 'none')
        .append("svg:title") // tooltip
        .text(function (d) {
            return "Y-Intercept: " + intercept + ", Slope: " + slope;
        });


    // Results and labels to display on graph
    $("#results").html("<div>R&sup2;= " + correlation() + ", Y = " + Math.round(slope * 1000) / 1000 + "X + " + Math.round(intercept * 1000) / 1000 + "</div>");
    $("#xAxisLabel").text("Workload");
    $("#yAxisLabel").text("V02 Max (L/Min)");
}

/*
* Button call from HTML, starts getting data from form
*/
function s2Input() {
    
    reqSpeed();
    clearGraph('graphS2', false);
    getList('x2');
    getList('y2');

    for (var i = 0; i < xs2.length; i++) {
        vo2MaxValues[i] = { 'x': xs2[i], 'y': ys2[i] };
    }

    secondGraph();
}

/*
* Draws graph for second screen
*/
function secondGraph() {
    var margin = { top: 20, right: 20, bottom: 20, left: 50 }
        , width = 700 - margin.left - margin.right
        , height = 500 - margin.top - margin.bottom;

    var x = d3.scale.linear()
        .domain([0, 180])
        .range([0, width]);

    var y = d3.scale.linear()
        .domain([0, 6])
        .range([height, 0]);;

    var chart = d3.select('#graphS2')
        .append('svg:svg')
        .attr('width', width + margin.right + margin.left)
        .attr('height', height + margin.top + margin.bottom)
        .attr('class', 'chart')

    var main = chart.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .attr('width', width)
        .attr('height', height)
        .attr('class', 'main')

    // Draw the X-axis
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom')
        .ticks(5)
        .tickValues(d3.range(0, width, 15))
        .innerTickSize(-height)
        .outerTickSize(0)
        .tickPadding(10);

    main.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .attr('class', 'main axis date')
        .call(xAxis);

    // Draw the Y-axis
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left')
        .innerTickSize(-width)
        .outerTickSize(0)
        .tickPadding(10);

    main.append('g')
        .attr('transform', 'translate(0,0)')
        .attr('class', 'y axis')
        .call(yAxis);

    // Draw line on right-side of axis
    var yAxisRight = d3.svg.axis().outerTickSize(0).scale(y).orient("right").ticks(0);
    main.append("g").attr("class", "y axis").attr("transform", "translate(" + width + ", 0)").call(yAxisRight);

    var g = main.append("svg:g");

    var maodarea = [{
        'x': intervalLength * ys2.length,
        'y': O2req
    }];

    g.selectAll(".bar2")
        .data(maodarea)
        .enter().append("rect")
        .attr("class", "bar2")
        .attr("x", 0)
        .attr("y", function (d) { return y(d.y); })
        .attr("width", function (d) { return x(d.x); })
        .attr("height", function (d) { return height - y(d.y); });

    g.selectAll(".bar")
        .data(vo2MaxValues)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) { return x(d.x - intervalLength); })
        .attr("y", function (d) { return y(d.y); })
        .attr("width", width / numIntervals)
        .attr("height", function (d) { return height - y(d.y); });

    var lineData = [{
        'x': 0,
        'y': O2req
    }, {
        'x': 180,
        'y': O2req
    }];

    var lineFunc = d3.svg.line()
        .x(function (d) {
            return x(d.x);
        })
        .y(function (d) {
            return y(d.y);
        })
        .interpolate('linear');
    g.append('svg:path')
        .attr('d', lineFunc(lineData))
        .attr('stroke', 'red')
        .attr('stroke-width', 2)
        .attr('fill', 'none');

    g.append("text")
        .attr("transform", "translate(5," + y(lineData[1].y + 0.2) + ")")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", "red")
        .text("Oxygen Required " + (vo2max * workrate / 100) + " (L/min)");

    calcMAOD();

    // Results and label to display on graph
    $("#results2").text("MOAD: " + maod + " (mL/kg O2");
    $("#xAxisLabel2").text("Time Interval (s)");
    $("#yAxisLabel2").text("V02 Max (L/Min)");
}


/*
* Calculates the R Squared value of the line
* (Coefficient of Expression)
*/
function correlation() {
    var result = 0;
    var r1 = count * sumXY - (sumX * sumY);
    var r2 = Math.sqrt((count * sumX2 - Math.pow(sumX, 2)) * (count * sumY2 - Math.pow(sumY, 2)));
    result = Math.pow((r1 / r2), 2);
    result = Math.round(result * 1000) / 1000;
    if (result < 0.8) {
        alert("Please review the data you entered, it has a weak correlation.");
    }
    return result;
}


function calcMAOD() {
    // Sum of deficit values
    var sumO2deficits = 0;
    // Number of intervals in a minute
    var intervalsPMinute = 0;
    intervalsPMinute = 60 / intervalLength;

    // Calculating sum of deficits
    for (var i = 0; i < ys2.length; i++) {
        sumO2deficits += (O2req - ys2[i]);
    }

    // Calculate deficit in one minute
    maod = (sumO2deficits / intervalsPMinute);
    // Convert MAOD from LO2 to mLO2
    maod = maod * 1000;
    // Convert MAOD from mLO2 to mLO2/kg
    maod = Math.round(maod / bodyMass * 10) / 10;

    percentileGraph();

}

/*
* Adjusts length of interval table for input based on time intervals set by user
*/
function adjIntervalTable(input) {
    if (((input.value <= totalTime) && (180 % input.value == 0)) && ((input.value % 10 == 0) || (input.value % 15 == 0))) {
        input.style.background = "white";
        var intervalList = document.getElementsByClassName('x2');
        var yList = document.getElementsByClassName('y2');
        intervalLength = parseInt(input.value);
        numIntervals = totalTime / intervalLength;
        for (var index = 0; index <= numIntervals; index++) {
            yList[index].value = "";
            intervalList[index].style.display = 'inline';
            yList[index].style.display = 'inline';
            intervalList[index].value = (index + 1) * input.value;
        }
        for (var i = numIntervals; i <= intervalList.length; i++) {
            yList[index].value = "";
            intervalList[i].style.display = 'none';
            yList[i].style.display = 'none';
        }
    } else {
        input.style.background = "red";
    }
}

/*
* Sets mass of patient
*/
function setMass(mass) {
    bodyMass = parseFloat(mass);
}

/*
* Calculates required speed based on supermax VO2 based on linear equation calculated in screen 1
*/
function reqSpeed() {
    vo2max = parseFloat(document.getElementById('Vmax').value);
    workrate = parseFloat(document.getElementById('supramaximal').value);
    O2req = vo2max * workrate / 100;

    reqwork = ((O2req - intercept) / slope);

    var d = document.getElementById('reqworkload');
    d.value = reqwork;
}

function percentileGraph() {
    var rank = calcPercentile(sex);
    
    var margin = { top: 20, right: 20, bottom: 20, left: 50 }
        , width = 185 - margin.left - margin.right
        , height = 300 - margin.top - margin.bottom;

    var x = d3.scale.linear()
        .domain([0, 1])
        .range([0, width]);

    var y = d3.scale.linear()
        .domain([0, 100])
        .range([height, 0]);

    var chart = d3.select('#graphS3')
        .append('svg:svg')
        .attr('width', width + margin.right + margin.left)
        .attr('height', height + margin.top + margin.bottom)
        .attr('class', 'chart')

    var main = chart.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .attr('width', width)
        .attr('height', height)
        .attr('class', 'main')

    // Draw the X-axis
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom')
        .ticks(0)
        .tickValues(0)
        .innerTickSize(0)
        .outerTickSize(0)
        .tickPadding(10);

    main.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .attr('class', 'main axis date')
        .call(xAxis);

    // Draw the Y-axis
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left')
        .innerTickSize(-width)
        .outerTickSize(0)
        .tickPadding(10);

    main.append('g')
        .attr('transform', 'translate(0,0)')
        .attr('class', 'main axis date')
        .call(yAxis);

    // Draw line on right-side of axis
    var yAxisRight = d3.svg.axis().outerTickSize(0).scale(y).orient("right").ticks(0);
    main.append("g").attr("class", "y axis").attr("transform", "translate(" + width + ", 0)").call(yAxisRight);

    var g = main.append("svg:g");

    var lineData = [{
        'x': 0,
        'y': rank
    }, {
        'x': 1,
        'y': rank
    }];

    var lineFunc = d3.svg.line()
        .x(function (d) {
            return x(d.x);
        })
        .y(function (d) {
            return y(d.y);
        })
        .interpolate('linear');
    g.append('svg:path')
        .attr('d', lineFunc(lineData))
        .attr('stroke', 'red')
        .attr('stroke-width', 2)
        .attr('fill', 'none');

    g.append("text")
        .attr("transform", "translate(5," + y(lineData[0].y + 2.7) + ")")
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", "red")
        .text(Math.round(rank * 100) / 100 + "%");
}

function calcPercentile(sex) {
    var mean;
    var sd;

    if (sex == "female") {
        mean = maodFmean;
        sd = maodFsd;
    } else {
        mean = maodMmean;
        sd = maodMsd;
    }
    
    // z == number of standard deviations from the mean
    var z = ((maod - mean)/sd);

    // If z is greater than 6.5 standard deviations from the mean
    // the number of significant digits will be outside of a reasonable 
    // range
    if ( z < -6.5) {
        return 0.0;  
    } else if( z > 6.5) {
        return 1.0;
    }      

    var factK = 1;
    var sum = 0;
    var term = 1;
    var k = 0;
    var loopStop = Math.exp(-23);
    
    while (Math.abs(term) > loopStop) {
        term = .3989422804 * Math.pow(-1,k) * Math.pow(z,k) / (2 * k + 1) / Math.pow(2,k) * Math.pow(z,k+1) / factK;
        sum += term;
        k++;
        factK *= k;
    }
    
    sum += 0.5;
    sum = sum * 100;
    return sum;

}
