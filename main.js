Vue.component('tasks', {
    props: ['list'],

    template: '#tasks-template',

    computed: {
        remaining: function () {
            var that = this;

            return this.list.filter(function (task) {
                return that.isInProgress(task);
            }).length;
        },
    },

    methods: {
        isCompleted: function (task) {
            return task.completed;
        },

        isInProgress: function (task) {
            return ! task.completed;
        }
    },
});

var vm = new Vue({
    el: '#app',

    data: {
        tasks: [
            { body: 'Go to the store', completed: false },
            { body: 'Go to the bank', completed: false },
            { body: 'Go to the doctor', completed: true },
        ],
    },
});