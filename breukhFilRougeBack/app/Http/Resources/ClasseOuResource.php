<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClasseOuResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'classe_ouverte_id' => $this->classe,
            'filiere_id' => $this->filiere,
            'niveau' => $this->niveau,
            'effectif' => $this->effectif,
            // 'module_prof_id' => $this->module
        ];
    }
}
