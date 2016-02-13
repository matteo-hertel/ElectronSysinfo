/* globals Vue */

module.exports = function(Vue) {
    var Helper = require(__dirname + "/Helper.js");
    var OS = require(__dirname + "/../../Helpers/OS.js");
    var chart = null;
    Vue.component("ram-chart", {
        template: require(__dirname + "/views/ramChartView.js")(),
        data: function() {
            return {
                percentageMemory: 0
            };
        },
        methods: {
            startInterval: function() {
                setInterval(function() {

                    this.percentageMemory = OS.getUsedPercentage();
                    chart.load({
                        columns: [
                            ["data1", this.percentageMemory]
                        ]
                    });

                }.bind(this), 500);
            },
            totalMemory: function(type) {
                return OS.getTotalMemoryFriendly(type);
            }
        },
        ready: function() {

            chart = Helper.setUpChart(this.percentageMemory);
            this.startInterval();
        }
    });


};
