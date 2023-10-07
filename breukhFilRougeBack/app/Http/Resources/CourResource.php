<?php

namespace App\Http\Resources;

use App\Models\ClasseOuverte;
use App\Models\ModuleProf;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CourResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            // 'annee_scolaire_semestre_id' => AnneeSemResource::make($this->annee_scolaire_semestre),
            'classe_ouverte_id' => new ClasseOuResource($this->classe_ouverte),
            'module_prof_id' => new ModuleProfResource($this->module_prof),
            'nbre_heure' => $this->nbre_heure,
            'etat' => $this->etat
        ];
    }
}

