<?php

namespace App\View\Components;

use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\View\Component;

class MainMenu extends Component
{
    public $items;

    /**
     * @param $items
     */
    public function __construct($items)
    {
        $this->items = $items;
    }


    public function render(): Factory|Application|View|Htmlable|\Closure|string
    {
        return view('components.menus.main-menu');
    }
}
