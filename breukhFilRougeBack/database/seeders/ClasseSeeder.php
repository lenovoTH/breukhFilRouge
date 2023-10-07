<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ClasseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    
    public function run(): void
    {
        $classe = [
            ['libelle' => 'devweb'],
            ['libelle' => 'refdig'],
            ['libelle' => 'devdata'],
        ];
        DB::table('classes')->insert($classe);
    }
}
