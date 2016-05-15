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
    
    data: {
        messages: [],
    },
    
    methods: {
        handleNewMessage: function (message) {
            this.messages.push(message);

            console.log('Parent is handling the ' + message);
        }
    },
});