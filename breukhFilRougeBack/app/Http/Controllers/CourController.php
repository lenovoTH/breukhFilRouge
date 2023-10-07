<?php

namespace App\Http\Controllers;

use App\Models\Cour;
use App\Models\ModuleProf;
use Illuminate\Http\Request;
use App\Models\ClasseOuverte;
use App\Models\AnneeScolaireSemestre;
use App\Http\Resources\ModuleResource;
use App\Http\Resources\AnneeSemResource;
use App\Http\Resources\CourResource;
use App\Http\Resources\ModuleProfResource;

class CourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cours = Cour::all();
        return CourResource::collection($cours);
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        $id_annee = $request->annee;
        $id_seme = $request->semestre;
        $classe = $request->classe;
        $id_module = $request->module;
        $id_prof = $request->prof;

        $module_prof = ModuleProf::where([
            'user_id' => $id_prof,
            'module_id' => $id_module
        ])->first();

        // return new ModuleProfResource($module_prof);

        $annesem = AnneeScolaireSemestre::where([
            'annee_scolaire_id' => $id_annee,
            'semestre_id' => $id_seme
        ])->first();

        // return new AnneeSemResource($annesem);

        foreach ($classe as $key) {
            $cour = Cour::create([
                'annee_scolaire_semestre_id' => $annesem->id,
                'classe_ouverte_id' => $key['class'],
                'module_prof_id' => $module_prof->id,
                'nbre_heure' => $key['heure']
            ]);
        }
        return new CourResource($cour);
    }

    public function filtre()
    {
        $etat = Cour::where('etat', 0)->filter();
    }

    /**
     * Display the specified resource.
     */

    public function show(Cour $cour)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cour $cour)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cour $cour)
    {
        //
    }
}