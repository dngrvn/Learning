<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RequestTestController extends Controller
{
    public function testRequest(Request $request): void
    {
//        $firstName = $request->input('first_name', 'no name');
//        $lastName = $request->input('last_name', 'no name');
//        echo "$firstName $lastName";

//        $params = $request->all();
//        print_r($params);

        $params = $request->collect();
        $params->each(function ($field) {
            echo $field . ' ';
        });
    }
}
