Vue.component('message', {
    template: '<input v-model="message" @keyup.enter="storeMessage">',

    data: function () {
        return {
            message: '',
        };
    },

    methods: {
        storeMessage: function () {
            // console.log('Storing: ' + this.message);

            this.$dispatch('new-message', this.message);

            this.message = '';
        },
    },
});

var vm = new Vue({
    el: '#app',
    
    events: {
        'new-message': function (message) {
            console.log('Parent is handling: ' + message);
        },
    },
});