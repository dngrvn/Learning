<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FormProcessor extends Controller
{
    public function index(): View|Factory|Application
    {
        return view('form');
    }

    public function store(Request $request): Factory|View|Application
    {
        $data = [
          'name' => $request->name,
          'surname' => $request->surname,
          'email' => $request->email,
        ];

//        return response()->json($data);
        return view('hello', ['user' => $data]);
    }
}
