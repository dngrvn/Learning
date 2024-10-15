<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserStoreController extends Controller
{
    public function index(): View|Factory|Application
    {
        return view('user');
    }

    public function store(Request $request): JsonResponse
    {
        $userData = ['name' => $request->name, 'email' => $request->email];

        return response()->json($userData);
    }
}
