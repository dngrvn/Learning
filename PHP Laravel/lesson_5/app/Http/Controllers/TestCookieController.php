<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestCookieController extends Controller
{
    public function testCookie(Request $request): void
    {
        echo $request->cookie('laravel_session') . PHP_EOL;

        $session = $request->session();
//        var_dump($session);
        echo $session->get('_token');
    }
}
