<?php

use App\Http\Controllers\TestDiController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('check_di', [TestDiController::class, 'showUrl']);
Route::get('sms', [TestDiController::class, 'sendSms']);
