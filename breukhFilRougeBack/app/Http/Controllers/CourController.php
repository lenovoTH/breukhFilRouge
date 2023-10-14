<?php

namespace App\Http\Controllers;

use App\Models\Cour;
use App\Models\User;
use App\Models\ModuleProf;
use Illuminate\Http\Request;
use App\Models\ClasseOuverte;
use App\Http\Resources\CourResource;
use App\Models\AnneeScolaireSemestre;
use App\Http\Resources\ModuleResource;
use App\Http\Resources\AnneeSemResource;
use App\Http\Resources\ModuleProfResource;

class CourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cours = Cour::filter()->get();
        return CourResource::collection($cours);
    }

    // public function filtrr()
    // {
    //     $search = Cour::find('etat', 0);
    //     return $search;
    // }

    // public function getModulesByProf($profId)
    // {
    //     $prof = User::find($profId);
    //     if (!$prof || $prof->role != 'prof') {
    //         return response()->json('message', "ce n'est pas un prof");
    //     }
    //     $modules = $prof->module;
    //     return response()->json($modules);
    // }

    public function getCoursByProf($profId)
    {
        $moduleProfs = ModuleProf::where('user_id', $profId)->with('cours')->get();
        $cours = collect();
        foreach ($moduleProfs as $moduleProf) {
            $cours = $cours->merge($moduleProf->cours);
        }
        return CourResource::collection($cours);
    }

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
            // 'annee_scolaire_id' => $id_annee,
            'annee_scolaire_id' => 1,
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
