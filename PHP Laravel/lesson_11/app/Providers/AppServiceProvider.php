<?php

namespace App\Providers;

use App\Models\User;
use App\Policies\UserPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::define('view_users', function (User $user){
            return $user->isAdmin();
        });

        Gate::define('view-any', [UserPolicy::class, 'viewAny']);
        Gate::define('view', [UserPolicy::class, 'view']);
    }
}