<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    public function index()
    {
        return view('upload');
    }

    public function upload(Request $request)
    {
        $uploadsNumber = (int) $request->cookie('number_of_uploads') ?? 0;

        if ($uploadsNumber > 2) {
            return response('Too many uploads: ' . $uploadsNumber);
        }

        $fileName = $request->name;
        $file = $request->file('uploaded');

        $tmpPath = $file->getRealPath();
        $newFileName = $fileName . '.' . $file->getClientOriginalExtension();

//        move_uploaded_file($tmpPath, 'uploads/' . $newFileName);
        $file->move('uploads', $newFileName);

        $uploadsNumber++;

//        $cookie = cookie('number_of_uploads', $uploadsNumber);

        return response('<a href=/uploads/' . $newFileName . '>Open</a>')->cookie('number_of_uploads', $uploadsNumber);
    }
}
