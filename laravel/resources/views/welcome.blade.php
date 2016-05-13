<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
    </head>
    <body>
        <div id="app" class="container">

            <alert type="info">
                <strong>Info!</strong>
                Your account has ben updated.
            </alert>

            <alert type="success">
                <strong>Success!</strong>
                Your account has ben updated.
            </alert>

            <alert type="error">
                <strong>Error!</strong>
                Your account has not ben updated.
            </alert>

        </div>

        <script src="{{ url('js/main.js') }}"></script>
    </body>
</html>
