<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Alert</title>
</head>
<body>
    <div class="container">

        @if(session()->has('status'))
            <alert type="success" timeout="1000">{{ session('status') }}</alert>
        @endif

    </div>

    <script src="{{ url('js/alert.js') }}"></script>

</body>
</html>