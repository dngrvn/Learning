<?php

use App\Http\Controllers\FormProcessor;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/userform', [FormProcessor::class, 'index'])->name('show_form');
Route::post('/store_form', [FormProcessor::class, 'store'])->name('add');
