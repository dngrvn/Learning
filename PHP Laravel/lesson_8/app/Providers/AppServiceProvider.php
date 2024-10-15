<?php

namespace App\Providers;

use App\Services\SMSSenderInterface;
use App\Services\SmsSenderService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application Services.
     */
    public function register(): void
    {
        $this->app->bind(SMSSenderInterface::class, function (){
            $sid = 'your_id';
            $token = 'your_token';
            return new SmsSenderService($sid, $token);
        });
    }

    /**
     * Bootstrap any application Services.
     */
    public function boot(): void
    {
        //
    }
}
