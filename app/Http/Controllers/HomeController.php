<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Category;
use App\Models\Product;

class HomeController extends Controller
{
    public function renderHome(){
        $categories = Category::all();
        $products = Product::all();
        return view("TP08.home",compact('categories','products'));
    }

    
}
