<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use App\Mail\BookingCompletedMailing;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Telegram\Bot\Laravel\Facades\Telegram;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


Route::get('booking', function (){
    $email = env('MAIL_FROM_ADDRESS');
    Mail::to($email)->send(new BookingCompletedMailing());
    return response()->json(['status' => 'success']);
});

Route::get('test_tg', function (){
    Telegram::bot('mybot')->sendMessage([
        'chat_id' => env('TELEGRAM_CHANEL_ID'),
        'parse_mode' => 'html',
        'text' => 'TEST'
    ]);
    return response()->json(['status' => 'success']);
});

Route::get('debug_sentry', function (){
    throw new Exception('Exception for test sentry');
});

Route::get('redirect', [AuthController::class, 'redirectToProvider']);
Route::get('callback', [AuthController::class, 'handleProviderCallback']);
