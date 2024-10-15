<?php

namespace App\Console\Commands;

use App\Models\Employee;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class TestDatabaseSelect extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'database:test_select';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
//        $employees = Employee::all();
//
//        foreach ($employees as $employee) {
//            echo "$employee->id : $employee->first_name" . PHP_EOL;
//        }

//        $employee = Employee::find(2);
//        echo $employee;

//        $employees = Employee::where('id', '>', '2')->where('age', '>', 40)->get();
//        $employees = Employee::orderBy('age', 'asc')->offset(1)->limit(3)->get();
//
//        foreach ($employees as $employee) {
//            echo "$employee->id : $employee->first_name ($employee->age)" . PHP_EOL;
//        }

//        $employees = DB::table('employees')
//            ->groupBy('first_name')
//            ->select('first_name', DB::raw('count(1) as employee_total'))
//            ->get();
//        foreach ($employees as $employee) {
//            echo "$employee->first_name $employee->employee_total" . PHP_EOL;
//        }

        $employees = Employee::distinct()->orderBy('first_name')->get(['first_name']);
        foreach ($employees as $employee) {
            echo "$employee->first_name" . PHP_EOL;
        }
    }
}
