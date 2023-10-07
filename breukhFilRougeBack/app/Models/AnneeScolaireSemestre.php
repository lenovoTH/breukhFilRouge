<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AnneeScolaireSemestre extends Model
{
    use HasFactory;

    public function annee_scolaire(): BelongsTo
    {
        return $this->belongsTo(AnneeScolaire::class);
    }

    public function semestre(): BelongsTo
    {
        return $this->belongsTo(Semestre::class);
    }

    public function cours(): HasMany
    {
        return $this->hasMany(Cour::class);
    }
}

