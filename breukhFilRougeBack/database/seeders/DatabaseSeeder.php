<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\AnneeScolaire;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            AnneeScolaireSeeder::class,
            SemestreSeeder::class,
            ClasseSeeder::class,
            SalleSeeder::class,
            FiliereSeeder::class,
            ModuleSeeder::class,
        ]);
    }
}


