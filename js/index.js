//Get Vue first
var Vue = require(__dirname + "/bower_components/vue/dist/vue.min.js");
//then get the component(s)
require(__dirname + "/js/Components/RamChart/RamChart.js")(Vue);
//Finally create the Vue instance
new Vue({
    el: "body"
});
