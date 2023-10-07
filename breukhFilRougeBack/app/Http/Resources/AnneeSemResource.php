<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AnneeSemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'annee_scolaire_id' => AnneeResource::make($this->annee_scolaire),
            'semestre_id' => new SemestreResource($this->semestre)
        ];
    }
}
