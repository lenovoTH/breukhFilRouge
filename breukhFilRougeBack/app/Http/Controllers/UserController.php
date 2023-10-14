<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Inscription;
use Illuminate\Http\Request;
use App\Models\ClasseOuverte;
use App\Imports\EtudiantImport;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        $user = User::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'login' => $request->login,
            'password' => $request->password,
            'role' => $request->role,
            'grade' => $request->grade,
            'specialite' => $request->specialite
        ]);
        return response()->json($user);
    }

    // public function import(Request $request)
    // {
    //     $file = $request->file('file');
    //     if (!file_exists($file)) {
    //         return "le fichier n'existe pas!!!";
    //     }
    //     Excel::import(new EtudiantImport, $file, 'xlsx');
    //     return response()->json('All good!');
    // }

    public function import(Request $request)
    {
        return DB::transaction(function () use ($request) {
            $file = $request->file('file');
            if (!file_exists($file)) {
                return "le fichier n'existe pas!!!";
            }
            $eleves = Excel::toArray(new EtudiantImport, $file, 'xlsx');
            foreach ($eleves as $eleve) {
                foreach ($eleve as $el) {
                    $etudiant = (new EtudiantImport)->model($el);
                    $etudiant->save();
                    $etuId = $etudiant->id;
                    Inscription::create([
                        'user_id' => $etuId,
                        'classe_ouverte_id' => $request->classe_ouverte,
                    ]);
                    $classe = ClasseOuverte::where('id', $request->classe_ouverte)->first();
                    $classe->increment('effectif');
                }
            }
            return response()->json(['message' => 'All good!']);
        });
    }

    /**
     * Store a newly created resource in storage.
     */


    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
