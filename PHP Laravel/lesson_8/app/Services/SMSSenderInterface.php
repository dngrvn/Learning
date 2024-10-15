<?php

namespace App\Services;

interface SMSSenderInterface
{
    public function send($message);
}
