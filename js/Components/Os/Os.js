module.exports = function(Vue) {
    var OS = require(__dirname + "/../../Helpers/OS.js");
    var Utils = require(__dirname + "/../../Helpers/Utilities.js");
    Vue.component("os", {
        data: function() {
            return {
                allCpus: false
            };
        },
        methods: {
            openHomedir: function() {
                require('child_process').exec('start "" "' + this.homedir + '"');
            }
        },
        computed: {
            cpus: function() {
                if (!this.allCpus) {
                    this.allCpus = OS.getAllCpus().map(function(el) {
                        if (el.model) {
                            return el.model;
                        }
                    });
                }
                return this.allCpus;

            },
            architecture: function() {
                return OS.getArchitecture();
            },
            platform: function() {
                return OS.getPlatform();
            },
            type: function() {
                return OS.getType();
            },
            release: function() {
                return OS.getRelease();
            },
            uptime: function() {
                return Utils.round(OS.getUptime() / 60 / 60);
            },
            EOL: function() {
                return OS.getEOL();
            },
            hostname: function() {
                return OS.getHostname();
            },
            homedir: function() {
                return OS.getHomeDir();
            }
        }

    });
};
