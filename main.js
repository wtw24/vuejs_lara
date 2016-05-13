Vue.component('alert', {
    template: '#alert-template',

    props: ['type'],
    
    data: function () {
        return {
            show: true
        };
    },

    computed: {
        alertClasses: function () {
            var type = this.type;

            return {
                'Alert': true,
                'Alert--success': type == 'success',
                'Alert--error': type == 'error',
            }
        },
    },
});

var vm = new Vue({
    el: '#app',
});