<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RedirectController extends Controller
{
    public function __invoke(): RedirectResponse
    {
//        return redirect()->away('https://google.com');
//        return redirect()->action([EntityController::class, 'delete'], ['id' => 0]);
        return redirect()->route('books');
    }
}
