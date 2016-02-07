/* globals Vue */

module.exports = function(Vue) {
    var Helper = require(__dirname + "/Helper.js");

    Vue.component("ram-chart", {
        template: require(__dirname + "/../views/ramChartView.js")(),
        data: function() {
            return {
                os: require("os"),
                totalMemory: require("os").totalmem() ,
            };
        },
        methods: {
            getTotalMemory: function(unit) {

                return Helper.convertTo(Math.round(this.totalMemory), unit);
            }
        }
    });


};
