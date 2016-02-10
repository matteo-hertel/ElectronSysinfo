module.exports = function(Vue) {
    Vue.component("collapsible-panel", {
        data: function() {
            return {
                show: false
            };
        },
        methods: {
            toggleview: function(e) {
                this.show = !this.show;
            }
        }
    });
};
