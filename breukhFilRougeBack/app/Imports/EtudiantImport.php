<?php

namespace App\Imports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\ToModel;

class EtudiantImport implements ToModel
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        // return new User([
        //     //
        // ]);

        return new User([
            // 'id'  => $row[0],
            'prenom'  => $row[0],
            'nom'  => $row[1],
            'login' => $row[2],
            'password' => $row[3],
            'role' => "etudiant",
        ]);
    }
}
