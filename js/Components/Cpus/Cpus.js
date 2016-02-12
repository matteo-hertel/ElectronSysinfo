module.exports = function(Vue) {
    var OS = require(__dirname + "/../../Helpers/OS.js");
    Vue.component("cpus", {
        data: function() {
            return {
                allCpus: false
            };
        },
        computed: {
            cpus: function() {
                if (!this.allCpus) {
                    this.allCpus = OS.getAllCpus().map(function(el) {
                        if(el.model){
                                return el.model;
                            }
                    });
                }
                return this.allCpus;

            }
        }
    });
};
