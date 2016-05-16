var store = {
    state: {
        username: 'WladimirWendland',
    },

    updateUsername: function (username) {
        this.state.username = username;
    },
};

var vm = new Vue({
    el: 'body',

    data: {
        misc: 'data',
        shared: store.state,
    },
    
    components: {
        notification: {
            data: function () {
                return store.state;
            },

            template: '<h2>{{ username }}: <slot></slot></h2>',
        },
    },
});