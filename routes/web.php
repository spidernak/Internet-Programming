<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/products', function (Request $request){
    return "Get all products";
})->middleware(['auth','checkuser:admin']);

Route::get('/todo', [TodoController::class, 'todoApp']);
Route::get('/todo/add',[TodoController::class, 'AddForm']);
Route::get('/todo/edit',[TodoController::class, 'EditForm']);
Route::post('/todo/store',[TodoController::class, 'store']);



//TP08
Route::get('/', [HomeController::class, 'renderHome']);


//product
Route::get('/product/add', [ProductController::class, 'create']);
Route::get('/product/edit', [ProductController::class, 'edit']);
Route::post('/product/store', [ProductController::class, 'store']);

require __DIR__.'/auth.php';
