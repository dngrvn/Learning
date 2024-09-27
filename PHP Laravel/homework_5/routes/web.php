<?php

use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('get-form', [EmployeeController::class, 'index']);
Route::post('store-form', [EmployeeController::class, 'store']);
Route::put('employee/{id}', [EmployeeController::class, 'update']);
Route::get('employee', [EmployeeController::class, 'showAll']);
Route::get('json-textarea', [EmployeeController::class, 'showJsonTextarea']);
Route::post('json_data', [EmployeeController::class, 'jsonData'])->name('jsonData');
