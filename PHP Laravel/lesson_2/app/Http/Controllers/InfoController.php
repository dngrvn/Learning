<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class InfoController extends Controller
{
    protected array $users = [
        [
            'username' => 'user1',
            'first_name' => 'Ivan',
            'last_name' => 'Ivanov',
            "list_of_books" => [
                "Война и мир",
                "Игра престолов",
            ]
        ],
        [
            'username' => 'user2',
            'first_name' => 'Petr',
            'last_name' => 'Petrov',
            "list_of_books" => [
                "Анна Каренина",
                "Дон Кихот",
            ]
        ],
    ];
    public function __invoke($id): View|Factory|Application
    {
        return view('info', ['user' => ['id' => $id, ...$this->users[$id]]]);
    }
}
