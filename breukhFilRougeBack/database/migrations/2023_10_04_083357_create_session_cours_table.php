<?php

use App\Models\Cour;
use App\Models\Salle;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('session_cours', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Cour::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(Salle::class)->constrained()->nullable()->onDelete('cascade');
            $table->time('heure_debut');
            $table->time('heure_fin');
            $table->integer('duree');
            $table->date('date');
            $table->integer('heure_restant')->nullable();
            $table->boolean('etat_annulation')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */

    public function down(): void
    {
        Schema::dropIfExists('session_cours');
    }
};

