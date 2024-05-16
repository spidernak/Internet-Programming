<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    public function home()
    {
        $images = Image::take(7)->get();
        // $imageURLs = Storage::disk('minio')->temporaryUrl('./img/gallery/1.jpg', now()->addHour());
        // $imageURLs = [];

        // foreach ($images as $image) {
        //     $imageURL = Storage::disk('minio')->temporaryUrl('img/gallery/1.jpg', now()->addHour());
        //     $imageURLs[] = $imageURL;
        // }

        // dd($imageURLs);
        return view('home', compact('images'));
    }
    public function gallery()
    {
        $images = Image::all();
        return view('gallery', compact('images'));
    }

    public function blog()
    {
        return view('blog');
    }
    public function blogSingle()
    {
        return view('blog-single');
    }
    public function contact()
    {
        return view('contact');
    }

    public function storeImage(Request $request)
    {
        $request->validate([
            'image' => 'required|file|mimes:jpeg,png',
            'name' => 'nullable|string',
            'type' => 'nullable|string'
        ]);


        $name = \Str::random(30);
        $imgName = $name . '.' . $request->file('image')->extension();
        $image = $request->file('image');

        $manager = new ImageManager(['driver' => 'imagick']);

        $img = $manager->make($image)->resize(500, 500, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });

        Storage::disk('minio')->put('img/gallery/' . $imgName, $image);
        // Storage::disk('local')->put('public/img/' . $imgName, $image);

        Image::insert(
            [
                'image' => $imgName,
                'name' => $request->input('name'),
                'type' => $request->input('type')
            ]
        );

        return redirect()->route('home');
    }

    public function test(Request $request)
    {
        $image = $request->file('image');
        $originalName = $image->getClientOriginalName();
        $fileName = time() . '-' . $originalName;


        dd(Storage::disk('minio')->put($fileName, $request->file('image')));
        return response()->json(['message' => 'Image uploaded successfully!', 'url' => Storage::disk('minio')->url($fileName)]);


    }
}
