<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class SendFileController extends Controller
{
    public function __invoke(): BinaryFileResponse
    {
        return response()->file($_SERVER['DOCUMENT_ROOT'] . '/uploads/test.pdf');
    }
}
