module.exports = function(Vue) {

    Vue.transition('collapse', {
        enterClass: 'fadeInDown',
        leaveClass: 'fadeOutUp'
    });
};
