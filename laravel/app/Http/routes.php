<?php

Route::get('/api/tasks', function () {
    return App\Task::latest()->get();
});

Route::get('/', function () {
    return view('welcome');
});


Route::get('/directives', function () {
    return view('directives');
});


Route::delete('/directives/posts/{post}', function (App\Post $post) {
//Route::delete('/directives/posts/{post}', function ($post) {
    //$post->delete();

    return 'delete Post with ID ' . $post;
});

Route::get('/home', function () {
    return view('home');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('begin', function () {
    session()->flash('status', 'You are now signed in');

    return redirect('/alert');
});

Route::get('alert', function () {
    return view('alert');
});
