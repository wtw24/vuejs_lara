<?php

Route::get('/', function () {
    $tasks = App\Task::latest()->get();
    
    return view('welcome', compact('tasks'));
});
