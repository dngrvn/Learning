<?php

use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/news/create-test', [NewsController::class, 'createTest']);
Route::get('/news/{id}/hide', [NewsController::class, 'hiddenNews']);
