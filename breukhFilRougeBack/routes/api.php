<?php

use App\Models\Classe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourController;
use App\Http\Controllers\ClasseController;
use App\Http\Controllers\SessionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
});

Route::post('import', [UserController::class, 'import']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('logout', [AuthController::class, 'logout']);

Route::get('classes', [ClasseController::class, 'index']);
Route::get('salles', [ClasseController::class, 'indexSalle']);
Route::get('profs/{idModule}', [ClasseController::class, 'showProf']);
Route::get('modules', [ClasseController::class, 'indexModule']);
Route::get('annees', [ClasseController::class, 'indexAnnee']);
Route::get('semestres', [ClasseController::class, 'indexSemestre']);
Route::post('cours', [CourController::class, 'store']);
Route::get('cours', [CourController::class, 'index']);
Route::get('filtre', [CourController::class, 'filtre']);
Route::apiResource('sessioncour', SessionController::class);
Route::get('courprof/{idprof}', [SessionController::class, 'getCoursDuProf']);
