<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function createCategories( Request $request){
        $category = new Category();
        $category->name = $request->name;
        $category->save();
        return response()->json(['c'=>$category]);
       
    }
}
