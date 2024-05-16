<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [HomeController::class, 'home'])->name('home');

Route::get('/blog', [HomeController::class, 'blog']);
Route::get('/blog-single', [HomeController::class, 'blogSingle']);
Route::get('/contact', [HomeController::class, 'contact']);

Route::get('/about', function () {
    return view('about');
});

Route::get('/gallery', [HomeController::class, 'gallery']);

Route::get('/addImage', function () {
    return view('form');
});