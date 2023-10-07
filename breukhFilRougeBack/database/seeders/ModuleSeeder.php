<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $module = [
            ['libelle' => 'php'],
            ['libelle' => 'js'],
            ['libelle' => 'angular'],
            ['libelle' => 'laravel'],
        ];
        DB::table('modules')->insert($module);
    }
}
