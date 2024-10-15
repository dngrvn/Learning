<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class TestSecurityController extends Controller
{
    public function index(): View|Factory|Application
    {
        return view('test_csrf');
    }

    public function post(Request $request)
    {
        echo $request->test;
    }
}
