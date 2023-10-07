<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SemestreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $semestre = [
            ['libelle' => 'semestre1'],
            ['libelle' => 'semestre2'],
        ];
        DB::table('semestres')->insert($semestre);
    }
}
