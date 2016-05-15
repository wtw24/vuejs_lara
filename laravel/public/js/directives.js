// Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('input[name="_token"]').value;

Vue.directive('ajax', {
    bind: function () {
       this.el.addEventListener('submit', this.onSubmit.bind(this));
    },

    update: function (value) {
       // alert('update');
    },

    unbind: function () {

    },

    onSubmit: function (e) {
        e.preventDefault();

        this.vm.$http[this.getRequestType()](this.el.action)
            .then(this.onComplete.bind(this));
    },

    onComplete: function () {
        alert('Complete');
    },

    getRequestType: function () {
        var method = this.el.querySelector('input[name="_method"]');

        return (method ? method.value : this.el.method).toLowerCase();
    },
});

// Vue.directive('ajax', function () {
//
// });

new Vue({
    el: 'body',

    http: {
        headers: {
            'X-CSRF-TOKEN': document.querySelector('input[name="_token"]').value,
        },
    },
});