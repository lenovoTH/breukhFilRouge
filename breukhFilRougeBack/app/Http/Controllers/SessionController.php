<?php

namespace App\Http\Controllers;

use App\Models\Cour;
use App\Models\User;
use App\Models\ModuleProf;
use App\Models\SessionCour;
use Illuminate\Http\Request;
use App\Http\Resources\SessionResource;

class SessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        $sessionCour = SessionCour::all();
        return SessionResource::collection($sessionCour);
    }

    public function getSessionsByProf($profId)
    {
        $moduleProfs = ModuleProf::where('user_id', $profId)->with('cours.session_cours')->get();
        $sessions = collect();
        foreach ($moduleProfs as $moduleProf) {
            foreach ($moduleProf->cours as $cour) {
                $sessions = $sessions->merge($cour->session_cours);
            }
        }
        return SessionResource::collection($sessions);
    }

    public function store(Request $request)
    {
        $idcour = $request->cour;
        $objcour = Cour::findOrFail($idcour);
        $nbreh = $objcour->nbre_heure;
        $hres = $objcour->heure_restant;
        $duree = $request->duree;
        $hres += $duree;
        $objcour->update(['heure_restant' => $hres]);
        return $objcour;

        if ($hres == $nbreh) {
            $objcour->update(['etat' => 1]);
            return response()->json("les heures pour ce cour sont terminés");
        }
        if ($request->h_fin < $request->h_debut) {
            return "l'heure de fin n'est pas approprié";
        }
        $compareSalle = SessionCour::where(['date' => $request->date, 'salle_id' => $request->salle])->get();
        foreach ($compareSalle as $key) {
            // return $key->heure_debut;
            if ($key->heure_debut <= $request->h_debut && $key->heure_debut < $request->h_fin) {
                return "Ces heures ne peuvent etre choisi";
            }
        }
        $compareCour = SessionCour::where(['date' => $request->date, 'cour_id' => $request->cour])->get();
        foreach ($compareCour as $key) {
            return $key;
            if ($key->heure_debut <= $request->h_debut && $key->heure_debut <= $request->h_fin) {
                return "le prof n'est pas disponible";
            }
        }

        // $compareEffectif = SessionCour::where('salle_id', $request->salle);
        // if ($request->salle) {
        //     # code...
        // }

        $session = SessionCour::create([
            'cour_id' => $request->cour,
            'salle_id' => $request->salle,
            'heure_debut' => $request->h_debut,
            'heure_fin' => $request->h_fin,
            'date' => $request->date,
            'duree' => $request->duree,
        ]);
        return $session;
    }

    /**
     * Display the specified resource.
     */

    public function show(SessionCour $sessionCour)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, SessionCour $sessionCour)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */

    public function destroy(SessionCour $sessionCour)
    {
        //
    }
}
