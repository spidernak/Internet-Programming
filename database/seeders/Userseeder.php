<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class Userseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->delete();
        DB::statement('alter table users auto_increment = 1;');
        $user = [
            ['name' => 'Vannak',
            'email' => 'vannak@gmail.com',
            'password' => bcrypt('12345678'),
            'role' => 'admin', 
            'created_at' => now(),
            'updated_at' => now()],
            [
                'name' => 'Techchhiv',
            'email' => 'techchhive@gmail.com',
            'password' => bcrypt('12345678'),
            'role' => '', 
            'created_at' => now(),
            'updated_at' => now(),
            ]
            ];
            DB::table('users')->insert($user);
        // DB::table('users')->insert([
        //     'name' => 'Techchhiv',
        //     'email' => 'techchhive@gmail.com',
        //     'password' => bcrypt('12345678'),
        //     'role' => '', 
        //     'created_at' => now(),
        //     'updated_at' => now(),
        // ]);
    }
}
