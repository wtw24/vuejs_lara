Vue.filter('jsonIt', function (value) {
    return JSON.stringify(value);
});

Vue.filter('role', function (value, role) {
    return value.filter(function (item) {
        return item.role == role;
    });
});

var vm = new Vue({
    el: '#app',
    
    data: {
        message: 'hello world',

        people: [
            { name: 'Joe', role: 'admin' },
            { name: 'Susan', role: 'admin' },
            { name: 'Frank', role: 'student' },
            { name: 'Jeffrey', role: 'admin' },
            { name: 'Wladimir', role: 'student' },
            { name: 'Peter', role: 'student' },
        ]
    },
});