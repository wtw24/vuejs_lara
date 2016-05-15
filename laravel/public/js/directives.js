// Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('input[name="_token"]').value;

Vue.directive('ajax', {

    params: ['completed'],

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
            .then(this.onComplete.bind(this))
            .catch(this.onError.bind(this));
    },

    onError: function (response) {
        alert(response.data.message);
    },

    onComplete: function () {
        if (this.params.completed) {
            alert(this.params.completed);
        }
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