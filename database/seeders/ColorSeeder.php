<?php

namespace Database\Seeders;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('colors')->insert([
        ['name'=>('Blond'), 'color_code' =>('#faf0be'),'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                                                           'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),],
        ['name'=>('Lime'), 'color_code' =>('#bfff00'),'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                                                                 'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),],
        ['name'=>('Green'), 'color_code' =>('#0d98ba'),'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                                                                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),],
        ['name'=>('Bole'), 'color_code' =>('#79443b'),'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                                                          'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),],
        ['name'=>('Cadmium Red'), 'color_code' =>('#e30022'),'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                                                                 'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),],
        ]);
    }
}
