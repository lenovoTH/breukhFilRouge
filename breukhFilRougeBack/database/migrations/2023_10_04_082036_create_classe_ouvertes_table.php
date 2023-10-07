<?php

use App\Models\Salle;
use App\Models\Classe;
use App\Models\Filiere;
use App\Models\AnneeScolaire;
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
        Schema::create('classe_ouvertes', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(AnneeScolaire::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(Classe::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(Filiere::class)->constrained()->onDelete('cascade');
            $table->string('niveau');
            $table->integer('effectif');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    
    public function down(): void
    {
        Schema::dropIfExists('classe_ouvertes');
    }
};

