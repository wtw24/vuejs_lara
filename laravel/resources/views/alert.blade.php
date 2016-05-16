<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Alert</title>
</head>
<body>
    <div class="container">
        <alert timeout="1000">You are now signed in!</alert>
        <alert type="success">You are now signed in!</alert>
        <alert important>You are now signed in!</alert>
        <alert>You are now signed in!</alert>
    </div>

    <script src="{{ url('js/alert.js') }}"></script>

</body>
</html>