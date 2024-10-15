<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class TestFormController extends Controller
{
    public function showForm(): View|Factory|Application
    {
        return view('myform');
    }

    public function postForm(Request $request): void
    {
        echo $request->input('name') . '<br>';
        echo $request->input('password') . '<br>';
        echo $request->input('age') . '<br>';
        echo $request->input('gender') . '<br>';
        print_r($request->input('category'));
    }
}
