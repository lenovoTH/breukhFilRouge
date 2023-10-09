<?php

namespace App\Models;

use App\Models\SessionCour;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use eloquentFilter\QueryFilter\ModelFilters\Filterable;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cour extends Model
{
    use HasFactory;
    use Filterable;

    private static $whiteListFilter = [
        'etat',
    ];

    protected $guarded = [];

    public function classe_ouverte(): BelongsTo
    {
        return $this->belongsTo(ClasseOuverte::class);
    }

    public function annee_scolaire_semestre(): BelongsTo
    {
        return $this->belongsTo(AnneeScolaireSemestre::class);
    }

    public function module_prof(): BelongsTo
    {
        return $this->belongsTo(ModuleProf::class);
    }    

    public function session_cours(): HasMany
    {
        return $this->hasMany(SessionCour::class);
    }    
    
}

