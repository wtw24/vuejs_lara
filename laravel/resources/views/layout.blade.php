<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

    <component is="{{ $vueView }}">
        @yield('content')
    </component>

    <script src="{{ url('js/spa.js') }}"></script>

</body>
</html>