module.exports = {
    convertTo: function(size, type) {
        switch (type) {
            case "KB":
                return parseInt(size) / 1024;

            case "MB":
                return parseInt(size) / 1024 / 1024;

            case "GB":
                return parseInt(size) / 1024 / 1024 / 1024;

            default:
                return size;

        }
    },
    setUpChart: function(memory) {
        var d3 = require(__dirname + "/../bower_components/d3/d3.min.js");
        var c3 = require(__dirname + "/../bower_components/c3/c3.min.js");
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
