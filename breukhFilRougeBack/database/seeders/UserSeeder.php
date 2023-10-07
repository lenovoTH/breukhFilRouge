<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = [
            [
                'nom' => 'diallo',
                'prenom' => 'sira',
                'login' => 'sira',
                'password' => 'sira',
                'grade' => 'docteur',
                'role' => 'prof',
                'specialite' => 'dev'
            ],
            [
                'nom' => 'sagna',
                'prenom' => 'moussa',
                'login' => 'moussa',
                'password' => 'moussa',
                'grade' => 'docteur',
                'role' => 'prof',
                'specialite' => 'data'
            ],
            [
                NULL,
                'nom' => 'sow',
                'prenom' => 'hali',
                'login' => 'hali',
                'password' => 'hali',
                'role' => 'etudiant',
                NULL
            ],
            [
                Null,
                'nom' => 'diao',
                'prenom' => 'ibrahim',
                'login' => 'diao',
                'password' => 'diao',
                'role' => 'RP',
                Null
            ],
            [
                Null,
                'nom' => 'ba',
                'prenom' => 'kadia',
                'login' => 'kadia',
                'password' => 'kadia',
                'role' => 'attache',
                NUll
            ],

        ];
        DB::table('users')->insert($user);
    }
}
