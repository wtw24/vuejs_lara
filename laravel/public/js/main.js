Vue.component('tasks', {
    template: '#tasks-template',

    data: function () {
        return {
            list: [],
        };
    },

    created: function () {
        this.fetchTasksList();
    },
    
    methods: {
        fetchTasksList: function () {
            var resource = this.$resource('api/tasks/{/id}');

            resource.get().then(function (response) {
                this.list = response.data;
            });

            // this.$http.get('api/tasks', function (tasks) {
            //     this.list = tasks;
            // });
        },

        deleteTask: function (task) {
            this.list.$remove(task);
        },
    }
});

new Vue({
    el: 'body',
});