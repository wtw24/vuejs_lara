<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
    </head>
    <body>

        <form method="post" action="directives/posts/1" v-ajax completed="Okay, the post has been deleted.">
            {{ method_field('DELETE') }}
            {{ csrf_field() }}

            <button type="submit">Delete Post</button>
        </form>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.24/vue.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/0.7.0/vue-resource.js"></script>
        <script src="{{ url('js/directives.js') }}"></script>
    </body>
</html>
