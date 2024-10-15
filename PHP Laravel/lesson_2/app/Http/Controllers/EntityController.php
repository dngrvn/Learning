<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class EntityController extends Controller
{
    protected array $books = [
        'book1',
        'book2',
        'book3',
        'book4',
    ];

    public function index(): View|Factory|Application
    {
        return view('books', ['books' => $this->books]);
    }

    public function delete(int $id)
    {
        if (array_key_exists($id, $this->books)) {
            unset($this->books[$id]);
        }
        return view('books', ['books' => $this->books]);
    }

    public function store(Request $request)
    {
        if ($request->name) {
            $this->books[] = $request->name;
        }
        return view('books', ['books' => $this->books]);
    }
}
