const FetchesUser = {
    methods: {
        fetchUser() {
            alert('fetch the user');
        },
    }
};

const RenderGraph = {
    methods: {
        render() {
            alert('render the chart');
        },
    }
};

const RevenueGraph = new Vue({
    el: 'body',

    mixins: [RenderGraph],

    ready() {
        this.render();
    }
});

const SignupsGraph = new Vue({
    el: 'body',

    mixins: [RenderGraph],

    ready() {
        this.render();
    }
});