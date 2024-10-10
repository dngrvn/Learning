<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    public static function create(array $data): void
    {
            $book = new Book();
            $book->title = $data['title'];
            $book->author = $data['author'];
            $book->genre = $data['genre'];
            $book->save();
    }
}
