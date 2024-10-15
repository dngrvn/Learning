<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class UsersController extends Controller
{
    public function index(): Collection
    {
        Gate::authorize('view-any', User::class);
//        Gate::authorize('view_users');
        return User::all();
    }

    public function show(User $user)
    {
        Gate::authorize('view', [User::class, $user]);

        return $user;
    }
}
