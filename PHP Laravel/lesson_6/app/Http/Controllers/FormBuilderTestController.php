<?php

namespace App\Http\Controllers;

use App\Forms\EmployeeForm;
use Illuminate\Http\Request;
use Kris\LaravelFormBuilder\FormBuilder;

class FormBuilderTestController extends Controller
{
    public function index(FormBuilder $formBuilder)
    {
        $form = $formBuilder->create(EmployeeForm::class, [
            'method' => 'POST',
            'url' => route('post_form_builder')
        ]);

        return view('show_form', compact('form'));
    }

    public function post(Request $request)
    {
        var_dump($request);
    }
}
