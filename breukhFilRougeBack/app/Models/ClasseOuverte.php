<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ClasseOuverte extends Model
{
    use HasFactory;

    public function classe(): BelongsTo
    {
        return $this->belongsTo(Classe::class);
    }

    public function cours(): HasMany
    {
        return $this->hasMany(Cour::class);
    }
    
}
