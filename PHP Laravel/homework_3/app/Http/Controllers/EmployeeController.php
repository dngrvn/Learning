<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class EmployeeController extends Controller
{
    protected $names = [
        'Ivan',
        'Petr',
        'Sergey',
        'Nikolay',
        'Valerii',
        'Alexandr'
    ];

    public function __invoke()
    {
        $employee = new Employee();
        $employee->first_name = $this->names[(rand(0, count($this->names) - 1))];
        $employee->age = rand(18, 65);
        $employee->salary = rand(30, 200) * 1000;
        $employee->save();

        echo "$employee->first_name $employee->age {$employee->salary}р";
    }
}
