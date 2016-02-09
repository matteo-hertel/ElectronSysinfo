/* globals Vue */

module.exports = function(Vue) {
    var Helper = require(__dirname + "/Helper.js");
    var chart = null;
    Vue.component("ram-chart", {
        template: require(__dirname + "/views/ramChartView.js")(),
        data: function() {
            return {
                os: require("os"),
                percentageMemory: 0
            };
        },
        methods: {
            getUsedMemory: function() {
                return parseInt(this.getTotalMemory() - this.os.freemem());
            },

            getFreeMemory: function() {
                return parseInt(this.os.freemem());
            },

            getTotalMemory: function() {
                return parseInt(this.os.totalmem());
            },

            getUsedPercentage: function() {
                return parseFloat((100 * this.getUsedMemory()) / this.getTotalMemory(), 2).toFixed(2);
            },
            getTotalMemoryFriendly: function(unit) {

                return Helper.convertTo(Math.round(this.getTotalMemory()), unit);
            },

            startInterval: function() {
                setInterval(function() {

                    this.percentageMemory = this.getUsedPercentage();
                    chart.load({
                        columns: [
                            ["data1", this.percentageMemory]
                        ]
                    });

                }.bind(this), 500);
            }
        },
        ready: function() {

            chart = Helper.setUpChart(this.percentageMemory);
            this.startInterval();
        }
    });


};
