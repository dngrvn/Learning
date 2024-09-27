<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home', [
        'name' => 'Ivan',
        'age' => 35,
        'position' => 'slave',
        'address' => 'California'
    ]);
});

Route::get('/contacts', function () {
    return view('contacts', [
        'address' => 'California',
        'post_code' => 'c666',
        'email' => 'sobaca@mail.ru',
        'phone' => '1234567890'
    ]);
});
