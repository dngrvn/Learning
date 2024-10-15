<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use stdClass;

class MyUserController extends Controller
{
    public function show()
    {
        $user = new StdClass();
        $user->first_name = "Ivan";
        $user->last_name = "Ivanov";
        $user->id = 1;

//        $json = json_encode($user);
//        $response = new Response($json);
//        $response->header('Content-Type', 'application/json');
//        return $response;

        return \response()->json($user);
    }
}
