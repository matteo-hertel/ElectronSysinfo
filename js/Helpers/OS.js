var osModel = require("os");
var OS = {
    getUsedMemory: function() {
        return parseInt(OS.getTotalMemory() - osModel.freemem());
    },

    getFreeMemory: function() {
        return parseInt(osModel.freemem());
    },

    getTotalMemory: function() {
        return parseInt(osModel.totalmem());
    },

    getUsedPercentage: function() {
        return parseFloat((100 * OS.getUsedMemory()) / OS.getTotalMemory(), 2).toFixed(2);
    },
    getTotalMemoryFriendly: function(unit) {

        return Helper.convertTo(Math.round(OS.getTotalMemory()), unit);
    },
    getAllCpus: function() {
        return osModel.cpus();
    }
};


module.exports = OS;
