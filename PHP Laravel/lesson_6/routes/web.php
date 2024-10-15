<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\FormBuilderTestController;
use App\Http\Controllers\TestFormController;
use App\Http\Controllers\TestSecurityController;
use App\Http\Controllers\TestValidationController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('show_form', [TestFormController::class, 'showForm'])->name('show_form');
Route::post('post_form', [TestFormController::class, 'postForm'])->name('post_form');

Route::get('employee/{id?}', [EmployeeController::class, 'index'])->name('show_employee');
Route::post('employee', [EmployeeController::class, 'store'])->name('store_employee');

Route::get('security_test', [TestSecurityController::class, 'index'])->name('show_security');
Route::post('security_test', [TestSecurityController::class, 'post'])->name('post_security');

Route::get('employee_validate', [TestValidationController::class, 'index'])->name('show_validate');
Route::post('employee_validate', [TestValidationController::class, 'post'])->name('post_validate');

Route::get('form_builder', [FormBuilderTestController::class, 'index'])->name('show_form_builder');
Route::post('form_builder', [FormBuilderTestController::class, 'post'])->name('post_form_builder');
