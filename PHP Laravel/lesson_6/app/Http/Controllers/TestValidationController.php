<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class TestValidationController extends Controller
{
    public function index(): View|Factory|Application
    {
        return view('employee_validation');
    }

    public function post(Request $request)
    {
//        try {
            $result = $request->validate([
                'name' => ['required'],
                'password' => ['required', 'min:5'],
                'confirm' => ['required', 'min:5'],
            ]);
//            var_dump($result);
//        } catch (ValidationException $e) {
//            echo $e->getMessage();
//        }
    }
}
