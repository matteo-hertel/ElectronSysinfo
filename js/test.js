var memory =  new MemoryUsage();
var data = ['data1'];
var counter = 0;
var d3 = require(__dirname + "/bower_components/d3/d3.min.js");
var c3 = require(__dirname + "/bower_components/c3/c3.min.js");
var chart = c3.generate({
bindto: '#output',
data: {
  columns: [
    data
],
names: {
        "data1": '% RAM used'
    }
},
axis: {
    y: {
        max: 100,
        min: 0
    }
}

});

setInterval(function(){
if(data.length > 10){
    data.shift();
    data.shift();
    data.unshift("data1");
}

data.push(memory.getUsedPercentage());
chart.load({
columns: [
data
]
});

}, 1000);
