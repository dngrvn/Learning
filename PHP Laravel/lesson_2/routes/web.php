<?php

use App\Http\Controllers\EntityController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\InfoController;
use App\Http\Controllers\MyUserController;
use App\Http\Controllers\RedirectController;
use App\Http\Controllers\SendFileController;
use App\Http\Controllers\SimpleController;
use App\Http\Controllers\UserStoreController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('test', [SimpleController::class, 'test']);

Route::get('/user', [UserStoreController::class, 'index']);
Route::post('/user', [UserStoreController::class, 'store']);

Route::get('book', [EntityController::class, 'index'])->name('books');
Route::post('book', [EntityController::class, 'store'])->name('add_book');
Route::get('delete_book/{id}', [EntityController::class, 'delete'])
    ->where(['id' => '[0-9]'])
    ->name('remove_book');

Route::get('upload', [FileUploadController::class, 'index']);
Route::post('upload', [FileUploadController::class, 'upload'])->name('upload_file');

Route::get('/info/{id}', InfoController::class)->where(['id' => '[0-1]+']);

Route::get('/my_user', [MyUserController::class, 'show']);

Route::get('redirect', RedirectController::class);

Route::get('send_file', SendFileController::class);
