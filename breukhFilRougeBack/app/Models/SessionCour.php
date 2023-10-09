<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SessionCour extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function cour(): BelongsTo
    {
        return $this->belongsTo(Cour::class);
    }

}
