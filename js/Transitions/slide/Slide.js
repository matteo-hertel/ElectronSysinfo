module.exports = function(Vue) {

    Vue.transition('slide', {
        enterClass: 'fadeInRight',
        leaveClass: 'fadeOutRight'
    });
};
