<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Classe;
use App\Models\Module;
use App\Models\ModuleProf;
use Illuminate\Http\Request;
use App\Models\ClasseOuverte;
use App\Http\Resources\ClasseOuResource;
use App\Http\Resources\ProfRessource;
use App\Models\AnneeScolaire;
use App\Models\Semestre;

class ClasseController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        $classe_ouverte = ClasseOuverte::all();
        return ClasseOuResource::collection($classe_ouverte);
    }

    public function showProf($idmodule)
    {
        $module = Module::findOrFail($idmodule);
        $profs = $module->user;
        // $prof = User::where('role', 'prof')->get();
        return ProfRessource::collection($profs);
    }

    public function indexModule()
    {
        $modules = Module::all();
        return $modules;
    }

    public function indexAnnee()
    {
        $annees = AnneeScolaire::all();
        return $annees;
    }

    public function indexSemestre()
    {
        $semestre = Semestre::all();
        return $semestre;
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */

    public function show(Classe $classe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Classe $classe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Classe $classe)
    {
        //
    }
}
