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
            'name'  => $row['name'],
            'email' => $row['email'],
        ]);
    }
}
