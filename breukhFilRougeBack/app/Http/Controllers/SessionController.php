<?php

namespace App\Http\Controllers;

use App\Models\SessionCour;
use Illuminate\Http\Request;

class SessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        $idcour = $request->cour;
        $htotal = $idcour->heure;
        $duree = $request->duree;
        $hrestant = $htotal - $duree;

        SessionCour::create([
            'cour_id' => $request->cour,
            'salle_id' => $request->salle,
            'heure_debut' => $request->h_debut,
            'heure_fin' => $request->h_fin,
            'duree' => $duree,
            'heure_restant' => $hrestant,
        ]);
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
