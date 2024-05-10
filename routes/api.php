<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\authController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//testing
Route::middleware('auth:api')->get('/testing', function (Request $request){
    return "HEllo";
});


 
//for category
Route::get('/categories', function (Request $request){
    return "Get all categories";
})->middleware('checkuser');
Route::middleware('auth:api')->post('/Createcategories', [CategoryController::class,'createCategories']);
Route::middleware('auth:api')->patch('/categories/{categoryId}', function (Request $request){
    return "Update 1 category";
});
Route::middleware('auth:api')->delete('/categories/{categoryId}', function (Request $request){
    return "Delete 1 category";
});

//for products
Route::get('/products', function (Request $request){
    return "Get all products";
})->middleware(['auth:api','checkuser:admin']);
Route::get('/products/{productId}', function (Request $request){
    return "Get 1 product";
});
Route::middleware('auth:api')->post('/products', function (Request $request){
    return " Create 1 product";
});
Route::middleware('auth:api')->patch('/products/{productId}', function (Request $request){
    return "Update 1 product";
});
Route::middleware('auth:api')->delete('/products/{productId}', function (Request $request){
    return "Delete 1 product";
});
Route::get('/categories/{categoryId}/products', function (Request $request){
    return "Get all products belong to categroyId";
});


Route::get('/register',[authController::class,'register']);
Route::get('/login',[authController::class,'login']);



Route::resource('users',UserController::class);
