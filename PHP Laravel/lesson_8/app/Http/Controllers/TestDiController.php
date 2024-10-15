<?php

namespace App\Http\Controllers;

use App\Services\CustomLogDBService;
use App\Services\CustomLogServiceInterface;
use App\Services\SMSSenderInterface;
use Illuminate\Http\Request;

class TestDiController extends Controller
{
    public function showUrl(Request $request, CustomLogServiceInterface $customLogDBService)
    {
        echo $request->getUri();
        $customLogDBService->rotateLogs();
    }

    public function sendSms(SMSSenderInterface $sender)
    {
        $sender->send('Hello');
    }
}
