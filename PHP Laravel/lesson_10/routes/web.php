<?php

use App\Jobs\SyncNews;
use App\Models\User;
use App\Notifications\UserEmailChangedNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('test_sync_news', function (){
    SyncNews::dispatch(15);
    return response(['status'=>'success']);
});

Route::get('locale', function (){
    echo App::getLocale();
});

Route::get('locale/set/{locale}', function (string $locale){
    App::setLocale($locale);
    echo App::getLocale();
    echo '<hr>';
    echo __('messages.greet');
});

Route::get('locale/{locale}/thanks', function (Request $request, $locale){
    App::setLocale($locale);
    echo __('messages.thanks', ['name' => $request->name]);
});

Route::get('user/create/{amount}', function ($amount){
    return User::factory($amount)->create();
});

Route::get('user/{user}/change_email', function (User $user, Request $request){
    $oldEmail = $user->email;
    $user->email = $request->email;
    $user->save();
    $user->notify(new UserEmailChangedNotification($oldEmail));
    return response([
        'result' => 'email changed',
        'old email'=> $oldEmail,
        'new email' => $user->email
        ]);
});

Route::get('user/{user}/notifications', function (User $user){
    return $user->notifications;
});
