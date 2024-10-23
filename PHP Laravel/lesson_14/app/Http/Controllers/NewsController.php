<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return News::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(News $news)
    {
        $news->save();
        return $news;
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        return $news;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        $news->update($request->all());
        return $news;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        $news->delete();
    }
}
