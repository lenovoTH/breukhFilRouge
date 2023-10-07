<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FiliereSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $filiere = [
            ['libelle' => 'developweb'],
            ['libelle' => 'referentdig'],
            ['libelle' => 'developdata'],
        ];
        DB::table('filieres')->insert($filiere);
    }
}
