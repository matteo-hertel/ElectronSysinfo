module.exports = {
    setUpChart: function(memory) {
        var d3 = require(__dirname + "/../../../bower_components/d3/d3.min.js");
        var c3 = require(__dirname + "/../../../bower_components/c3/c3.min.js");
        return c3.generate({
            bindto: '#chartOutput',
            data: {
                columns: [
                    ["data1", memory]
                ],
                names: {
                    "data1": '% RAM used'
                },
                type: 'bar'
            },
            type: 'bar',
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
            },
            axis: {
                y: {
                    max: 100,
                    min: 0
                }
            }

        });
    }
};
