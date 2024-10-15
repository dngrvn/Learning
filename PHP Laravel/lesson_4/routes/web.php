<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/main', function (){
    return view('mainpage');
});

Route::get('/about', function (){
    return view('about');
});

Route::get('/users', function () {
    $users = ['Ivan', 'Fedor', 'Petr', 'Alexandr', 'Oleg'];

   return view('users', ['users' => $users]);
});

Route::get('testdir', function () {
    return view('testdir');
});
