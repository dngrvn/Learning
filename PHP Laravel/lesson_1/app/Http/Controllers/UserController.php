<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function showUsers(): Application|Factory|View
    {
//        DB::connection('mysql')
//            ->table('user')
//            ->insert(['first_name' => 'Nikolay',
//                'last_name' => 'Nikolaev',
//                'email' => 'nikolaev@mail.ru']);

        $users = DB::connection('mysql')
            ->table('user')
            ->select(['first_name', 'last_name', 'email'])
            ->get();

//        return view('users', ['users' => $users]);
        return view('user', ['users' => $users]);
    }
}
