module.exports = function(Vue) {
    Vue.component("collapsible-panel", {
        template: require(__dirname + "/views/collapsiblePanelView.js")(),
        props: ["show"],
        methods: {
            toggleview: function(e) {
                this.show = !this.show;
            }
        }
    });
};
