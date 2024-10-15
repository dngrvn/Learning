<?php

namespace App\Services;
use Twilio\Rest\Client as TwilioClient;

class SmsSenderService implements SMSSenderInterface
{
    public TwilioClient $client;

    public function __construct($sid, $token)
    {
        $this->client = new TwilioClient($sid, $token);
    }


    public function send($message)
    {
        $this->client->messages->create('+79046271960', [
            'from' => '+79046271960',
            'body' => $message
        ]);
    }
}
