<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AnneeScolaireSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $annees = [
            ['libelle' => '2021/2022'],
            ['libelle' => '2022/2023'],
        ];
        DB::table('annee_scolaires')->insert($annees);
    }
}
