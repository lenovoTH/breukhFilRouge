<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SalleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $salle = [
            ['libelle' => 'S1', 'numero' => 01],
            ['libelle' => 'S2', 'numero' => 02],
            ['libelle' => 'S3', 'numero' => 03],
        ];
        DB::table('salles')->insert($salle);
    }
}
