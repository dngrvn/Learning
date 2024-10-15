<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('test_url', function () {
    return response('Test', 200)->header('X-Header-1', 'test');
})->name('test_url');

Route::get('test_redirect', function () {
    return redirect()->route('test_url');
});

Route::get('test_cookie', function () {
    return response('test cookie')
        ->cookie('test_cookie', 'test_content', 5)
//        ->header('Set-Cookie', 'header_cookie=123')
        ->header('X-HEADER-TEST-1', 'TEST1')
        ->header('X-HEADER-TEST-2', 'TEST2')
        ->header('X-HEADER-TEST-3', 'TEST3')
        ->withHeaders([
            'X-HEADER-TEST-4' => 'TEST4',
            'X-HEADER-TEST-5' => 'TEST5',
            'X-HEADER-TEST-6' => 'TEST6',
        ])
        ->withoutCookie('header_cookie');
});

Route::get('counter', function () {
    $counter = session('counter', 0);
    $counter++;
    session(['counter' => $counter]);
    return 'up';
});

Route::get('result_counter', function () {
    $counter = session('counter', 0);
    return 'counter: ' . $counter;
});

Route::get('session_data', function () {
    return session()->all();
});

Route::get('del_counter', function () {
    if (session()->has('counter')) {
        session()->forget('counter');
    }
    return 'del counter';
});

Route::get('list_books', function () {
    $list = session()->get('list_of_books', '');

    return response()->json([
        'status' => 'received',
        'list_of_books' => $list ? unserialize($list) : 'empty'
    ]);
});

Route::post('add_book', function (Request $request) {
    $list = session()->get('list_of_books', '');

    $list = $list ? unserialize($list) : [];

    $list[] = [
        'author' => $request->author,
        'title' => $request->title,
    ];

    session()->put('list_of_books', serialize($list));

    return response()->json([
        'status' => 'added',
        'list_of_books' => $list
    ]);
});

Route::delete('del_book/{id}', function ($id) {
    $list = session()->get('list_of_books', '');

    $list = $list ? unserialize($list) : [];
    if (array_key_exists($id, $list)) {
        unset($list[$id]);
    }

    session()->put('list_of_books', serialize($list));

    return response()->json([
        'status' => 'deleted',
        'list_of_books' => $list
    ]);
});

Route::get('file_download', function (){
    return response()->download(base_path() . '/test.txt', 'my_file.txt');
});

Route::get('file_show', function () {
    return response()->file(base_path() . '/test.txt');
});

Route::get('file_stream_download', function (){
    return response()->streamDownload(function (){
        echo file_get_contents('https://google.com');
    }, 'google.html');
});
