<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class AnneeScolaire extends Model
{
    use HasFactory;

    public function semestre(): BelongsToMany
    {
        return $this->belongsToMany(Semestre::class, 'annee_scolaire_semestres');
    }
}
