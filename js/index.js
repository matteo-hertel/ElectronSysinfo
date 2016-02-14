//Get Vue first
var Vue = require(__dirname + "/bower_components/vue/dist/vue.min.js");
//then get the component(s)
require(__dirname + "/js/Components/RamChart/RamChart.js")(Vue);
require(__dirname + "/js/Components/CollapsiblePanel/CollapsiblePanel.js")(Vue);
require(__dirname + "/js/Components/Os/Os.js")(Vue);
//then get the transition(s)
require(__dirname + "/js/Transitions/Collapse/Collapse.js")(Vue);
require(__dirname + "/js/Transitions/Slide/Slide.js")(Vue);
//Finally create the Vue instance
new Vue({
    el: "body",
    data: {
        components: {
            "RamChart": true,
            "Cpus": true
        },
        showSettings: false
    },
    methods: {
        toggleSettings: function() {
            this.showSettings = !this.showSettings;
        }
    },
    computed: {
        noVisibleComponents: function() {
            for (var i in this.components) {

                if (this.components[i]) {

                    return false;
                }

            }
            return true;
        }
    }
});
