<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    public function showForm(): View|Factory|Application
    {
        return view('upload');
    }

    public function fileUpload(Request $request): void
    {
//        if ($request->hasFile('file_upload')) {
//            $file = $request->file('file_upload');
//            echo $file->path() . '<br>';
//            echo $file->getClientOriginalName() . '<br>';
//            echo $file->getClientOriginalExtension() . '<br>';
//            $file->storeAs('upload', $file->getClientOriginalName());
//        } else {
//            echo 'File not uploaded';
//        }

        foreach ($request->file_upload as $file) {
            var_dump($file);
        }
    }
}
