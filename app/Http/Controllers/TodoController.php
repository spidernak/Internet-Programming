<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use Illuminate\Support\Facades\Storage;

class TodoController extends Controller
{
    public function todoApp(){
        $todos = Todo::all();
        dd($todos);

        return view("Todo.TodoApp",compact('todos'));
    }
    public function AddForm(){
        $todos = Todo::all();
        return view("Todo.form",compact('todos'));
    }

    public function EditForm(){
        $todos = Todo::all();
        return view("Todo.form",compact('todos'));
    }


    public function store(Request $request){
        dd($request->all());
       

        $todo = new Todo();
        $todo->tadk = $request->get('task');
        $todo->description = $request->get('description');

        $todo->save();


        //1. save file to storage
        // Storage::disk('local')->put('example.txt', 'Contents');
        $image_location = Storage::putFile('public/'.$todo->id, $request->file('image'));
        //2. get file location , apply todo object
        // $todo->image_URL = $image_location;
        $todo->save();
        //3. save todo object
        
        return redirect('/todo');
    }


}
