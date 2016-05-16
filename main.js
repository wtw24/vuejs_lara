Vue.component('home-page', {
    methods: {
        doSomethingElse: function () {
            alert('doSomethingElse');
        },
    },
});

Vue.component('about-page', {
    methods: {
        doSomething: function () {
            alert('doSomething');
        },
    },
});

var vm = new Vue({
    el: 'body',

    data: {
        currentView: 'home-page',
    },
});