<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class EmployeeController extends Controller
{
    public function index($id = null): View|Factory|Application
    {
        $params = ['employee' => null];

        if ($id) {
            $employee = Employee::where('id', $id)->first();
            $params['employee'] = $employee;
        }

        return view('employee', $params);
    }

    public function store(Request $request): RedirectResponse
    {
        $result = Employee::where('first_name', $request->first_name)
            ->where('last_name', $request->last_name)
            ->first();


        if (!$result) {
            $employee = new Employee($request->all());
            $employee->save();
        } else {
            $employee = $result;
            $employee['department'] = $request->department;
            $employee->update();
        }

        return Redirect::route('show_employee', ['id' => $employee->id]);
    }
}
