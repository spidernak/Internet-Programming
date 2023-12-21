<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            'name' => 'Phone',
            'category_id' => 1,
            'pricing' => 29.99,
            'description' => 'Product description goes here.',
            'image' => json_encode(['url' => 'example.jpg']),
            'created_at' => now(),
            'updated_at' => now(),

        ]);
    }
}
