Vue.transition('fade', {
    enterClass: 'fadeInUp',
    leaveClass: 'fadeOutLeft',
});

var vm = new Vue({
    el: '#app',
    
    data: {
        show: true,
    },
});