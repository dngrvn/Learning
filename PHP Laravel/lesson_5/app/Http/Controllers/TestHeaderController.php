<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestHeaderController extends Controller
{
    public function getHeader(Request $request): void
    {
//        $userAgent = $request->header('User-Agent');

//        echo $userAgent;

        if ($request->hasHeader('My-Header')) {
            $myHeader = $request->header('My-Header');

            echo $myHeader;
        }
    }
}
