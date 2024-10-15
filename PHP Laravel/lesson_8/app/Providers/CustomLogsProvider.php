<?php

namespace App\Providers;

use App\Services\CustomLogDBService;
use App\Services\CustomLogServiceInterface;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;

class CustomLogsProvider extends ServiceProvider
{
    /**
     * Register Services.
     */
    public function register(): void
    {
        $this->app->bind(CustomLogServiceInterface::class, function () {
            return new CustomLogDBService(DB::table('logs'));
        });
    }

    /**
     * Bootstrap Services.
     */
    public function boot(): void
    {
        //
    }
}
