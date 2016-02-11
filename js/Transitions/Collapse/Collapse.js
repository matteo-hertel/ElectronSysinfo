module.exports = function(Vue) {

    Vue.transition('collapse', {
        enterClass: 'collapsing',
        leaveClass: 'collapse'
    });
};
