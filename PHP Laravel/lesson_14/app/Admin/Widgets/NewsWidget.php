<?php

namespace App\Admin\Widgets;

use App\Models\News;
use Arrilot\Widgets\AbstractWidget;

class NewsWidget extends AbstractWidget
{
    protected $config = [];

    public function run()
    {
        //заглушка
        $count = News::count();

        return view('voyager::dimmer', array_merge($this->config, [
            'icon' => 'voyager-news',
            'title' => 'Счётчик новостей',
            'text' => "Количество новостей: {$count}",
            'button' => [
                'text' => 'Список',
                'link' => url('http://localhost:8000/admin/news'),
            ],
            'image' => 'storage/news/news-bg.png'
        ]));
    }

    /**
     * Отображение виджета
     * @return true
     */
    public function shouldBeDisplayed()
    {
        return true;
    }
}
