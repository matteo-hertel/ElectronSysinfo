var osModel = require("os");
var Helper = require(__dirname + "/Utilities.js");
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
    },
    getAllNetworkInterfaces: function() {
        return osModel.networkInterfaces()
    },
    getArchitecture: function() {
        return osModel.arch();
    },
    getType: function() {
        return osModel.type();
    },
    getEOL: function() {
        return osModel.EOL;
    },
    getHostname: function() {
        return osModel.hostname();
    },
    getHomeDir: function() {
        return osModel.homedir();
    },
    getPlatform: function() {
        return osModel.platform();
    },
    getRelease: function() {
        return osModel.release();
    },
    getUptime: function() {
        return osModel.uptime();
    }
};


module.exports = OS;
