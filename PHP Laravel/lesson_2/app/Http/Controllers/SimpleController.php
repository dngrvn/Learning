<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SimpleController extends Controller
{
    public function test(Request $request)
    {
        $response = ['param' => $request->param, 'param2' => $request->param2];

//        return new Response(json_encode($response));
        return response()->json($response);
    }
}
