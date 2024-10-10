<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('book', [BookController::class, 'index'])->name('book_form');
Route::post('book', [BookController::class, 'store'])->name('book_store');
