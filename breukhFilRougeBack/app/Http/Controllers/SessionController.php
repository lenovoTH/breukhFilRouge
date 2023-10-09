<?php

namespace App\Http\Controllers;

use App\Models\User;
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

    /**
     * Store a newly created resource in storage.
     */

    // public function getCoursDuProf($profId)
    // {
    //     $professeur = User::with('module.module.cour')->find($profId);
    //     return $professeur;
    // }

    public function store(Request $request)
    {
        $idcour = $request->cour;
        // $htotal = $idcour->heure;
        $duree = $request->duree;
        // $hrestant = $htotal - $duree;
        $salle = $request->salle;

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
        $compareEffectif = SessionCour::where('salle_id', $request->salle);
        if ($request->salle) {
            # code...
        }

        $session = SessionCour::create([
            'cour_id' => $request->cour,
            'salle_id' => $salle,
            'heure_debut' => $request->h_debut,
            'heure_fin' => $request->h_fin,
            'date' => $request->date,
            'duree' => $duree,
            // 'heure_restant' => $hrestant,
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
