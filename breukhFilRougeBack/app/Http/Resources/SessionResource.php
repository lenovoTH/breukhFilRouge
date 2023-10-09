<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SessionResource extends JsonResource
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
            'cour_id' => new CourResource($this->cour),
            'salle_id' => $this->salle,
            'heure_debut' => $this->heure_debut,
            'heure_fin' => $this->heure_fin,
            'duree' => $this->duree,
            'date' => $this->date,
            'heure_restant' => $this->heure_restant,
            'etat_annulation' => $this->etat_annulation,
        ];
    }
}
