<?php

use App\Jobs\SyncNews;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Schedule::call(function (){
    Log::info('callback executed');
})->everyMinute();

Schedule::command('app:dump-database')->everyMinute();

Schedule::job(new SyncNews(21))->everyMinute();

//Schedule::exec('echo NUL > storage/logs/test.log')->everyMinute();
